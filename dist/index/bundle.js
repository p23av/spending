!function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},
r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(
4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(e
){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function a(e){return function(e
){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance")}()}document.addEventListener("DOMContentLoaded",function(){firebase.initializeApp({apiKey:"AIzaSyC0vKqCtJ9IhEP6nboRWqN6ptRurpMbCBE",authDomain:"decrease-54dec.firebaseapp.com",
databaseURL:"https://decrease-54dec.firebaseio.com",projectId:"decrease-54dec",storageBucket:"decrease-54dec.appspot.com",messagingSenderId:"807302734188",appId:"1:807302734188:web:bd0db8c3a4258e618e5349"});var r,o=firebase.database();console.log(o),
o.ref("total/value").on("value",function(e){document.getElementById("total-num").textContent=e.val(),r=e.val(),console.log(e.val())}),o.ref("boughtList").on("value",function(e){var t=e.val(),n=document.getElementById("bought-list");for(
var a in n.innerHTML="",t)if(t.hasOwnProperty(a)){var r=t[a],o=document.createElement("li");o.className="bought-list-item",o.dataset.key=a;var i=document.createElement("span");i.textContent=r.name;var l=document.createElement("span");l.textContent=r.price
;var c=document.createElement("i");c.innerHTML="&#8381;",l.append(c),o.append(i),o.append(l),n.append(o)}}),o.ref("shoppingList/addS").on("value",function(e){var t=e.val(),n=document.getElementById("shopping-list-s").getElementsByTagName("ul")[0];for(
var a in n.innerHTML="",t)if(t.hasOwnProperty(a)){var r=t[a],o=document.createElement("li");o.className="bought-list-item",o.dataset.key=a;var i=document.createElement("span");i.textContent=r.thing;var l=document.createElement("span")
;l.textContent=r.price;var c=document.createElement("i");c.innerHTML="&#8381;",l.append(c),o.append(i),o.append(l),n.append(o)}}),o.ref("shoppingList/addM").on("value",function(e){var t=e.val(),n=document.getElementById("shopping-list-m"
).getElementsByTagName("ul")[0];for(var a in n.innerHTML="",t)if(t.hasOwnProperty(a)){var r=t[a],o=document.createElement("li");o.className="bought-list-item",o.dataset.key=a;var i=document.createElement("span");i.textContent=r.thing
;var l=document.createElement("span");l.textContent=r.price;var c=document.createElement("i");c.innerHTML="&#8381;",l.append(c),o.append(i),o.append(l),n.append(o)}}),o.ref("shoppingList/addL").on("value",function(e){var t=e.val(),
n=document.getElementById("shopping-list-l").getElementsByTagName("ul")[0];for(var a in n.innerHTML="",t)if(t.hasOwnProperty(a)){var r=t[a],o=document.createElement("li");o.className="bought-list-item",o.dataset.key=a;var i=document.createElement("span")
;i.textContent=r.thing;var l=document.createElement("span");l.textContent=r.price;var c=document.createElement("i");c.innerHTML="&#8381;",l.append(c),o.append(i),o.append(l),n.append(o)}}),document.getElementById("decrease-btn").addEventListener("click",
function(e){e.preventDefault();var t=document.getElementById("decrease-price"),n=document.getElementById("decrease-name");o.ref("total").set({value:r-t.value});var a=o.ref("boughtList").push().key;o.ref("boughtList/"+a).set({name:n.value,price:t.value}),
t.value="",n.value=""}),document.getElementById("increase-btn").addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("increase-amount"),n=document.getElementById("increase-date");o.ref("total").set({value:+r+ +t.value}),
t.value="",n.value=""}),a(document.getElementsByClassName("add-item")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.target.classList.add("add-item_close"),e.target.parentElement.getElementsByClassName("new-item"
)[0].classList.add("active")})}),a(document.querySelectorAll(".new-item button")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.target.parentElement.parentElement.getElementsByClassName("add-item")[0].classList.remove(
"add-item_close"),e.target.parentElement.parentElement.getElementsByClassName("new-item")[0].classList.remove("active");var t=e.target.previousElementSibling.value.split(" : "),n=t[0],a=t[1],r=o.ref("shoppingList/"+e.target.id).push().key;o.ref(
"shoppingList/"+e.target.id+"/"+r).set({thing:n,price:a}),e.target.previousElementSibling.value=""})})})},function(e,t,n){}]);