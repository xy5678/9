(function(){"use strict";var n={7820:function(n,t,e){var r=e(5130),o=e(6768);function u(n,t,e,r,u,i){const c=(0,o.g2)("HelloWorld");return(0,o.uX)(),(0,o.Wv)(c,{msg:"Welcome to Your Vue.js App"})}var i=e(4232),c=e(144);const a=n=>((0,o.Qi)("data-v-8f6708cc"),n=n(),(0,o.jt)(),n),f={class:"container"},l=a((()=>(0,o.Lk)("h1",null,"查询联系方式",-1)));var s={__name:"HelloWorld",setup(n){const t=(0,c.KR)([]),r=e(6821),{Query:u,User:a}=r;r.init({appId:"AltAzzf7BhiRzw109IUYNfJd-MdYXbMMI",appKey:"zNwXu2eLBIrkLBguzRM7q36p",serverURL:"https://altazzf7.api.lncldglobal.com"});const s=()=>{const n=new r.Query("UserInfo");n.descending("createdAt"),n.limit(10),n.find().then((n=>{t.value=n}))};return(n,e)=>((0,o.uX)(),(0,o.CE)("div",f,[l,(0,o.Lk)("div",{id:"message-form"},[(0,o.Lk)("button",{onClick:s},"查询")]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.value,(n=>((0,o.uX)(),(0,o.CE)("div",{key:n},[(0,o.Lk)("p",null,"用户："+(0,i.v_)(n.attributes.account),1)])))),128))]))}},v=e(1241);const p=(0,v.A)(s,[["__scopeId","data-v-8f6708cc"]]);var d=p,h={name:"App",components:{HelloWorld:d}};const b=(0,v.A)(h,[["render",u]]);var g=b;(0,r.Ef)(g).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return n[r].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,u){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],u=n[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](r[a])}))?r.splice(a--,1):(c=!1,u<i&&(i=u));if(c){n.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}u=u||0;for(var l=n.length;l>0&&n[l-1][2]>u;l--)n[l]=n[l-1];n[l]=[r,o,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,u,i=r[0],c=r[1],a=r[2],f=0;if(i.some((function(t){return 0!==n[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(a)var l=a(e)}for(t&&t(r);f<i.length;f++)u=i[f],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(l)},r=self["webpackChunktestvvvvv"]=self["webpackChunktestvvvvv"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(7820)}));r=e.O(r)})();
//# sourceMappingURL=app.7cf34e7e.js.map