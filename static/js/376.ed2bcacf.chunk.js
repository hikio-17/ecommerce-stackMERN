"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[376],{54376:function(e,t,r){r.r(t);var n=r(74165),a=r(15861),s=r(1413),o=r(29439),i=r(72791),u=r(16429),c=r(9085),l=r(59434),d=r(26958),m=r(80184);t.default=function(e){var t=e.history,r=(0,i.useState)(""),f=(0,o.Z)(r,2),p=f[0],h=f[1],g=(0,i.useState)(""),v=(0,o.Z)(g,2),x=v[0],b=v[1],w=((0,l.v9)((function(e){return(0,s.Z)({},e)})).user,(0,l.I0)());(0,i.useEffect)((function(){h(window.localStorage.getItem("emailForRegistration"))}),[]);var k=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),p&&x){e.next=4;break}return c.Am.error("Email and password is required"),e.abrupt("return");case 4:if(!(x.length<6)){e.next=7;break}return c.Am.error("Password must be at least 6 characters long"),e.abrupt("return");case 7:return e.prev=7,e.next=10,u.I.signInWithEmailLink(p,window.location.href);case 10:if(!e.sent.user.emailVerified){e.next=22;break}return window.localStorage.removeItem("emailForRegistration"),a=u.I.currentUser,e.next=16,a.updatePassword(x);case 16:return e.next=18,a.getIdTokenResult();case 18:s=e.sent,console.log("user",a,"idTokenResult",s),(0,d.XB)(s.token).then((function(e){w({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:s.token,role:e.data.role,_id:e.data._id}})})).catch((function(e){return console.log(e)})),t.push("/");case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(7),console.log(e.t0),c.Am.error(e.t0.message);case 28:case"end":return e.stop()}}),e,null,[[7,24]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:"container p-5",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-md-6 offset-md-3",children:[(0,m.jsx)("h4",{children:"Register Complete"}),(0,m.jsxs)("form",{onSubmit:k,children:[(0,m.jsx)("input",{type:"email",className:"form-control",value:p,disabled:!0}),(0,m.jsx)("input",{type:"password",className:"form-control",value:x,onChange:function(e){return b(e.target.value)},placeholder:"Password",autoFocus:!0}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{type:"submit",className:"btn btn-raised",children:"Complete Registration"})]})]})})})}}}]);
//# sourceMappingURL=376.ed2bcacf.chunk.js.map