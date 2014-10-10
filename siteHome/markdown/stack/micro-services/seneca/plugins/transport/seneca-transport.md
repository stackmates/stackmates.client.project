---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Seneca Transport
subheading: Execute Seneca actions in separate Seneca processes
returnLink: seneca
referenceUrl: https://github.com/rjrodger/seneca-transport
---

This plugin allows you to execute Seneca actions in separate Seneca processes. The default transport mechanism is HTTP. **Redis publish-subscribe is also built-in**.

This plugin provides the implementation for the listen, client, and proxy convenience methods on the Seneca object. It is included as a dependent module of the Seneca module.

You can provide your own transport mechanisms by overriding the transport action patterns.

## Concepts

* Action Patterns
* Hook Patterns
* Pattern Selection
* Logging
