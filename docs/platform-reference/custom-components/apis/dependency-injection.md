---
id: dependency-injection
title: Dependency Injection
sidebar_label: Dependency Injection
sidebar_position: 7
---

# Dependency Injection

Genesis supports some of the key annotations from javax.annotation and javax.inject defined in [Java Platform Enterprise Edition](https://docs.oracle.com/javaee/7/index.html) by using Google Guice as the internal dependency injection mechanism. In addition Genesis provides some of it's own annotations.

## @Module

All classes requiring creation on microservice startup need to be annotated with the @Module annotation, which also ensures the instance is created as singleton.

## @ProviderOf

Used to annotate a class that is responsible for acting as Factory for a specified type. Adding the @Singleton annotation ensures only one Factory class is created.

Example:-
```kotlin
import com.google.inject.Provider
import com.google.inject.Singleton

@Singleton
@ProviderOf(type = PriceFeed::class)
class PriceFeedProvider : Provider<PriceFeedProvider> {
    override fun get(): PriceFeed {
        return new PriceFeed()
    }
}
```

## @Inject
Used to annotate a field or constructor to indicate to Genesis that it should inject an object of matching type during the dependency injection stage. These types can be provided with the aforementioned **@Module** and **@ProviderOf** annotations. You should use the [java](https://docs.oracle.com/javaee/7/api/javax/inject/Inject.html#:~:text=Injectable%20constructors%20are%20annotated%20with,most%20one%20constructor%20per%20class.&text=%40Inject%20is%20optional%20for%20public,injectors%20to%20invoke%20default%20constructors.) **@Inject** annotation for best practices.

## @Named

This annotation is used to provide genesis system definition properties as part of the dependendency injection mechanism and should be used alongside @Inject.

## @PostConstruct

The Genesis microservice runtime environment will call this only once after initialization of the object, including all injected beans.

## @PreDestroy

The Genesis microservice runtime environment will call this only once just before genesis removes the object from the application context on JVM shutdown.

## Example

Combining a **@Module**, **@Named** and **@Inject** annotation on a constructor and on a field, and also using **@PostConstruct** and **@PreDestroy**

```kotlin
@Module
class PriceFeed @Inject constructor(@Named("CONNECTION_URL") private val connectionUrl: String) {

    @Inject
    private lateinit var value: Value

    @PostConstruct
    fun init() {
        // code would go here
    }

    @PreDestroy
    fun cleanUp() {
        // code would go here
    }
}
```


## Conditional annotations
### Conditional on property
You can define a module as conditional based on system definition properties. As an example, our AeronDriverModule will only be instantiated if the MqLayer property is set to AERON. See example annotations below:

```kotlin
@Module
@ConditionalOnProperty("MqLayer", conditionalValue = "AERON")
```

### Conditional on class
Likewise, modules can be defined to be conditional on classes, so if the selected class has been instantiated (e.g. the previous example shown as AeronDriverModule), then our dependency injection mechanism will instantiate this class as well.

```kotlin
@Module
@ConditionalOnClass(AeronDriverModule::class)
```

### Conditional on missing class
We can also add conditional modules on missing classes. This annotation is very helpful if an “extension” mechanism is to be developed as part of a genesis product/framework. For example, you could define an interface, and a @Module implementing this interface with a conditional on that interface class being missing. This means that if a class is defined as a @Module which implements that interface, that class will be selected (i.e. this class can be defined in an external jar and added to classpath using framework config). If no class is defined as a **@Module** to implement that interface, then the **@ConditionalOnMissingClass** module will be instantiated.

For example, lets imagine we want to create a “hook” into our message handling logic, so it can be extended as desired in different products. The interface and default class would look like this in Kotlin:

```kotlin
interface MessageTracer{
    fun onMessageReceived(msg: Message)
}

@Module
@ConditionalOnMissingClass(MessageTracer::class)
class DefaultMessageTracer : MessageTracer{
    override fun onMessageReceived(msg: Message) = println("This is a message $msg")
}
```
If an application requires custom logic, a new **@Module** class could be defined in a separate jar file like this:

```kotlin
@Module
class ProductMessageTracer : MessageTracer{
    override fun onMessageReceived(msg: Message) = println("Hi $msg")
}
```
If this the package for this class is available in the classpath (i.e.``` <classpath>``` section in processes.xml) and is also being scanned (i.e. ```<package>``` section in processes.xml), ProductMessageTracer will take precedence when starting the process and DefaultMessageTracer will be ignored. Otherwise, DefaultMessageTracer will be instantiated.

### Conditional on property and missing class
Lastly, we have a combination of both “conditional on property” and “conditional on missing class “annotations. Referring to the previous example, we could use both features at once like this:

```kotlin
@Module
@ConditionalOnPropertyAndMissingClass("MessageTracer", conditionalValue = "DEFAULT", MessageTracer::class)
class DefaultMessageTracer : MessageTracer{
    override fun onMessageReceived(msg: Message) = println("This is a message $msg")
}

```
The process will crash on startup if the system definition value for MessageTracer is set to anything other than DEFAULT and no implementation have been provided for MessageTracer . This annotation can be used to enforce good practices.

## Injectable properties from System Definition

#### Example of "genesis-system-definition.kts" file

```kotlin
systemDefinition {
    global {
        item(name = "CONFIG_FILE_NAME", value = "/data/")
        // other params omitted for simplicity
    }
}
```

#### System Definition property being referenced in java file
```java
@Inject
public RequestReplyDefinitionReader(RxDb db,
                                    @Named("CONFIG_FILE_NAME") String configFileName) throws GenesisConfigurationException {
    this(db.getDictionary(), configFileName);
}
```