---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Seneca Core
subheading: Building Blocks
returnLink: engineer
---


[*Define the main actors and provide and overview of and get into details of how under api*]

* JSON Commands
* Pattern Matching
* Pinning
* Plugins
* Transports
* Data Entities



### JSON Commands and Pattern Matching


With Seneca *Everything runs as a command* you send the micro-service JSON objects. It responds with a new JSON object.

You create an object with methods that matched all the cmd properties then if you send the micro-service JSON objects and Seneca responds with a new JSON object.

```
require('seneca')()
  .add(
        { generate:'id'},
        function( message, done ) {
          done( null,
                {id:''+Math.random()} )
        })
  .listen()
```

1. load seneca module, and create instance
2. add a JSON message pattern to match
3. the pattern is {...,"generate":"id",...}
4. the action function for the pattern,
5. done is a regular callback function
6. send back JSON result, {"id":"0.123456789"}
7. listen for messages (HTTP is the default)


```
require('seneca')()
  .client()
  .act( { generate:'id' },
        function( err, result ) {
          console.log(JSON.toString(result))
        })
```

1. Register as a client
2. Send a message: {"generate":"id"}
3. The result arrives via a callback function
4. Print out the result: {"id":"0.123456789"}


seneca.add adds a new command whilst seneca.act acts on the provided pattern, running a command if it matches



### Pinning

By pinning a pattern you create an object with methods that matched all the cmd properties.





Seneca achieves this by *pinning a pattern*


### Plugins

Catagories Core, Transport, Data Stores


### Transports

The **main benefit of Seneca** is realized through the concept of transports which allow calling business logic and data transfer between machines easily this has the advantage that if a product command needs to live on a separate server you move it there with no changes to your calling code.

### Available Transport Plugin Options

* HTTP (Default)
* Pub/Sub: Redis
* Message Bus: Kaftka


##### Transport Servers

The default transport type of plugin is HTTP, with dependency on either express or connect.

* Seneca exposes any plugin HTTP interface by returning a middleware function from the seneca.service method
* There is no need to 'transport' the remote patterns


##### Transport Client

The pins option to the transport plugin accepts a set of patterns that will be sent over to the server (running on localhost by default). The transport plugin just calls seneca.add for each pin, and proxies the input and output to the remote server.


> Split logic between machines easily with transports

In the calling code the seneca.act call, does not change therefore

**You now have a distributed system with no refactoring**

**You can fire up multiple servers, put them behind a load balancer, and now you have a scalable system too.**





<p class='u-textCenter u-paddingTl'>
  <a class='u-linkBorderBottom'  href='/#engineerConnection'>Jump back in the flow</a>
</p>

<p class='u-textCenter'>
  <a class='u-linkBorderBottom' target='_blank' href='https://drive.google.com/a/dreamineering.com/#folders/0B_isMPC-_gvmazkydHptZWNPYWs'>Google Docs</a>
</p>
