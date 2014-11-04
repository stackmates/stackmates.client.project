---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Go with the flow
subheading: Embrace Chaos
returnLink: engineer
---

What you are working with / making

* [substance](./substance)
* [structure](./structure)
* [connection](./connection)



Getting your feet wet by creating a microservice project without managers, business analysts or dedicated testers.

### Habits to reinforce

* Direct customer interaction
* Fast not perfect
* No dev ops just developers with complementary strengths
* Define desired reults
* Identify Target KPI


### Habits to break

* Don't build Stonehenge
* Don't be afraid to break stuff (it can be quickly put right risk minimised)

## Microservice Implementation

With a microservices implementation understanding event streams is you chance for opportunity


* OK to run more than one version of a service
* Deploy new version of server to deploy service
* Transfer JSON Packages
* No risk by keeping earlier version, easy to redeploy
* About capturing and recording events
* Make and publish decisions
* Capture as much data as you can. The cost is cheap relative to unknown opportunities you have portential to uncover
* Process and Architecture are orthogonal concepts


### Common building blocks

* [json schema](http://json-schema.org/)
* [zookeeper](http://zookeeper.apache.org/)


### Recommendations

* Loosely coupled
* Think really small
* Self monitoring
* clear metrics 'are we making more money?'


## Microservices with Seneca

* JSON Commands
* Pattern Matching
* Pinning
* Plugins
* Transports
* Data Entities



# Substance

As in draw the substance out.



## Job to be done

Assemble raw materials and refine into useable resources that provide the substance of what is required.

Guards over and provides a nicer interface to raw content

## Needs

Access to 'outside' data sources

## Provides

Clean accurate, timely data


## Questions


* Are data services dumb as possible? to prevent need to rewrite?
* How are data services replaced? 
* Should data service container would also have DB container or do you push up a new data service and then migrate data? But then you must have to take old service down in this case 
* Try out [dat](http://dat-data.com/) for sharing static data?





# Flow

[Communication and Strategy](https://drive.google.com/drive/u/0/?rfd=1#folders/0B_isMPC-_gvmdXU0YWd0UmdSLTQ/0B_isMPC-_gvmbkZhcWdaR2trVms/0B_isMPC-_gvmUXJoX0toXzdpRmc)


## Habits

[Good practices](https://github.com/timoxley/best-practices)


## Tools



### Google drive tools

[Stackedit.io](https://stackedit.io)


## Voices & Loops

As a process dreamineering works on the idea of evolving two voices to communicate and shape your identity.

These voices help inform you design decisions and may even morph into your product. If psychology it right the closer you get to these voice being in synch the happier you will be.

* Internal
* External

While both have a provocation and affirming loops to question your reason for being and affirm what that is respectively. The goal is to constantly evolve these to reflect your current understanding of your place in the world now and into the future.

### Internal

This is the voice used to communicate within the inner circle of people that make whatever it is that you do. This is more inside baseball lingo. Shortcut slang that only the hardcore would understand but would also have links to private info you don't want to or can't share with public. Dependent on you culture this could be completely open.

#### Purpose 


* Engineer your vision 
* Show leadership
* Inform plans
* Report state

### External

#### Purpose

Sell to others

Your voice to you customers and your efforts to understand them

* Listen
* Sell your vision
* Educate about your products
* Show honesty


A question will prove you understand a domain far better than a solution



Thoughts on [Programmer Anarchy by Fred George](https://vimeo.com/43690647)

Don't stand for ceremony, look for challenges and then [make things work](http://www.youtube.com/watch?v=uk-CF7klLdA) by moving the needle of a relevent business metric.

The reason this anarchist approach resonates with me is because I've had to fill this anarchist role on several occasions when working in telecommunications where the official development channels were so overburdened with bureaucracy and architectural patterns etc it was faster for me to buy a book and implement a rough solution that plugged a gap. This saved a fair amount of money in developing a proper implementation but that was dwarfed by the opportunity cost.

I've also been on the wrong side sitting in meetings with more programme and projects managers than people who do the real work. All I know for sure is good developers have no need for managers. 

Two reasons I think engineers are seen to need managers are

1. It is easy to get too wrapped up in the how (creating text book solution) rather than plugging the gap. But incentives based on moving a business metric that proved value would take care of that.
2. Engineers are not that good or perhaps interested in selling their story and this needs to be done before the problem is solved as nobody is interested after a *happy accident*



Build a culture based upon shared learning as those that learn together grow together. Create teams of 5 to 8 people with a goal to *move the needle* on a specific KPI and then leave them alone to self organise and deliver. Rather than onerous management promote leadership and focus on creating a strong morale.


To create an environment for delivering microservices

* Eliminate fear
* Don't make rules
* Embrace chaos
* Allow mistakes but demonstate lessons learned from them

## Valued Practices

* Simplicity
* Feedback
* Communication
* Courage
* Respect


### Do not bother with

Standups, story narratives, retropectives, estimates, iterations, mandatory pairing, unit tests, acceptance tests, refactoring, patterns and continous integration

## Good Character

* Curious self learner
* Unconcerned with departmental boundaries
* Delivery focused with hunger to reach their best
* Seeks complicated problems to solve

## Organisational Structure

* Emphasize skills over titles
* Avoid artificial schedule pressure

<p class='u-textCenter'>
  <a class='u-linkBorderBottom' target='_blank' href='https://drive.google.com/a/dreamineering.com/#folders/0B_isMPC-_gvmZU1VUGxmOVlacTg'>Resources</a>
</p>



## Desired

* Enable evolutionary design
* Decentralization
* Deployment automation
* Remove fear of deployment
* Graceful degragation
* [Enable emergent technologies](http://blog.crowdint.com/2014/06/04/magmaconf-14-liveblogging-fred-george-enabling-emergent-technologies.html)

### Lower cost of experimentation


### Eliminate waste

### Continous Deployment


### Read from Rivers, Write to Rapids

### Think of it as a living system

More like a living body, constantly evolving and changing


### All about results, all about business metrics


### Waste messages, repeat yourself


### Rapids, Rivers & Ponds

### Write to rapids


### Always publish conclusions

### Capture Events
### Companies want to experiment

### No unit tests

make smart services that raise their hand if they can't do their job.


### No acceptance testing

* Write monitoring into the system
* Create business metrics
* Enables speed to invent


### Arbitrarily take bits of the system down


## Tyoes of services

listen to rivers, zeromq off of kafka bus to conserve bandwidth


types of services

* needy
* enrichment


### Caching for services in case solution services are dead

* How to validate cache?

## SLA's are on response and business metrics

* Rapid - Bus - Kafka
* River - message - ZeroMQ
* Ponds - state - Database

Listen to rivers publish (write) to rapids

### Rapid - High performance bus

 (kafka)

High throughput

#### tooling

* kafka


### Rivers - Service


#### Types of services

* Listeners
* Enrichment
* Heartbeats
* Blockers
* Identification


Expresses a need, blind to who is listening.


#### ZeroMQ

forms rivers, corresponding them

chaing them together, complex filter




## Problems

* Technical debt
* Bored developers
* Stagnation of innovation
* Fiefdoms built on legacy knowledge and fear


### Micro-services

* Little is known about MSA outside the boys
* Immergent concept even **experts** are completely sure how to define
* Introduces many foreign concepts that are likely to gain some hostile opinions.
* Step learning curve with concepts that are difficult for teams to grasp
* Ideas go against the grain of conventional wisdom
* There is no MSA demo to play with
* Require coders that are also good teachers


### Teaching

* Linking lessons to real world contexts


## Questions

* How does data synchronisty work across database tables 


## Education

### People

* [Fred George](https://vimeo.com/user22258446/review/79288222/cbb24b224c)
* [Richard Rodger](http://new.livestream.com/thesummitdublin/DeveloperStage2013/videos/33539894)
* [Sam Newman](http://shop.oreilly.com/product/0636920033158.do)
* [Substack](http://substack.net/)

* [twitter - micro-services](https://twitter.com/howzus/lists/microservices)

### Developer Life

* [The coffee nap](http://www.dailymail.co.uk/sciencetech/article-2739671/The-ultimate-power-nap-Drinking-coffee-BEFORE-20-minute-sleep-improves-alertness-wake-up.html)


### Business

* [The Outsiders](http://www.forbes.com/sites/nathanvardi/2014/05/08/how-the-outsiders-became-one-of-the-most-important-business-books-in-america/) 
* [Dorm Room Tycoon](http://drt.fm) - all interviews are transcribed


### Client Development

### Newsletters

[dailyjs](http://dailyjs.com/)



## Heuristics of JS design?

[black box driven development](https://hacks.mozilla.org/2014/08/black-box-driven-development-in-javascript/)

[substack - finding modules](http://substack.net/finding_modules)

[objectplayground](http://www.objectplayground.com/)

[human javascript](http://read.humanjavascript.com/)

## Heuristics of good UX?


* At most 5 sub toics

### Checks


## Style

### JS

Use private parts for modeling

* [Private parts](https://github.com/philipwalton/private-parts)


### CSS 

* [Centering](http://css-tricks.com/centering-css-complete-guide/), [Centering-2](http://html5hub.com/centering-all-the-directions/#i.1dpytroqxdcrxf)
* [Specificity](http://www.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/)

## To Use



https://github.com/lavinjj/angular-responsive


https://github.com/misoproject/dataset


### Micro-services Development

#### Talks

* [Implementing micro service architectures](https://vimeo.com/79866979) - Fred George
* [Disposable Components](http://new.livestream.com/websummit/DeveloperStage2013/videos/33534085) - Chad Fowler
* [Real-Time Visualization with Kafka, Storm, Redis, Node & d3](http://www.youtube.com/watch?v=DRgs8L4AOgc) - Byron Ellis


### Slides

* [Fred George](http://www.slideshare.net/fredgeorge/micro-service-architecure) - Outpace
* [Prasanna Venkatesan](http://www.slideshare.net/prasy1/microservices) -ThoughtWorks

### Articles

* [ThoughtWorks on Microservices](http://martinfowler.com/articles/microservices.html#hn)
* [Transforming Enterprise Node](http://www.feedhenry.com/transforming-enterprise-node-js-feedhenry/)
* [Scaling Gilt](http://tech.gilt.com/post/73434506726/scaling-gilt-at-gilt-nyc-tech-talks-comes-to-2-park)

* [TigerTeam.dk series](http://www.tigerteam.dk/2014/micro-services-its-not-only-the-size-that-matters-its-also-how-you-use-them-part-1/)

#### Continous Deployment

* [Docker Weekly](http://blog.docker.com/docker-weekly-archives/)
* [How We Use Docker To Continuously Deliver Microservices](http://contino.co.uk/use-docker-continuously-deliver-microservices-part-1/?utm_source=Docker+News&utm_campaign=b2e1278c42-Docker_0_5_0_7_18_2013&utm_medium=email&utm_term=0_c0995b6e8f-b2e1278c42-235724773)

### Sites

* [Microservices.io](http://microservices.io/index.html)
* [devopsbox.es](http://devopsbox.es/)

### Github

* [microservice workshop](https://github.com/fredgeorge/microservice_workshop)


### Books

* [Building Microservices](http://shop.oreilly.com/product/0636920033158.do)


### Background Concepts

* [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)

## Problems

* Technical debt
* Bored developers
* Stagnation of innovation
* Fiefdoms built on legacy knowledge and fear


### Micro-services

* Little is known about MSA outside the boys
* Immergent concept even **experts** are completely sure how to define
* Introduces many foreign concepts that are likely to gain some hostile opinions.
* Step learning curve with concepts that are difficult for teams to grasp
* Ideas go against the grain of conventional wisdom
* There is no MSA demo to play with
* Require coders that are also good teachers


### Teaching

* Linking lessons to real world contexts


## Questions

* How does data synchronisty work across database tables 


## Education

### People

* [Fred George](https://vimeo.com/user22258446/review/79288222/cbb24b224c)
* [Richard Rodger](http://new.livestream.com/thesummitdublin/DeveloperStage2013/videos/33539894)
* [Sam Newman](http://shop.oreilly.com/product/0636920033158.do)
* [Substack](http://substack.net/)

* [twitter - micro-services](https://twitter.com/howzus/lists/microservices)

### Developer Life

* [The coffee nap](http://www.dailymail.co.uk/sciencetech/article-2739671/The-ultimate-power-nap-Drinking-coffee-BEFORE-20-minute-sleep-improves-alertness-wake-up.html)


### Business

* [The Outsiders](http://www.forbes.com/sites/nathanvardi/2014/05/08/how-the-outsiders-became-one-of-the-most-important-business-books-in-america/) 
* [Dorm Room Tycoon](http://drt.fm) - all interviews are transcribed


### Client Development

### Newsletters

[dailyjs](http://dailyjs.com/)



## Heuristics of JS design?

[black box driven development](https://hacks.mozilla.org/2014/08/black-box-driven-development-in-javascript/)

[substack - finding modules](http://substack.net/finding_modules)

[objectplayground](http://www.objectplayground.com/)

[human javascript](http://read.humanjavascript.com/)

## Heuristics of good UX?


* At most 5 sub toics

### Checks

[outdated ux patterns](https://github.com/north/north#outdated-ux-patterns) and the [pretty version](http://sideproject.io/outdated-ux-patterns/)


## Style

### JS

Use private parts for modeling

* [Private parts](https://github.com/philipwalton/private-parts)



## Patterns


* [Pattern comparison spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AiN0QfBTPpOCdDFjWlM0eU1ra21XanZkekxGbjA2WWc#gid=0) from [cloudfour](http://blog.cloudfour.com/common-patterns/)

### CSS 

* [Centering](http://css-tricks.com/centering-css-complete-guide/), [Centering-2](http://html5hub.com/centering-all-the-directions/#i.1dpytroqxdcrxf)
* [Specificity](http://www.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/)

## To Use

[Simple UX patterns](https://github.com/samdutton/simpl)

https://github.com/lavinjj/angular-responsive


https://github.com/misoproject/dataset


### Micro-services Development

#### Talks

* [Implementing micro service architectures](https://vimeo.com/79866979) - Fred George
* [Disposable Components](http://new.livestream.com/websummit/DeveloperStage2013/videos/33534085) - Chad Fowler
* [Real-Time Visualization with Kafka, Storm, Redis, Node & d3](http://www.youtube.com/watch?v=DRgs8L4AOgc) - Byron Ellis


### Slides

* [Fred George](http://www.slideshare.net/fredgeorge/micro-service-architecure) - Outpace
* [Prasanna Venkatesan](http://www.slideshare.net/prasy1/microservices) -ThoughtWorks

### Articles

* [ThoughtWorks on Microservices](http://martinfowler.com/articles/microservices.html#hn)
* [Transforming Enterprise Node](http://www.feedhenry.com/transforming-enterprise-node-js-feedhenry/)
* [Scaling Gilt](http://tech.gilt.com/post/73434506726/scaling-gilt-at-gilt-nyc-tech-talks-comes-to-2-park)

* [TigerTeam.dk series](http://www.tigerteam.dk/2014/micro-services-its-not-only-the-size-that-matters-its-also-how-you-use-them-part-1/)

#### Continous Deployment

* [Docker Weekly](http://blog.docker.com/docker-weekly-archives/)
* [How We Use Docker To Continuously Deliver Microservices](http://contino.co.uk/use-docker-continuously-deliver-microservices-part-1/?utm_source=Docker+News&utm_campaign=b2e1278c42-Docker_0_5_0_7_18_2013&utm_medium=email&utm_term=0_c0995b6e8f-b2e1278c42-235724773)

### Sites

* [Microservices.io](http://microservices.io/index.html)
* [devopsbox.es](http://devopsbox.es/)

### Github

* [microservice workshop](https://github.com/fredgeorge/microservice_workshop)


### Books

* [Building Microservices](http://shop.oreilly.com/product/0636920033158.do)


### Background Concepts

* [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)
