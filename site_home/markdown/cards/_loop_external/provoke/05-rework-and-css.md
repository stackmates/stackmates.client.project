---
template: page.hbs
thought_process: drmg-external-proposal
flow: 5
nextStep: 6
type: provocation
tags: general, business
metaPalette: dreamer
haikuHeading: UX Patterns
haikuThought: Handlebars & Rework<br>(or Sass)
haikuAction: Time to Suit up


communicationJob: <a href="http://suitcss.github.io/">Suit.css</a> - Style tools for UI components

leader: <a href="http:/twitter.com">twitter</a>


communicationTeaching: 


innovation: Suit used at twitter, Handlebars in ember


developmentProductivity: Initally slower as you need to think harder about what you are doing. But as projects grow and become more complex and standards evolve this is where Suit.css has an enormous payback. Rework is very fast to build which helps prevent waiting during development. Handlebars strategy well established, the pattern lab has good


developmentPerformance: Suit.css help prevent bloat


developmentFlexibility: It is modular so you can build the CSS system as you like. It is future standard compliant so no need to rewrite CSS if want be standards compliant in future


ecosystemDevelopers: If a library of patterns were established with good semantics development of sites and the ability to experiment with UX will sky rocket. See StackMates link to see more


ecosystemProof: <a href="http://twitter.com">twitter</a>


ecosystemModules:


stackmatesComponent: 

stackmatesHistory: CSS with good architecture has a big effect on time and cost. Suit.CSS provides a system to help prevent that. REWORK it is also extremely fast to build and is aligned with future specifications for core CSS so won't have to relearn when those standards are adopted

stackmatesIntent: Marry the template approach of [patternlab](http://patternlab.io/) with the component-based UI approach of [Suit.css](http://suitcss.github.io/)

stackmatesMindMap: 

quote:

quoteLink:

quoteCite:
---

The goal is to  that is used by  and used with a twist at [medium](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06)

You can decide between SASS or Rework. Rework is my first preference because it is very fast and that is what is used by [Suit.css](http://suitcss.github.io/). Howeve SASS is available to supports Ionic and there are many other projects out there to learn from.

### Workflow

You should be able to read a fragment of HTML and know where the partial is what the intent of styles rules. IDs are should only be used for scrolling to anchors otherwise use data attributes for javascript. It should be possible to open the relevant CSS or JS file by typing four characters that are made clear by looking at markup.

* Informative conventions
* Rapid navigation
* Well documented CSS

#### Structure

prefix rules to add navigation

* d : domain specific rule



#### CSS

* u  : utility rules
* t  : typography
* dt : typography rules in domain


Each domain has a [shared css manifest](https://github.com/stackmates/it-starts-upfront/blob/master/_shared/style/common_manifest.css) and each sub-domain has a [specific css manifest](https://github.com/stackmates/it-starts-upfront/blob/master/siteHome/style/main.css) that references the common base.

#### Handlebars

Partials and helpers the [common templates directory](https://github.com/stackmates/stackmates/tree/master/client/src/common/templates) but screen views are copied from a reference library into the specific project.

### Learning resources

* [Spreadsheet of UX Patterns](https://docs.google.com/spreadsheet/ccc?key=0AiN0QfBTPpOCdDFjWlM0eU1ra21XanZkekxGbjA2WWc#gid=0)
* [Outdated UX Patterns](https://github.com/north/north#outdated-ux-patterns)
* [Mind Maps](https://drive.google.com/drive/u/0/?rfd=1#folders/0B_isMPC-_gvmdXU0YWd0UmdSLTQ/0B_isMPC-_gvmbkZhcWdaR2trVms/0B_isMPC-_gvmdlJiMTUwNE8tLVE/0B_isMPC-_gvmaUNfYjV6UW5fenc/0B_isMPC-_gvmeFVvU213cm1hSlk/0B_isMPC-_gvmVWxoZmd6MDZMN1U/0B_isMPC-_gvmNVdNTGdPYmJoY3M/0B_isMPC-_gvmNEY5YnM5eHEtMWs)
* [ANKI Deck](https://github.com/stackmates/stackmates/blob/master/docs/ankis/client--design.apk)
* [Twitter](https://twitter.com/howzus/lists/css)


### Unknowns / Jobs

* Convert pattern lab partials functional while creating Suit.css based class names 
* Reload handlebars partials during watch

