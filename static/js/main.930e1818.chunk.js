(this["webpackJsonprecipe-search"]=this["webpackJsonprecipe-search"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),s=(a(10),a(1)),o=a.n(s),l=a(2),u=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:"recip"},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,a),c.a.createElement("img",{className:"image",src:n,alt:"im"}))},m=(a(12),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],p=s[1],f=Object(n.useState)("chicken"),h=Object(l.a)(f,2),d=h[0],v=h[1];Object(n.useEffect)((function(){b()}),[d]);var b=function(){var e,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("f5c945fe","&app_key=").concat("272ae8a6053dc1372ceb9d03337cf652")));case 2:return e=a.sent,a.next=5,o.a.awrap(e.json());case 5:t=a.sent,r(t.hits);case 7:case"end":return a.stop()}}))};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"search-from"},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value),console.log(m)}}),c.a.createElement("button",{className:"search-button",onClick:function(e){console.log(e),e.preventDefault(),v(m)},type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(u,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,key:e.recipe.label,ingredients:e.recipe.ingredients})}))))});a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.930e1818.chunk.js.map