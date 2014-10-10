---
template: page.hbs
thought_process: drmg-external-proposal
flow: 2
nextStep: 3
type: provocation
tags: general, business
metaPalette: engineer
haikuHeading: Desire
haikuThought: Leadership Communication Innovation
haikuAction: Don't paint yourself into a corner
---

Create multiple client sites or apps from a [StackMates Starter](https://github.com/stackmates/it-starts-upfront) to begin evolving [your digital footprint](https://www.mindmup.com/#m:g10B_isMPC-_gvmTU5JN0c1QjNGbjg) from a common base using a system designed to maximise code reuse with ...

* Ability to seperate client and backend work
* A common build system for all your client projects (less maintenance)
* Choice of Rework or SASS
* Choice of UX Patterns with Handlebars and Angular
* Static sites for marketing with Metalsmith
* CORS Authentication
* Build web and mobile apps that share angular logic
* Roll your apps with Browserify
* Easily common CSS style rules across all digital properties
* Hapijs API
* Seneca Micro-service
* Vagrant + Docker development environment

All in around 20 mins plus the time to have a coffee while npm installs modules. To start building with your own stack [follow these instructions](https://github.com/stackmates/stackmates/)

## What are StackMates

StackMates are represented by a collection of configuration files that pull together fullstack solutions from micro components. 

The creation of StackMates was directly influenced by watching the following talks by Substack and Fred George with the intent to create a better way to **share knowledge** of how micro components can be creatively combined to solve large problems. A hopeful by-product is to help [research scientists](http://www.gbif.org/) solve the real problems we face while in turn providing developers challenges to solve and teach with that have **context and positive impact**.

* [Client: Tiny Modules by Substack](https://www.youtube.com/watch?v=uGaiBiRAcsI&feature=youtu.be&a) 
* [Services: Implementing Microservice Architectures by Fred George](https://vimeo.com/user22258446/review/79288222/cbb24b224c)

## Selection Criteria

Solutions are temporary but **good questions are timeless**. The main goal of this project is to advance how to interpret the value of different approaches to developing software. See [mind map](https://www.mindmup.com/#m:g10B_isMPC-_gvmSDE5TU0wMU9nTmc) for ideas on selection criteria.


### Leadership

* A strong custodian that lives by their values

### Communication

* Clearly defines job to be done
* Strong focus on teaching

### Innovation

##### Development

* Productivity
* Performance
* Flexibility

##### Ecosystem

* Dyanamic library
* Developer adoption / enthusiasm
* Proof - working examples


### Theory & goals

StackMates focuses on micro components based on the belief that monolithic stacks no matter how well intended eventually encourage fiefdoms of protectionism that ultimately lead to entropy. Instead micro culture is about reinventing on principle where [everything is considered disposable](http://www.youtube.com/watch?v=7aGStT29fs0).


* Don't mix build logic in your domain specific code have a master build engine - minimise rework
* Identify a solid core of standard modules by job to be done
* Create taxonomy for standard UX patterns - like bootstrap has but based on Suit.css
* Create a spotter network for fullstack solutions out on micro components to save time hunting around modules
* Allow developers to create, share, analyse trends of StackMate bundles
* Create consistent evolution path for publishing new npm modules or services
* Teach new concepts in context of a larger ecosystem

### StackMates config files

* [NPM: package.json](https://github.com/stackmates/stackmates/blob/master/client/package.json)
* [Rework: main.css](https://github.com/stackmates/it-starts-upfront/blob/master/appLob/style/main.css) or [SASS: main.scss](https://github.com/stackmates/it-starts-upfront/blob/master/appIonic/style/ionic.app.scss)
* [Browserify: index.js](https://github.com/stackmates/it-starts-upfront/blob/master/appLob/js/index.js)
* [Gulp: config](https://github.com/stackmates/it-starts-upfront/blob/master/siteHome/config/gulp.js) 
* [Hapi: config](http://vawks.com/blog/2014/03/18/hapi-confidence/)

Docker orchestration?
* [Fig](http://www.fig.sh/)
* [nscale](https://github.com/nearform/nscale)
* [Kubernetes](https://github.com/GoogleCloudPlatform/kubernetes)

See a summary of [StackMates' Components](https://docs.google.com/a/dreamineering.com/spreadsheets/d/1x0Fy072BB8hYg2d1j9xpOTG8AW1qHPQo6bENY-0Vx78/edit#gid=893063072)

### Development Flow

* Substance - first principles inputs and desired outputs
* Structure - how to make things flow
* Connection - give client what they need when they need 

**Client: it starts up front:** In rugby there is an adage that if you don't win the battle upfront you will probably lose the game. By the same token if you don't provide an engaging user experience you won't win customers data. 

By **starting upfront** you don't lose your story and run the risk of creating results that customer don't want. 

* [Seperate client and backend on principle until business case justifies it](http://netengine.com.au/blog/gulp-and-angularjs-a-love-story-or-the-old-wheel-was-terrible-check-out-my-new-wheel/)
* [Don't begin services work until you have worked out the UX story](http://drt.fm/ryan-singer/)

**Services: feed the backs:** Again from rugby - though more controversial - you need to feed your backs to convert possesion and territory into points. This is analogous to capturing as much data as you can to turn into insights for growing profits.

* Make decisions based on KPIs that directly impact cashflow
* Capture everything, publish conclusions


### Introduction

Continue on for an introduction to the stack and why each technology has been chosen. Or see [this spreadsheet](https://docs.google.com/a/dreamineering.com/spreadsheets/d/1x0Fy072BB8hYg2d1j9xpOTG8AW1qHPQo6bENY-0Vx78/edit#gid=893063072) for a fast overview.

