(this.webpackJsonpcheckin=this.webpackJsonpcheckin||[]).push([[0],{115:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(0),i=c(28),s=c.n(i),o=(c(61),c(6)),l=c(16),r=(c(62),c(17)),d=c(12),j=c(20),b=c(53),u=c.n(b).a.create({baseURL:"http://localhost:3001",headers:{"Content-type":"application/json"}}),h=function(){return u.get("/list")},m=function(e){return u.get("/bylocation/".concat(e))},O=function(e){return u.post("/customers",e)},x=function(e,t){return u.post("/createcheckin/".concat(e),t)},p=function(e){var t=Object(n.useState)({id:null}),c=Object(d.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){var t;t=e.match.params.id,m(t).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container p-3 my-3 border",children:[Object(a.jsx)("h1",{children:i.locationname}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Welcome to Checkin Application, Develop for ",i.locationname]}),Object(a.jsx)(l.c,{to:"/createcheckin/".concat(i.id),className:"btn-link",children:Object(a.jsx)(j.a,{variant:"outline-secondary",children:"Check-In"})})]})})},f=c(21),g=c(22),v=c(8),y=c(19),k=c(55),N=c.n(k),C=function(e){var t={locationid:null,name:"",nric:"",temp:"",date:null},c=Object(n.useState)(t),i=Object(d.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(!1),r=Object(d.a)(l,2),b=r[0],u=r[1],h=Object(n.useState)(new Date),O=Object(d.a)(h,2),p=O[0],k=O[1],C=function(e){var t=e.target,c=t.name,a=t.value;o(Object(g.a)(Object(g.a)({},s),{},Object(f.a)({},c,a)))},I=Object(n.useState)(t),L=Object(d.a)(I,2),z=L[0],G=L[1];return Object(n.useEffect)((function(){var t;t=e.match.params.id,m(t).then((function(e){G(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]),Object(a.jsx)("div",{children:b?Object(a.jsxs)("div",{className:"container p-3 my-3 border",children:[Object(a.jsxs)("h4",{children:["You Check-In ",z.locationname," "]}),Object(a.jsx)("h4",{children:"You Check-In successfully!"})]}):Object(a.jsxs)("div",{className:"container p-3 my-3 border",children:[Object(a.jsx)("h2",{children:"Check In"}),Object(a.jsxs)(v.a,{className:"mb-4",children:[Object(a.jsx)(v.a.Prepend,{children:Object(a.jsx)(v.a.Text,{id:"inputGroup-sizing-default",children:"Full Name"})}),Object(a.jsx)(y.a,{type:"text",id:"name",required:!0,value:s.name,onChange:C,name:"name",placeholder:"Full Name","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(a.jsxs)(v.a,{className:"mb-4",children:[Object(a.jsx)(v.a.Prepend,{children:Object(a.jsx)(v.a.Text,{id:"inputGroup-sizing-default",children:"NRIC"})}),Object(a.jsx)(y.a,{type:"text",id:"nric",required:!0,value:s.nric,onChange:C,name:"nric",placeholder:"980120145566","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(a.jsxs)(v.a,{className:"mb-4",children:[Object(a.jsx)(v.a.Prepend,{children:Object(a.jsx)(v.a.Text,{id:"inputGroup-sizing-default",children:"Body Temperature"})}),Object(a.jsx)(y.a,{type:"text",id:"temp",required:!0,value:s.temp,onChange:C,name:"temp",placeholder:"Value in Celsius","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(a.jsxs)(v.a,{className:"mb-4",children:[Object(a.jsx)(v.a.Prepend,{children:Object(a.jsx)(v.a.Text,{id:"inputGroup-sizing-default",children:"Time And Data"})}),Object(a.jsx)(N.a,{type:"text",id:"date",required:!0,name:"date",format:"y-MM-dd h:mm:ss a",onChange:function(){k()},value:p}),Object(a.jsx)(y.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(a.jsx)(j.a,{variant:"outline-secondary",onClick:function(){var t={locationid:e.match.params.id,name:s.name,nric:s.nric,temp:s.temp,date:p};x(t.locationid,t).then((function(c){console.log(t),o({locationid:e.match.params.locationid,name:c.data.name,nric:c.data.nric,temp:c.data.temp,date:c.data.date}),u(!0),console.log(c.data)})).catch((function(e){console.log(e)}))},children:"Check-In"})]})})},I=function(e){var t=Object(n.useState)({locationname:""}),c=Object(d.a)(t,2),i=c[0],s=c[1],o=Object(n.useState)(!1),l=Object(d.a)(o,2),r=l[0],b=l[1];return Object(a.jsx)("div",{children:r?Object(a.jsx)("div",{className:"container p-3 my-3 border",children:Object(a.jsx)("h4",{children:"You submitted successfully!"})}):Object(a.jsxs)("div",{className:"container p-3 my-3 border",children:[Object(a.jsx)("h2",{children:"Register"}),Object(a.jsxs)(v.a,{className:"mb-4",children:[Object(a.jsx)(v.a.Prepend,{children:Object(a.jsx)(v.a.Text,{id:"inputGroup-sizing-default",children:"Location Name"})}),Object(a.jsx)(y.a,{type:"text",id:"locationname",required:!0,value:i.locationname,onChange:function(e){var t=e.target,c=t.name,a=t.value;s(Object(g.a)(Object(g.a)({},i),{},Object(f.a)({},c,a)))},name:"locationname",placeholder:"Full Name","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(a.jsx)(j.a,{variant:"outline-secondary",onClick:function(){var e={locationname:i.locationname};O(e).then((function(e){s({locationname:e.data.locationname}),b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},children:"Register Location"})]})})},L=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),o=Object(d.a)(s,2),r=o[0],j=o[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){h().then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))};return Object(a.jsxs)("div",{className:"list-group",children:[Object(a.jsxs)("div",{className:"container p-3 my-3 border",children:[Object(a.jsx)("h4",{children:"Location List"}),Object(a.jsx)("ul",{className:"list-group",children:c&&c.map((function(e,t){return Object(a.jsx)("li",{onClick:function(){return function(e,t){j(e)}(e)},children:e.locationname},t)}))})]}),Object(a.jsx)("div",{className:"container p-3 my-3 border",children:r?Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Information"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:Object(a.jsx)("strong",{children:"Location:"})})," ",r.locationname]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:Object(a.jsx)("strong",{children:"ID:"})})," ",r.id]}),Object(a.jsx)(l.c,{to:"/createcheckin/"+r.id,className:"btn btn-outline-dark btn--medium",children:"Check In"})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Please click on a Button..."})]})})]})};var z=function(){return Object(a.jsxs)(l.b,{basename:"/",children:[Object(a.jsxs)(r.a,{className:"justify-content-center",as:"ul",variant:"tabs",children:[Object(a.jsx)(r.a.Item,{as:"li",children:Object(a.jsx)(r.a.Link,{href:"/1",children:"Home"})}),Object(a.jsx)(r.a.Item,{as:"li",children:Object(a.jsx)(r.a.Link,{href:"/Listofplaces/1",children:"List of Places"})}),Object(a.jsx)(r.a.Item,{as:"li",children:Object(a.jsx)(r.a.Link,{href:"/Register/1",children:"Register"})})]}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/:id",component:p}),Object(a.jsx)(o.a,{exact:!0,path:"/createcheckin/:id",component:C}),Object(a.jsx)(o.a,{exact:!0,path:"/Register/:id",component:I}),Object(a.jsx)(o.a,{exact:!0,path:"/Listofplaces/:id",component:L})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c(113);s.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(z,{})}),document.getElementById("root"))},61:function(e,t,c){},62:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.e2835aaf.chunk.js.map