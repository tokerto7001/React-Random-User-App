(this["webpackJsonpreact-random-user"]=this["webpackJsonpreact-random-user"]||[]).push([[0],{19:function(e,t,i){},20:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var c=i(2),s=i.n(c),n=i(13),l=i.n(n),a=(i(19),i.p,i(20),i(4)),o=i(14),d=i.n(o),r=i.p+"static/media/email.e1f03bb9.svg",j=i.p+"static/media/phone.d017e1ae.svg",u=i.p+"static/media/location.0b7d98ab.svg",v=i(0);function m(){var e,t,i,s,n,l,o,m,b=Object(c.useState)([]),h=Object(a.a)(b,2),p=h[0],O=h[1],g=Object(c.useState)(!1),x=Object(a.a)(g,2),f=x[0],N=x[1];Object(c.useEffect)((function(){d.a.get("https://randomuser.me/api/").then((function(e){console.log(e.data.results),O(e.data.results[0])})).catch((function(e){return console.log(e)}))}),[f]);return Object(v.jsx)("div",{className:"card",children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("img",{src:null===p||void 0===p||null===(e=p.picture)||void 0===e?void 0:e.large,className:"image"}),Object(v.jsxs)("p",{className:"title-p",children:[null===p||void 0===p||null===(t=p.name)||void 0===t?void 0:t.title," ",null===p||void 0===p||null===(i=p.name)||void 0===i?void 0:i.first," ",null===p||void 0===p||null===(s=p.name)||void 0===s?void 0:s.last]})]}),Object(v.jsxs)("div",{className:"body",children:[Object(v.jsxs)("div",{className:"e-mail",children:[Object(v.jsx)("img",{src:r,className:"email-image"}),Object(v.jsx)("p",{className:"email-p",children:null===p||void 0===p?void 0:p.email})]}),Object(v.jsxs)("div",{className:"phone",children:[Object(v.jsx)("img",{src:j,className:"phone-image"}),Object(v.jsx)("p",{className:"phone-p",children:null===p||void 0===p?void 0:p.cell})]}),Object(v.jsxs)("div",{className:"location",children:[Object(v.jsx)("img",{src:u,className:"location-image"}),Object(v.jsxs)("p",{className:"location-p",children:[null===p||void 0===p||null===(n=p.location)||void 0===n?void 0:n.city," - ",null===p||void 0===p||null===(l=p.location)||void 0===l?void 0:l.country]})]}),Object(v.jsxs)("p",{children:["Age : ",null===p||void 0===p||null===(o=p.dob)||void 0===o?void 0:o.age]}),Object(v.jsxs)("p",{children:["Register Date : ",null===p||void 0===p||null===(m=p.registered)||void 0===m?void 0:m.date.slice(0,10)]})]}),Object(v.jsx)("button",{className:"button",onClick:function(){N(!f)},children:"Random User"})]})})}var b=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(m,{})})},h=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;i(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.461974a5.chunk.js.map