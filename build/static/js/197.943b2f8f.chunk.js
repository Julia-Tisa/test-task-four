"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[197],{8518:function(e,t,n){n.r(t),n.d(t,{UserList:function(){return w}});var r=n(4165),s=n(5861),a=n(5671),i=n(3144),c=n(136),o=n(9388),l=n(2791),u=n(1087),d=n(6988),h=n(1810),m=n(7354),x=n(4378),p=n(43),f=n(2138),v=n(2622),j=n(184),w=function(e){(0,c.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={users:null,userProfileVisible:!1,selectedUser:null,loading:!0},e.deleteUser=function(t,n){e.setState({users:e.state.users.filter((function(e){return e.id!==t}))}),d.ZP.success({content:"\u0423\u0434\u0430\u043b\u0435\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ".concat(n),duration:2})},e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({users:n,loading:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),d.ZP.error({content:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445",duration:2});case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.loading,s=[{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",dataIndex:"name",render:function(e,t){return(0,j.jsx)(u.rU,{to:"/app/user",state:{user:t},children:(0,j.jsx)("div",{className:"d-flex",children:(0,j.jsxs)("div",{className:"avatar-status d-flex flex-column",children:[(0,j.jsx)("div",{className:"ml-2",children:(0,j.jsx)("span",{children:t.name})}),(0,j.jsx)("div",{className:"ml-2",children:(0,j.jsx)("span",{className:"text-muted",children:t.email})})]})})})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",dataIndex:"phone",sorter:{compare:function(e,t){return e.phone.length-t.phone.length}}},{title:"\u0421\u0430\u0439\u0442",dataIndex:"website",sorter:{compare:function(e,t){return(e=e.website.toLowerCase())>(t=t.website.toLowerCase())?-1:t>e?1:0}}},{title:"\u041d\u0438\u043a",dataIndex:"username",sorter:{compare:function(e,t){return(e=e.username.toLowerCase())>(t=t.username.toLowerCase())?-1:t>e?1:0}}},{title:"",dataIndex:"actions",render:function(t,n){return(0,j.jsx)("div",{className:"text-right d-flex justify-content-end",children:(0,j.jsx)(h.Z,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:(0,j.jsx)(m.ZP,{danger:!0,icon:(0,j.jsx)(v.Z,{}),onClick:function(){e.deleteUser(n.id,n.name)},size:"small"})})})}}];return(0,j.jsx)(x.Z,{bodyStyle:{padding:"0px"},children:r?(0,j.jsx)("div",{className:"text-center py-4",children:(0,j.jsx)(p.Z,{size:"large"})}):(0,j.jsx)("div",{className:"table-responsive",children:(0,j.jsx)(f.Z,{columns:s,dataSource:n,rowKey:"id"})})})}}]),n}(l.Component);t.default=w}}]);
//# sourceMappingURL=197.943b2f8f.chunk.js.map