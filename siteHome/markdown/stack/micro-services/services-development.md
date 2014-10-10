---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Development flow
---

# Services

Right now there is only auth, but have started sketching out data layer for ecommerce as figure this is a well known domain to try with this idea.

The services stack consists of package json and common services where the StackMates are orchestrated into docker containers. That is the theory I don't know if this how thing are done in practice.

## Evolution of a docker container service

app specfic modules => common services directory => remote docker container

Use gulp and docker for development to production workflow. In theory you can start with deploying a single app in one container then split apart as needed. But with docker **Why not just deploy as containers from the start, then move containers?** Lots of questions ...


* Build config orchestrate code into services 
* Docker config
* Hapi config as entry point


## Direction

Showcase a real example of Microservice can be implemented by evaluating [fig](http://www.fig.sh/), [kitematic](https://github.com/kitematic/kitematic), [panamax.io](http://panamax.io/) or [tutum.co](https://www.tutum.co/) to help with going from a single app to breaking out services as demand requires.


[create once publish everywhere](http://www.programmableweb.com/news/cope-create-once-publish-everywhere/2009/10/13)


### References

[Rest API Design - Thoughtworks](http://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling)
[Rest and Hypermedia - Steve Klabnik](http://javascriptjabber.com/104-jsj-hypermedia-apis-with-steve-klabnik/)
[Microservices and conways law](http://boundary.com/blog/2014/08/27/microservices-conways-law/)
[API industry predictions](http://www.business2community.com/tech-gadgets/api-industry-predictions-2014-0714464#!bPEFva)

[Enabling emergent technologies](http://blog.crowdint.com/2014/06/04/magmaconf-14-liveblogging-fred-george-enabling-emergent-technologies.html)


### Talks

[FG - while@outpace](https://vimeo.com/user22258446/review/79288222/cbb24b224c)







* [Hapi](http://hapijs.com/) provides connection to customers 
* [Seneca](http://senecajs.org/) puts orders together and sources raw materials. 
* [Docker](https://www.docker.com/) puts transport infrastructure in place


## Principles

* Publish conclusions, not raw data
* Serves raise there hands if something goes wrong, self testing.
* Montior business KPI's over unit tests. 
* Don't destroy data, as example do uppdate existing data but create new and validate by date (address)
* Publish decisions

## Challenges

* Monitoring, logging is vital
* Getting team to think how to decompose the problem


## Reporting 

Use traditional sql for data warehouse


## Services

This represents an effor to explain micro services and docker to a non technical person.

### Substance

Location - Western Australia

Dig raw material out of the ground (data sources) with small amount of refinement and filtering to export substance of what is needed to make into things

Use seneca data services to access any resource with a familiar api. Ideally sits over 1 - 3 tables max.

#### Remember

* Don't be concerned with referential integrity


### Structure

Location - China

Take raw materials for all over and turn them into things.

Use seneca for business logic. Bit like the Dude's rug this is where you bring it all together but unlike the Dude's rug you can move you services across town and still tie the room together.


### Connection

Location - The Highstreet / ecommerce interface

Interface with the customer, provide a friendly user experience with help to find resources and messaging if items are unavailable


Use Hapi.js to bundle responses back to client with nice message and api docs etc supplied by Hapi.


### Transportation

We need to be able to move our goods around and just as you choose between flight or float with seneca (MSA in general) you can go with http or something like zeroMQ or Kafka.

The analogy falls down here and becomes bit more like a bidding system in that when setting out of port a boat full of minerals would say 'who wants this' at which point any number of recievers can accept. Some for processing to for the client and others for auditing sake.

For business logic recivers 'adding structure' they are then effectively in a manufacturing race to fulfill the order with no guarantee their service will win the fulfillment.

more like a bid management system where each service sends out a signal saying 'hey i've just this' who wants it.

As there is no firm contracts to get responses one of the services has to pull out Fathers classic 'Right we're going without you' after a short countdown.

### Principles

Track actions. Healthchecks or for mining for business intelligence later. These bus intell algoritms run 'outside of the microservice theory' in that the code could be large.

Efficient Algorithms require smart data aggregation services.

So microservices provide the OLTP whilst algorithm data comes from OLAP base which would be populated by other microservices.


## Direction

Provide a platform to allow module creators to explain their new ideas in the context of a larger system so the engineers on either side of the create / use divide to understand the why as well as how.

The preference for this setup versus what is demonstrated in the startupdeathclock is that for me at least it creates a firmer boundary of responsibilities between Seneca and Hapi. That being Seneca runs the internal data transportation, storage, and business logic whilst Hapi provides all the tools to interface a nice interface to the outside world with all it's well thought out features, validation, logging interface testing etc.


Initially the seneca services are used as plugins but as need arose the the data and business logic services could split out without need for changing code and demonstrated [startupdeathclock](https://github.com/rjrodger/startupdeathclock).

The preference for this setup versus what is demonstrated in the startupdeathclock is that for me at least it creates a firmer boundary of responsibilities between Seneca and Hapi. That being Seneca runs the internal data transportation, storage, and business logic whilst Hapi provides all the tools to interface a nice interface to the outside world with all it's well thought out features, validation, logging interface testing etc.


### Goals

Every request and action must be stored for varying purposes. Healthchecks or for mining for business intelligence later. These bus intell algoritms run 'outside of the microservice theory' in that the code could be large.

Efficient Algorithms require smart data aggregation services.

So microservices provide the OLTP whilst algorithm data comes from OLAP base which would be populated by other microservices.


## Technologies

* Use [dat](http://dat-data.com/) for sharing data?


## Questions

Data warehouse is a pond, create a process to pump data into warehouse when events happens, listen to the message bus and store operational store is an event bus not a database


## Cost

* 250 000 USD per year on Amazon ( client internal hardware costs ests at 5 to 10 time bigger )
* Run on micro services around 40 usd per month.
* Enabled by cloud


## Tools and Solutions

* ZeroMQ
* Clojure


## Research

* [Rest API Design](http://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling)
* [Listen to Steve Klabnik](http://javascriptjabber.com/104-jsj-hypermedia-apis-with-steve-klabnik/)
* [microservices and conways law](http://boundary.com/blog/2014/08/27/microservices-conways-law/)



