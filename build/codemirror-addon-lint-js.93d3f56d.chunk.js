(self.webpackChunkworld_cup_score_prediction=self.webpackChunkworld_cup_score_prediction||[]).push([[953],{96477:(w,f,l)=>{(function(a){a(l(4631))})(function(a){"use strict";function u(c,e){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];e.indent||(e.indent=1),JSHINT(c,e,e.globals);var i=JSHINT.data().errors,n=[];return i&&d(i,n),n}a.registerHelper("lint","javascript",u);function d(c,e){for(var i=0;i<c.length;i++){var n=c[i];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var s=n.character-1,o=s+1;if(n.evidence){var t=n.evidence.substring(s).search(/.\b/);t>-1&&(o+=t)}var r={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:a.Pos(n.line-1,s),to:a.Pos(n.line-1,o)};e.push(r)}}}})}}]);
