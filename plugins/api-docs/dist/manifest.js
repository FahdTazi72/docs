"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    packages: [
        {
            name: "@genesislcap/foundation-testing",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/06_testing",
                api_docs: "docs/api",
                readme: "01_foundation-testing.mdx",
                keywords: ["genesis", "foundation", "ui", "testing"],
                tags: [
                    "test",
                    "testing",
                    "frontend",
                    "ui",
                    "unit",
                    "end-to-end",
                    "e2e",
                    "uvu",
                    "playwright",
                ],
                pages: [
                    {
                        title: "Foundation Testing",
                        id: "foundation-testing",
                        sidebar_label: "Foundation Testing",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-filters",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/09_filters",
                api_docs: "docs/api",
                readme: "01_foundation-filters.mdx",
                keywords: ["genesis", "foundation", "ui", "filters"],
                tags: ["filter", "feature", "flags", "conditions"],
                pages: [
                    {
                        title: "Foundation Filters",
                        sidebar_label: "Foundation Filters",
                        id: "foundation-filters",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-reporting",
            enabled: true,
            src: {
                img_dir: "docs/img",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/05_micro-front-ends/02_front-end-reporting",
                img_dir: "docs/img",
                readme: "02_foundation-reporting.mdx",
                keywords: ["web", "frontend", "ui", "micro-front-ends", "reporting"],
                tags: ["web", "frontend", "ui", "micro-front-ends", "reporting"],
                pages: [
                    {
                        title: "Foundation Reporting",
                        sidebar_label: "Foundation Reporting",
                        id: "foundation-reporting",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-header",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                img_dir: "docs/img",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/05_micro-front-ends/03_foundation-header",
                api_docs: "docs/api",
                img_dir: "docs/img",
                readme: "03_foundation-header.mdx",
                keywords: [
                    "header",
                    "sidebar",
                    "frontend",
                    "ui",
                    "mf",
                    "web",
                    "micro frontends",
                ],
                tags: [
                    "header",
                    "sidebar",
                    "frontend",
                    "ui",
                    "mf",
                    "web",
                    "micro frontends",
                ],
                pages: [
                    {
                        title: "Foundation Header",
                        sidebar_label: "Foundation Header",
                        id: "foundation-header",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-entity-management",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                img_dir: "docs/img",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/05_micro-front-ends/04_foundation-entity-management",
                api_docs: "docs/api",
                img_dir: "docs/img",
                readme: "04_foundation-entity-management.mdx",
                keywords: [
                    "entity management",
                    "frontend",
                    "micro-front-ends",
                    "profile management",
                    "ui",
                    "user management",
                    "web",
                ],
                tags: [
                    "entity management",
                    "frontend",
                    "micro-front-ends",
                    "profile management",
                    "ui",
                    "user management",
                    "web",
                ],
                pages: [
                    {
                        title: "Foundation Entity Management",
                        sidebar_label: "Foundation Entity Management",
                        id: "foundation-entity-management",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-login",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                img_dir: "docs/img",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/05_micro-front-ends/05_foundation-login",
                api_docs: "docs/api",
                img_dir: "docs/img",
                readme: "05_foundation-login.mdx",
                keywords: [
                    "web",
                    "login",
                    "foundation login",
                    "frontend",
                    "ui",
                    "micro-front-ends",
                ],
                tags: [
                    "web",
                    "login",
                    "foundation login",
                    "frontend",
                    "ui",
                    "micro-front-ends",
                ],
                pages: [
                    {
                        title: "Foundation Login",
                        sidebar_label: "Foundation Login",
                        id: "foundation-login",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-layout",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                img_dir: "docs/img",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/10_dynamic-layout",
                api_docs: "docs/api",
                img_dir: "docs/img",
                readme: "10_foundation-layout.mdx",
                keywords: [
                    "web",
                    "layout",
                    "foundation layout",
                    "frontend",
                    "ui",
                    "golden layout",
                ],
                tags: [
                    "web",
                    "layout",
                    "foundation layout",
                    "frontend",
                    "ui",
                    "golden layout",
                ],
                pages: [
                    {
                        title: "Foundation Layout",
                        sidebar_label: "Foundation Layout",
                        id: "foundation-layout",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-comms",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/11_comms",
                api_docs: "docs/api",
                readme: "01_foundation-comms.mdx",
                keywords: ["genesis", "foundation", "ui", "comms"],
                tags: [
                    "data server",
                    "request server",
                    "event handler",
                    "stream",
                    "snapshot",
                ],
                pages: [
                    {
                        title: "Foundation Comms",
                        sidebar_label: "Foundation Comms",
                        id: "foundation-comms",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-forms",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/12_forms",
                api_docs: "docs/api",
                readme: "01_foundation-forms.mdx",
                keywords: ["genesis", "foundation", "ui", "forms", "smart forms"],
                tags: ["genesis", "foundation", "ui", "forms", "smart forms"],
                pages: [
                    {
                        title: "Foundation Forms",
                        sidebar_label: "Foundation Forms",
                        id: "foundation-forms",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-criteria",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/13_criteria",
                api_docs: "docs/api",
                readme: "01_foundation-criteria.mdx",
                keywords: ["genesis", "foundation", "ui", "criteria"],
                tags: ["genesis", "foundation", "ui", "criteria"],
                pages: [
                    {
                        title: "Foundation Criteria",
                        sidebar_label: "Foundation Criteria",
                        id: "foundation-criteria",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-errors",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/14_errors",
                api_docs: "docs/api",
                readme: "01_foundation-errors.mdx",
                keywords: ["genesis", "foundation", "ui", "errors"],
                tags: ["genesis", "foundation", "ui", "errors"],
                pages: [
                    {
                        title: "Foundation Errors",
                        sidebar_label: "Foundation Errors",
                        id: "foundation-errors",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-events",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/15_events",
                api_docs: "docs/api",
                readme: "01_foundation-events.mdx",
                keywords: ["genesis", "foundation", "ui", "events"],
                tags: ["genesis", "foundation", "ui", "events"],
                pages: [
                    {
                        title: "Foundation Events",
                        sidebar_label: "Foundation Events",
                        id: "foundation-events",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-i18n",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/16_i18n",
                api_docs: "docs/api",
                readme: "01_foundation-i18n.mdx",
                keywords: ["genesis", "foundation", "ui", "i18n", "internationalization"],
                tags: ["genesis", "foundation", "ui", "i18n", "internationalization"],
                pages: [
                    {
                        title: "Foundation Internationalization",
                        sidebar_label: "Foundation Internationalization",
                        id: "foundation-i18n",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-logger",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/17_logger",
                api_docs: "docs/api",
                readme: "01_foundation-logger.mdx",
                keywords: ["genesis", "foundation", "ui", "logger"],
                tags: ["genesis", "foundation", "ui", "logger"],
                pages: [
                    {
                        title: "Foundation Logger",
                        sidebar_label: "Foundation Logger",
                        id: "foundation-logger",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-notifications",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/19_notifications",
                api_docs: "docs/api",
                readme: "01_foundation-notifications.mdx",
                keywords: ["genesis", "foundation", "ui", "notifications"],
                tags: ["genesis", "foundation", "ui", "notifications"],
                pages: [
                    {
                        title: "Foundation Notifications",
                        sidebar_label: "Foundation Notifications",
                        id: "foundation-notifications",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-shell",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/20_shell",
                api_docs: "docs/api",
                readme: "01_foundation-shell.mdx",
                keywords: ["genesis", "foundation", "ui", "shell"],
                tags: ["genesis", "foundation", "ui", "shell"],
                pages: [
                    {
                        title: "Foundation shell",
                        sidebar_label: "Foundation shell",
                        id: "foundation-shell",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-store",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/22_store",
                api_docs: "docs/api",
                readme: "01_foundation-store.mdx",
                keywords: ["genesis", "foundation", "ui", "store"],
                tags: ["genesis", "foundation", "ui", "store"],
                pages: [
                    {
                        title: "Foundation Store",
                        sidebar_label: "Foundation Store",
                        id: "foundation-store",
                    },
                ],
            },
        },
        {
            name: "@genesislcap/foundation-user",
            enabled: true,
            src: {
                api_docs: "./docs/api",
                readme: "./README.md",
            },
            output: {
                directory: "./docs/04_web/23_user",
                api_docs: "docs/api",
                readme: "01_foundation-user.mdx",
                keywords: ["genesis", "foundation", "ui", "user"],
                tags: ["genesis", "foundation", "ui", "user"],
                pages: [
                    {
                        title: "Foundation User",
                        sidebar_label: "Foundation User",
                        id: "foundation-user",
                    },
                ],
            },
        },
    ],
};
