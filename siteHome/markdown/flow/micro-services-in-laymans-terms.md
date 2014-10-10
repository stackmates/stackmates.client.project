---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Services in layman's terms
---


## Micro Services 

An attempt to relate this stuff to the physical world. So here is attempt at looking at micro services analogous to producing and selling physical goods out of raw materials.

## The supply chain

### Substance

Location - Western Australia - Raw Materials

Dig raw material out of the ground (data sources) with small amount of refinement and filtering to export substance of what is needed to make into things

Use seneca data services to access any resource with a familiar api. Ideally sits over 1 - 3 tables max.

#### Haiku - Remember

* Don't be concerned with referential integrity
* Collections of actions not entities

### Structure

Location - China - The Middleman

Take raw materials for all over and manufacture more complex things.

Use seneca for business logic. Could also call other more complex contructors (algorithms) dependent of request. These algorithms will have their own design pracitices and may be large. These middlement service will listen to events a put data in storage that is easily accessible in format these algorithms like.


### Connection

Location - Retail - Salesman

Interface with the customer, provide a friendly user experience with help to find resources and messaging if items are unavailable


Use Hapi.js to bundle responses back to client with nice message and api docs etc supplied by Hapi.


## Transportation

We need to be able to move our goods around and just as you choose between flight or float with seneca (MSA in general) you can go with http or something like zeroMQ or Kafka.

The analogy falls down here and becomes bit more like a bidding system in that when setting out of port a boat full of minerals would say 'who wants this' at which point any number of recievers can accept. Some for processing to for the client and others for auditing sake.

For business logic recivers 'adding structure' they are then effectively in a manufacturing race to fulfill the order with no guarantee their service will win the fulfillment.

more like a bid management system where each service sends out a signal saying 'hey i've just this' who wants it.

As there is no firm contracts to get responses one of the services has to pull out Fathers classic 'Right we're going without you' after a short countdown.


## The docker bit

Now imagine you could move Australia China and your shops right door to each other or move them anywhere else you like when you like and everything still works.

