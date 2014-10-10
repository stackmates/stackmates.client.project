---
template: page.hbs
thought_process: drmg-external-proposal
flow: 6
nextStep: 7
type: provocation
tags: general, business
metaPalette: philosopher
haikuHeading: NPM
haikuThought: Browserify
haikuAction: The power of tiny modules


introduction: 


leadership: 


communicationJob: 


communicationTeaching: 


innovation: 


developmentProductivity: 


developmentPerformance: 


developmentFlexibility: 


ecosystemDevelopers: 


ecosystemProof: 


ecosystemModules:


stackmatesComponent: 
---

Substack's Browserify demos are a big inspiration for this project. Browserify lets you require('modules') in the browser by bundling up all of your dependencies.

What [Browserify](http://browserify.org/) enables is helping developer to think small by modules that do one job but can be combined together with [open possibilities](https://www.youtube.com/watch?v=uGaiBiRAcsI&feature=youtu.be&a) 

### Benefits

**Speed of development:** There is a learning curve but once a you know the npm ecosystem then you are away.

**Performance:** Providing you select modules wisely you can use only the javascript you need to ensure fast page load times.

**Flexibility:** With knowledge of the browserify and NPM you can build anything without a framework. This apporach has advantages when very specific solutions with minimal code footprint is required.

**Developer support & innovation:** This could be the greatest strength, [ampersand](http://ampersandjs.com/) and [mercury](https://github.com/Raynos/mercury) are two projects built around the idea of using browserify to build flexible solutions, while [famou.us](http://famo.us) has browserify support in the pipeline.


### Problems

The problem with browserify is finding the module you want and getting modules to work that are not written for NPM. Understanding how to evaluate whether to use a module.

But solving this problem is one use case that sharing StackMate bundles is intended to resolve.

### Structure

Common are split into [util modules](https://github.com/stackmates/stackmates/tree/master/client/src/common/util_modules) and modules that support [ux patterns](https://github.com/stackmates/stackmates/tree/master/client/src/common/ux_patterns) for example [site nav overlay](https://github.com/stackmates/stackmates/tree/master/client/src/common/ux_patterns/site_nav_overlay)

### Workflow

Sites and Apps can be built from anything that can be browserified

**Module Development:** Code starts in specific projects then be extracted into StackMates Common Directory to be further researched for whether another module exists in NPM or if a new NPM module should be created. The idea of having a holding areas is to allow a bit more thought about whether a better solution for the ecosystem rather than polute NPM needlessly with new modules.

App specific => Common => Find best pattern => Research NPM => Create necessary modules in NPM

### StackMates Component

* index.js 

### Learn more

* [Substack - finding modules](http://substack.net/finding_modules)
* [Mind Map](https://www.mindmup.com/#m:g10B_isMPC-_gvmaWVteGlCbjVIVFU)


### Unknowns / Jobs

* Good heuristics for module review and update
* Establish heuristics for module extraction process
* Is it a good idea to move package.json upstream for clearer demarcation of module purpose?
* Replace bower components
