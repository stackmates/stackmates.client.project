'use strict';
var multiline = require('multiline');
module.exports = multiline(function(){/*
<div>
  Number of Lines:
  <input id="linecount" name="lines" value="4" onkeyup="render()"></input>
  Points per Line:
  <input id="pointcount" name="points" value="3" onkeyup="render()"></input>
</div>

<line-scaling-adaptive data="reachData"></line-scaling-adaptive>
*/});

