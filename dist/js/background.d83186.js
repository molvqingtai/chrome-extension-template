!function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([114,0]),n()}({114:function(e,t,n){"use strict";n.r(t);var r=n(4),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("h1",[e._v(e._s(e.msg))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),r("button",{staticClass:"button",on:{click:e.handleCopy}},[e._v("\n    点击复制\n  ")]),r("img",{attrs:{src:n(19)}}),r("img",{attrs:{src:n(60)}})])};o._withStripped=!0;n(61);var a=n(53),i=n(54),u=n.n(i),s=n(55),c=n.n(s);function l(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}var p={name:"Background",data:()=>({msg:"Hi,I am the background page.",value:""}),mounted(){console.log("挂载成功！")},methods:{postMessage(){c()({method:"post",url:"http://xncs.dajiaok.com/after-sale-checkin/web/api/linkAdd",headers:{"x-auth-token":"8713f0f6-57c0-4740-930f-28d60ca2d560",token:"0a20279fea1977524f48b8a4077dc31b"},data:u.a.stringify({tid:45634456446,shopId:9,categoryId:1})})},handleCopy(){var e,t=this;return(e=function*(){yield t.postMessage(),a.a.writeText(t.value).then(function(e){alert("复制成功！")},function(){alert("复制失败！")})},function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){l(a,r,o,i,u,"next",e)}function u(e){l(a,r,o,i,u,"throw",e)}i(void 0)})})()}}},d=n(3),f=Object(d.a)(p,o,[],!1,null,null,null);f.options.__file="src/background/App.vue";var v=f.exports;new r.a({render:e=>e(v)}).$mount("#app")},19:function(e,t,n){e.exports=n.p+"images/test.00b54e.png"},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC40lEQVRYR8WXT27aUBDGv3mWILtYcIEHUrumNyA3YNF9yQlCd4EV2ZjsICeIs69UeoLSE4R1KwVfAOTuApLfVGPj1BBjOwYpXvrP+34z35s3Y8I7X/TO+igNYOuhrbD5IgEYVB58b+iXCaYUQK05GIK5Q0wTEWXiHoi+r56cm7dC5ALYetBShHuRMcZ8U0p9BtF09eQMk2L/oTBceqNpUZBcgHqjPwuYu8CZT/T8h/nsw6F0h7bQekKAlm9879bLAykAMJgGjCFQ8RStZ6vFqJW3qGTNIp4w4dGY6k3W/jgIUNeDboDKFNhoiwSA7YCp53vOPA8gfi5rhPuD6X7lOXdp370CiDxnN83nosLJ90Jb1KZHzO20AF4BRJ6/LdIiYHFg+xamAiwXo3baolFKMSbwPGC+lE22vXdluHKRdxZIcPtrvwmg1hzIDr8SuMCYCwtKQ0mJAsyY50EcDVDX/Q4ruGDyifgRoE4yU3kQRwPEYrVmv0eg8Y5NjB9gdgOQJyWbZsdJAMTzOO0xAIP/GlPVImrr67YiNU6z42iANPEYIjCmIZsyzo7YsVo4n5JZOhogLCXFMwKd71cJM3ypDhBFFWRwufQc96QAslgWxItYirg8OzoDsUAmxAHxkwHUG4MpwOcMaoDY3rEjQ/wkAGGXU3gMM8H8S47slz2RI34SAFmk1uz7EjUDNzKUhFBAa3/DpR7lRY7iWqM/N0zdrLZr62tdZNjY7YrhZDVdLRydvJ/ajqNhgn4aU7nLazBFOqGMa4XbcfK4BaNLjPHSGz0UEYrK9LptKdo2LL4DzuYWNp1DFmWOZNthQuhbRWeEyMJqG3huWaR6y4Wz07D2A8mdCbdRaYvIZaKFMZWvWUMp0fo3c/Uj8GxbpCYnAYipw3Ys82HKP0A8lhsOXEVWl0BewGbie7ezLPsKZWB/gcQ/QNiSmfC17AxZCiCyRYbNdTfsO6bqlq2W0gBFqyLvvXcH+AcvaPAwuvwRnQAAAABJRU5ErkJggg=="}});