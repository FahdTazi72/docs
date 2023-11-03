<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [Socket](./foundation-comms.socket.md)

## Socket interface

Represents a WebSocket used to establish a communication channel between client and a Genesis server. Provides methods for socket connection, sending and receiving WS messages.

**Signature:**

```typescript
export interface Socket 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [hasValidSession](./foundation-comms.socket.hasvalidsession.md) |  | boolean |  |
|  [isConnected](./foundation-comms.socket.isconnected.md) |  | boolean |  |
|  [isConnectedSubject](./foundation-comms.socket.isconnectedsubject.md) |  | BehaviorSubject&lt;boolean&gt; |  |
|  [isReconnecting](./foundation-comms.socket.isreconnecting.md) |  | boolean |  |

## Methods

|  Method | Description |
|  --- | --- |
|  [connect(host, options, reconnectOptions)](./foundation-comms.socket.connect.md) |  |
|  [reset()](./foundation-comms.socket.reset.md) | Disconnects the socket and clears all subscriptions |
|  [send(message, needsHandling)](./foundation-comms.socket.send.md) |  |
|  [sendForStream(message, onMessage, onError)](./foundation-comms.socket.sendforstream.md) |  |
|  [socketMessages()](./foundation-comms.socket.socketmessages.md) |  |
