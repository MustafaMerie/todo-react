(this["webpackJsonptodo-react-js"]=this["webpackJsonptodo-react-js"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),s=n.n(o),a=n(7),i=n.n(a),r=(n(13),function(){return Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-md headerText text-center my-5",children:[Object(c.jsxs)("h2",{className:"mb-4 mt-5",children:["Hello, \u0627\u0647\u0644\u0627\u064b , Hola!! ",Object(c.jsx)("span",{role:"img","aria-label":"smile",children:"\ud83d\ude03"})]}),Object(c.jsxs)("p",{className:"lead mb-0",children:["With no ",Object(c.jsx)("strong",{children:"sign-in/up"})," rquired you can list your todos."]}),Object(c.jsxs)("p",{className:"lead",children:["Don't worry you can't lose the list even if you reload the app. ",Object(c.jsxs)("strong",{children:["Enjoy ",Object(c.jsx)("span",{role:"img","aria-label":"rocket",children:"\ud83d\ude80"})]})]})]})})}),l=n(5),d=n(2),j=n(16);function b(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("form",{className:"row justify-content-between p-3",onSubmit:function(t){t.preventDefault(),e.onSubmit({todoText:s,isCompleted:!1,id:Object(j.a)()}),a("")},children:[Object(c.jsx)("input",{required:!0,pattern:".*\\S+.*",type:"text",className:"inputControl","aria-describedby":"toDoText",placeholder:"Please write your todo",value:s,onChange:function(e){return a(e.target.value)}}),Object(c.jsx)("input",{type:"submit",className:"btn btnControl btnBg",value:"Add"})]})}function u(e){var t=e.todos,n=e.todo,s=e.index,a=e.completeTodo,i=e.deleteToDo,r=Object(o.useState)(!1),l=Object(d.a)(r,2),j=l[0],b=l[1],u=Object(o.useState)(n.todoText),m=Object(d.a)(u,2),O=m[0],h=m[1],x=Object(o.useState)(t),f=Object(d.a)(x,2),p=(f[0],f[1]);return Object(c.jsx)("div",{className:"litsItem my-5 p-3",children:j?Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("input",{className:"inputControl",required:!0,value:O,onChange:function(e){return h(e.target.value)}}),Object(c.jsx)("button",{className:"btn btnBg btnControl btnControlUpdate",onClick:function(){return e=n.id,p(t.map((function(t){t.id===e&&O.length>0&&(console.log(t.todoText),t.todoText=O)}))),localStorage.setItem("todos",JSON.stringify(t)),void b(!j);var e},children:"Update"})]}):Object(c.jsxs)("div",{className:"row justify-content-between flexColumn",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h4",{className:"".concat(n.isCompleted?"completed":""),children:n.todoText})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn btn-success",onClick:function(){return a(s)},children:Object(c.jsx)("i",{className:"fa ".concat(n.isCompleted?"fa-times":"fa-check"),"aria-hidden":"true"})}),Object(c.jsx)("button",{className:"btn btn-danger btnsMarginFix",onClick:function(){return i(n.id)},children:Object(c.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})}),Object(c.jsx)("button",{className:"btn btn-warning btn-warning-white",onClick:function(){return b(!j)},disabled:n.isCompleted,children:Object(c.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})})]})]})})}function m(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos"));e&&s(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var a=function(e){var t=Object(l.a)(n);t[e].isCompleted=!t[e].isCompleted,s(t)},i=function(e){var t=Object(l.a)(n).filter((function(t){return t.id!==e}));s(t)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{onSubmit:function(e){var t=[e].concat(Object(l.a)(n));s(t)}}),n.length<=0?Object(c.jsx)("h3",{className:"text-center my-5",children:"You have nothing to do ... So far!"}):n.map((function(e,t){return Object(c.jsx)(u,{index:t,todo:e,todos:n,completeTodo:a,deleteToDo:i},t)}))]})}var O=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(r,{}),Object(c.jsx)(m,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.b69b77f6.chunk.js.map