(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21dbf7"],{d32d:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container my-1 my-sm-2"},[a("div",{staticClass:"row d-flex"},[a("div",{staticClass:"col-12 col-md-6 px-1"},[a("div",{staticClass:"bg-white border rounded-lg shadow-sm mb-1 p-2 order-md-1"},[e._v(" 素早さ："),a("input",{directives:[{name:"model",rawName:"v-model",value:e.speed,expression:"speed"}],attrs:{type:"number"},domProps:{value:e.speed},on:{input:function(t){t.target.composing||(e.speed=t.target.value)}}})]),a("div",{staticClass:"bg-white border rounded-lg shadow-sm mb-1 p-2 order-md-1"},[a("p",[e._v("状態")]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tailwind,expression:"tailwind",modifiers:{number:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck1","true-value":"2","false-value":"1"},domProps:{checked:Array.isArray(e.tailwind)?e._i(e.tailwind,null)>-1:e._q(e.tailwind,"2")},on:{change:function(t){var a=e.tailwind,s=t.target,r=s.checked?"2":"1";if(Array.isArray(a)){var c=e._n(null),o=e._i(a,c);s.checked?o<0&&(e.tailwind=a.concat([c])):o>-1&&(e.tailwind=a.slice(0,o).concat(a.slice(o+1)))}else e.tailwind=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[e._v(" おいかぜ ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.scarf,expression:"scarf",modifiers:{number:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck2","true-value":"1.5","false-value":"1"},domProps:{checked:Array.isArray(e.scarf)?e._i(e.scarf,null)>-1:e._q(e.scarf,"1.5")},on:{change:function(t){var a=e.scarf,s=t.target,r=s.checked?"1.5":"1";if(Array.isArray(a)){var c=e._n(null),o=e._i(a,c);s.checked?o<0&&(e.scarf=a.concat([c])):o>-1&&(e.scarf=a.slice(0,o).concat(a.slice(o+1)))}else e.scarf=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck2"}},[e._v(" スカーフ ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.paralysis,expression:"paralysis",modifiers:{number:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck3","true-value":"0.5","false-value":"1"},domProps:{checked:Array.isArray(e.paralysis)?e._i(e.paralysis,null)>-1:e._q(e.paralysis,"0.5")},on:{change:function(t){var a=e.paralysis,s=t.target,r=s.checked?"0.5":"1";if(Array.isArray(a)){var c=e._n(null),o=e._i(a,c);s.checked?o<0&&(e.paralysis=a.concat([c])):o>-1&&(e.paralysis=a.slice(0,o).concat(a.slice(o+1)))}else e.paralysis=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck3"}},[e._v(" まひ ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.macho,expression:"macho",modifiers:{number:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck4","true-value":"0.5","false-value":"1"},domProps:{checked:Array.isArray(e.macho)?e._i(e.macho,null)>-1:e._q(e.macho,"0.5")},on:{change:function(t){var a=e.macho,s=t.target,r=s.checked?"0.5":"1";if(Array.isArray(a)){var c=e._n(null),o=e._i(a,c);s.checked?o<0&&(e.macho=a.concat([c])):o>-1&&(e.macho=a.slice(0,o).concat(a.slice(o+1)))}else e.macho=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck4"}},[e._v(" きょうせいギプス ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.swamp,expression:"swamp",modifiers:{number:!0}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck5","true-value":"0.25","false-value":"1"},domProps:{checked:Array.isArray(e.swamp)?e._i(e.swamp,null)>-1:e._q(e.swamp,"0.25")},on:{change:function(t){var a=e.swamp,s=t.target,r=s.checked?"0.25":"1";if(Array.isArray(a)){var c=e._n(null),o=e._i(a,c);s.checked?o<0&&(e.swamp=a.concat([c])):o>-1&&(e.swamp=a.slice(0,o).concat(a.slice(o+1)))}else e.swamp=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck5"}},[e._v(" 湿原 ")])])]),a("div",{staticClass:"bg-white border rounded-lg shadow-sm mb-1 p-2 order-md-1"},[a("p",[e._v("オプション")]),a("div",{staticClass:"custom-control custom-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.option1,expression:"option1"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch1"},domProps:{checked:Array.isArray(e.option1)?e._i(e.option1,null)>-1:e.option1},on:{change:function(t){var a=e.option1,s=t.target,r=!!s.checked;if(Array.isArray(a)){var c=null,o=e._i(a,c);s.checked?o<0&&(e.option1=a.concat([c])):o>-1&&(e.option1=a.slice(0,o).concat(a.slice(o+1)))}else e.option1=r}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch1"}},[e._v("±4以上も表示する")])])])]),a("div",{staticClass:"col-12 col-md-6 px-1"},[a("div",{staticClass:"bg-white border rounded-lg shadow-sm mb-1 order-md-1"},[a("table",{staticClass:"table table-hover"},[e._m(0),e.option1?a("tr",[a("td",[e._v("+6")]),a("td",[e._v(" "+e._s(Math.floor(4*e.calcSpeed))+"（"+e._s(Math.floor(4*e.speed))+"） ")])]):e._e(),e.option1?a("tr",[a("td",[e._v("+5")]),a("td",[e._v(" "+e._s(Math.floor(35*e.calcSpeed/10))+"（"+e._s(Math.floor(35*e.speed/10))+"） ")])]):e._e(),e.option1?a("tr",[a("td",[e._v("+4")]),a("td",[e._v(" "+e._s(Math.floor(3*e.calcSpeed))+"（"+e._s(Math.floor(3*e.speed))+"） ")])]):e._e(),a("tr",[a("td",[e._v("+3")]),a("td",[e._v(" "+e._s(Math.floor(25*e.calcSpeed/10))+"（"+e._s(Math.floor(25*e.speed/10))+"） ")])]),a("tr",[a("td",[e._v("+2")]),a("td",[e._v(" "+e._s(Math.floor(2*e.calcSpeed))+"（"+e._s(Math.floor(2*e.speed))+"） ")])]),a("tr",[a("td",[e._v("+1")]),a("td",[e._v(" "+e._s(Math.floor(15*e.calcSpeed/10))+"（"+e._s(Math.floor(15*e.speed/10))+"） ")])]),a("tr",[a("td",[e._v("±0")]),a("td",[e._v(e._s(Math.floor(e.calcSpeed))+"（"+e._s(Math.floor(e.speed))+"）")])]),a("tr",[a("td",[e._v("-1")]),a("td",[e._v(" "+e._s(Math.floor(67*e.calcSpeed/100))+"（"+e._s(Math.floor(67*e.speed/100))+"） ")])]),a("tr",[a("td",[e._v("-2")]),a("td",[e._v(" "+e._s(Math.floor(5*e.calcSpeed/10))+"（"+e._s(Math.floor(5*e.speed/10))+"） ")])]),a("tr",[a("td",[e._v("-3")]),a("td",[e._v(" "+e._s(Math.floor(4*e.calcSpeed/10))+"（"+e._s(Math.floor(4*e.speed/10))+"） ")])]),e.option1?a("tr",[a("td",[e._v("-4")]),a("td",[e._v(" "+e._s(Math.floor(33*e.calcSpeed/100))+"（"+e._s(Math.floor(33*e.speed/100))+"） ")])]):e._e(),e.option1?a("tr",[a("td",[e._v("-5")]),a("td",[e._v(" "+e._s(Math.floor(29*e.calcSpeed/100))+"（"+e._s(Math.floor(29*e.speed/100))+"） ")])]):e._e(),e.option1?a("tr",[a("td",[e._v("-6")]),a("td",[e._v(" "+e._s(Math.floor(25*e.calcSpeed/100))+"（"+e._s(Math.floor(25*e.speed/100))+"） ")])]):e._e()])])])])]),a("adsense",{attrs:{"ad-client":"ca-pub-3240586325286249","ad-slot":"3353369882","ad-style":"display:block","ad-format":"auto"}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",[e._v("ランク")]),a("td",[e._v("素早さ")])])}],c=(a("a4d3"),a("e01a"),{name:"CalcSpeed",head:{title:function(){return{inner:this.title}},meta:function(){return[{name:"title",content:this.title},{name:"description",content:this.description},{property:"og:title",content:this.title},{property:"og:description",content:this.description}]}},data:function(){return{title:"素早さ計算機（ポケモン剣盾に対応）",description:"ポケモン剣盾に対応している素早さ計算機です。実数値を入力することで、あらゆる状態の素早さをリアルタイムに表示します。",speed:100,tailwind:1,scarf:1,paralysis:1,macho:1,swamp:1,option1:!1,option2:!1}},computed:{calcSpeed:function(){return Math.floor(this.speed*this.tailwind*this.scarf*this.paralysis*this.macho*this.swamp)}}}),o=c,i=a("2877"),l=Object(i["a"])(o,s,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21dbf7.js.map