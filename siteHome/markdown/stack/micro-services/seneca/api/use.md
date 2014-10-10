---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Seneca API - Use
summary: Register a plugin
returnLink: Seneca Core
---

Where a plugin will usually add some actions to the Seneca instance. You can optionally provide some options for the plugin (for example, database connection details).

### Method Signatures

use( name, options )

**name:** string, reference to plugin, used to build argument to require function
**options:** object, optional, contents depend on plugin

#### Note

This method is synchronous (the Node.js built-in require function, used to load plugins, is synchronous itself). Add an init:name action for your plugin if you need to do asynchronous initialization.

### Used when

The use method loads and registers plugins. You can refer to built-in plugins by name directly, for example: echo, options, mem-store, etc. External plugins need to be installed with npm install first, and then you can refer to them using their npm module name. See, for example, the seneca-user plugin. As a convenience, you can omit the seneca- prefix on standard plugins.


### Examples

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

