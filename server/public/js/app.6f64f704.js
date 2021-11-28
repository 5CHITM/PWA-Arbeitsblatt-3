(function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return E}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container d-flex flex-column justify-content-center align-items-center mt-5",attrs:{id:"app"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:e.serverAddress+"/employees.jpg",alt:"picture of employees"}}),n("ButtonGet",{on:{get:e.fetchData}}),n("CardView",{attrs:{employees:e.employees},on:{del:e.delEmployee}})],1)},a=[],c=n("1da1"),s=(n("99af"),n("96cf"),n("bc3a")),i=n.n(s),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(t){return e.$emit("get")}}},[e._v("Get Employees")])])},u=[],d={},p=d,f=n("2877"),m=Object(f["a"])(p,l,u,!1,null,"d62479b4",null),v=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"employees.length > 0"}]},[n("div",{staticClass:"row justify-content-center mt-4"},e._l(e.employees,(function(t){return n("div",{key:t.email,staticClass:"card p-2 m-2 bg-light",staticStyle:{width:"22rem"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:e.serverAddress+"/"+t.picture.large+"\n        ",alt:"picture of employee"}}),n("div",{staticClass:"mx-auto d-block mt-2"},[n("h4",[e._v("Name: "+e._s(t.name.title)+" "+e._s(t.name.first)+" "+e._s(t.name.last))]),n("p",{staticClass:"card-text"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-text"},[e._v("Phone: "+e._s(t.phone))])]),n("button",{staticClass:"btn btn-outline-danger mx-auto d-block mt-3",on:{click:function(n){return e.$emit("del",t)}}},[e._v("Delete")])])})),0)])])},b=[],g={name:"CardView",data:function(){return{serverAddress:""}},props:{employees:{type:Array}}},y=g,w=(n("7f88"),Object(f["a"])(y,h,b,!1,null,"37986e92",null)),x=w.exports,_={name:"app",components:{ButtonGet:v,CardView:x},data:function(){return{serverAddress:"",employees:[]}},created:function(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})},methods:{fetchData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetchData called"),t.prev=1,t.next=4,i()({url:"".concat("","/employees"),method:"GET"});case 4:n=t.sent,r=n.data,e.employees=r,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},delEmployee:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("delEmployee called"),n.prev=1,n.next=4,i()({url:"".concat("","/employees/").concat(e.id),method:"delete"});case 4:t.fetchData(),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},updateAvailable:function(){alert("Update vorhanden, bitte App neu starten!")}}},k=_,j=Object(f["a"])(k,o,a,!1,null,null,null),O=j.exports,C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("ab8b");r["a"].config.productionTip=!1;var E="http://127.0.0.1:3000";new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"7f88":function(e,t,n){"use strict";n("e1a5")},e1a5:function(e,t,n){}});
//# sourceMappingURL=app.6f64f704.js.map