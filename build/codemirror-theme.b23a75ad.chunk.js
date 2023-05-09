"use strict";(self.webpackChunkworld_cup_score_prediction=self.webpackChunkworld_cup_score_prediction||[]).push([[2218],{22887:(d,n,e)=>{e.d(n,{Z:()=>i});var s=e(8081),t=e.n(s),r=e(23645),a=e.n(r),o=a()(t());o.push([d.id,`/* Port of TextMate's Blackboard theme */

.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }
.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }
.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }
.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }
.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }
.cm-s-blackboard .CodeMirror-linenumber { color: #888; }
.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }

.cm-s-blackboard .cm-keyword { color: #FBDE2D; }
.cm-s-blackboard .cm-atom { color: #D8FA3C; }
.cm-s-blackboard .cm-number { color: #D8FA3C; }
.cm-s-blackboard .cm-def { color: #8DA6CE; }
.cm-s-blackboard .cm-variable { color: #FF6400; }
.cm-s-blackboard .cm-operator { color: #FBDE2D; }
.cm-s-blackboard .cm-comment { color: #AEAEAE; }
.cm-s-blackboard .cm-string { color: #61CE3C; }
.cm-s-blackboard .cm-string-2 { color: #61CE3C; }
.cm-s-blackboard .cm-meta { color: #D8FA3C; }
.cm-s-blackboard .cm-builtin { color: #8DA6CE; }
.cm-s-blackboard .cm-tag { color: #8DA6CE; }
.cm-s-blackboard .cm-attribute { color: #8DA6CE; }
.cm-s-blackboard .cm-header { color: #FF6400; }
.cm-s-blackboard .cm-hr { color: #AEAEAE; }
.cm-s-blackboard .cm-link { color: #8DA6CE; }
.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }

.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }
.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }
`,""]);const i=o},23645:d=>{d.exports=function(n){var e=[];return e.toString=function(){return this.map(function(t){var r="",a=typeof t[5]!="undefined";return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},e.i=function(t,r,a,o,i){typeof t=="string"&&(t=[[null,t,void 0]]);var _={};if(a)for(var l=0;l<this.length;l++){var f=this[l][0];f!=null&&(_[f]=!0)}for(var m=0;m<t.length;m++){var c=[].concat(t[m]);a&&_[c[0]]||(typeof i!="undefined"&&(typeof c[5]=="undefined"||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),r&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},8081:d=>{d.exports=function(n){return n[1]}},69039:(d,n,e)=>{e.r(n),e.d(n,{default:()=>b});var s=e(93379),t=e.n(s),r=e(7795),a=e.n(r),o=e(90569),i=e.n(o),_=e(3565),l=e.n(_),f=e(19216),m=e.n(f),c=e(44589),E=e.n(c),v=e(22887),u={};u.styleTagTransform=E(),u.setAttributes=l(),u.insert=i().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=m();var p=t()(v.Z,u);const b=v.Z&&v.Z.locals?v.Z.locals:void 0},93379:d=>{var n=[];function e(r){for(var a=-1,o=0;o<n.length;o++)if(n[o].identifier===r){a=o;break}return a}function s(r,a){for(var o={},i=[],_=0;_<r.length;_++){var l=r[_],f=a.base?l[0]+a.base:l[0],m=o[f]||0,c="".concat(f," ").concat(m);o[f]=m+1;var E=e(c),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(E!==-1)n[E].references++,n[E].updater(v);else{var u=t(v,a);a.byIndex=_,n.splice(_,0,{identifier:c,updater:u,references:1})}i.push(c)}return i}function t(r,a){var o=a.domAPI(a);o.update(r);var i=function(l){if(l){if(l.css===r.css&&l.media===r.media&&l.sourceMap===r.sourceMap&&l.supports===r.supports&&l.layer===r.layer)return;o.update(r=l)}else o.remove()};return i}d.exports=function(r,a){a=a||{},r=r||[];var o=s(r,a);return function(_){_=_||[];for(var l=0;l<o.length;l++){var f=o[l],m=e(f);n[m].references--}for(var c=s(_,a),E=0;E<o.length;E++){var v=o[E],u=e(v);n[u].references===0&&(n[u].updater(),n.splice(u,1))}o=c}}},90569:d=>{var n={};function e(t){if(typeof n[t]=="undefined"){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(a){r=null}n[t]=r}return n[t]}function s(t,r){var a=e(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}d.exports=s},19216:d=>{function n(e){var s=document.createElement("style");return e.setAttributes(s,e.attributes),e.insert(s,e.options),s}d.exports=n},3565:(d,n,e)=>{function s(t){var r=e.nc;r&&t.setAttribute("nonce",r)}d.exports=s},7795:d=>{function n(t,r,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var i=typeof a.layer!="undefined";i&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,i&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var _=a.sourceMap;_&&typeof btoa!="undefined"&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),r.styleTagTransform(o,t,r.options)}function e(t){if(t.parentNode===null)return!1;t.parentNode.removeChild(t)}function s(t){var r=t.insertStyleElement(t);return{update:function(o){n(r,t,o)},remove:function(){e(r)}}}d.exports=s},44589:d=>{function n(e,s){if(s.styleSheet)s.styleSheet.cssText=e;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(e))}}d.exports=n}}]);
