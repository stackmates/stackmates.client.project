---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Seneca Core API
returnLink: engineer
---


use( name, options )
Register a plugin. The plugin will usually add some actions to the Seneca instance. You can optionally provide some options for the plugin (for example, database connection details).

ready( ready )
Provide a callback to be executed once all the plugins registered up this point are initialized. You use this to wait for database connections to establish.

add( pattern, action )
Add a new action to the Seneca instance. The action is triggered when an object matching the pattern is submitted to Seneca using the act method.

act( object, callback )
Invoke an action using an object. The action pattern that matches the object in the most specific manner will be invoked.

make( entity-canon, properties )
Create an instance of a data entity. The entity-canon defines the kind of entity to create ('product', 'sys/user', ...), and the properties (optional) define the values of some of the entity fields.

export( name )
Returns a reference to a named object. These are provided by some plugins so that you can integrate into other systems (for example, providing a middleware function for express).

log.level( entry0, entry1, ... )
Create a log entry using the Seneca logging system. Use this inside plugins as it handles all the context information (time, which plugin, etc) for you. Levels are debug, info, warn, error, fatal.

pin( pin-pattern )
Creates a convenience object that can call actions directly using method calls.

close( done )
Calls the close:name action on all plugins that have registered this action. You can use this to close database connections after tests complete to ensure the process ends.


Detailed Method Descriptions
use
The use method loads and registers plugins. You can refer to built-in plugins by name directly, for example: echo, options, mem-store, etc. External plugins need to be installed with npm install first, and then you can refer to them using their npm module name. See, for example, the seneca-user plugin. As a convenience, you can omit the seneca- prefix on standard plugins.

Example: registering the built-in mem-store plugin with custom options
var seneca = require('seneca')()
seneca.use( 'mem-store', {web:{dump:true}} )
The second argument to the use method is an options object containing configuration properties specific to the plugin. Refer to the documentation for each plugin to find out how to use them. If you're using the options plugin, properties in the options argument will override options loaded externally.

To use Seneca for your own business logic, the best approach is to define your own plugin (or plugins), and register these as needed with the use method. Your business logic actions can then be logged and extended as needed.

Example: creating your own (mini) plugin:
// file: mini.js
module.exports = function( options ) {
  this.add( {foo:'bar'}, function( args, done ){
    done( null, {say:options.say})
  })
}

// file: app.js
var seneca = require('seneca')()
seneca.use( 'mini', {say:'hello'} )
seneca.act( {foo:'bar'}, function( err, out ){
  // prints 'hello'
  console.log( out.say )
})
method signatures
use( name, options )
name: string, reference to plugin, used to build argument to require function
options: object, optional, contents depend on plugin
This method is synchronous (the Node.js built-in require function, used to load plugins, is synchronous itself). Add an init:name action for your plugin if you need to do asynchronous initialization.

ready
Each plugin can optionally define an action with the pattern init:name. If this action is defined, it will be called in series, in order, for any plugins that define it. You can ensure that database connections and other external dependencies are in place before using them. Just a reminder: the order of plugin registration is significant!

This method takes a callback function with the standard signature function( err, result ) { ... } as an argument. Inside this callback is where you would normally complete the initialisation of other parts of your app, such as setting up express.

Example: waiting for the database connection before inserting data
var seneca = require('seneca')()
seneca.use( 'mongo-store', { host:..., port:..., name:... } )
seneca.ready( function( err ) {
  if( err ) return console.log(err);

  seneca.make$('product',{name:'Apple',price:1.99}).save$()
})
You can call ready more than once. If you need to register additional plugins dynamically (this is perfectly fine!), you can call ready again to wait for the new plugins to initialize.

method signatures
ready( ready )
ready: function, callback with signature function(err), called after plugins initialize.
Seneca also emits a 'ready' event, which you can use instead of this function:

seneca.on('ready', function(err){ ... })
add
Add an action to the Seneca instance. You provide a key/value pair pattern that Seneca will match against objects that are submitted using the add method. When an object is submitted, Seneca will check the object's top-level properties in alphabetical order to see if there is a matching action.

The action is a function that accepts two arguments. The first is the object that was submitted, and the second is a callback tat you should call once your action has completed it's work. The callback has the standard signature function( err, result ). The callback must always be called, especially to report errors. The action result is optional, and you do not have to supply one if it does not make sense for your action.

Example: defining an action
seneca.add( {foo:'bar'}, function( args, done ){
  done( null, { zoo:args.zoo } )
})

seneca.act( {foo:'bar', zoo:'qaz'}, function( err, out ){
  // prints 'qaz'
  console.log( out.zoo )
})
You can define actions at any time, any where. They don't need to be associated with a plugin. Actions defined inside a plugin do get some logging meta-data however, so they're easier to manage in the long run.

method signatures
add( pattern, action )
pattern: object or string (key/value format)
action: function( args, done ) (action signature)
notes

add( pattern, paramspec, action )
pattern: object or string (pattern format)
paramspec: object (parameter specification)
action: function( args, done ) (action signature)
notes

act
...TODO...

method signatures
act( input, callback )
input: object, properties to be matched against previously added action patterns
callback: function( error, result ), optional (result signature)
notes

act( keyvaluepairs, object, callback )
keyvaluepairs: string (key/value format)
input: object, properties to be matched against previously added action patterns
callback: function( error, result ), optional (result signature)
notes

make
...TODO...

method signatures
make( entity-canon, properties )
entity-canon: string, (entity canon format)
properties: object, optional, initial values of some of the data fields
notes

export
...TODO...

method signatures
export( name )
name: string, reference to plugin provided object
notes

pin
...TODO...

method signatures
pin( pin-pattern )
pin-pattern: object or string (pin pattern format)
notes

log
...TODO...

method signatures
log.level( entry0, entry1, ... )
entryX: JavaScript value, converted to string
notes

close
...TODO...

method signatures
close( done )
done: function, optional, callback with signature function(err), called after all close actions complete.
notes
