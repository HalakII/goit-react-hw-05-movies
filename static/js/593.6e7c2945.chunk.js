"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{454:function(n,e,t){t.d(e,{O:function(){return a}});t(791);var r=t(499),o=t(184),a=function(n){var e=n.movies;return(0,o.jsx)(r.aV,{children:e.map((function(n){var e=n.id,t=n.title,a=n.poster_path,i=n.vote_average;return(0,o.jsxs)(r.ck,{children:[(0,o.jsxs)(r.Fg,{to:"/movies/".concat(e),children:[(0,o.jsx)(r.Pz,{width:"264px",height:"384px",src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t}),(0,o.jsx)(r.xv,{children:t})]}),(0,o.jsxs)(r.nH,{children:["User Scrore: ",Math.round(10*i),"%"]})]},e)}))})}},499:function(n,e,t){t.d(e,{DR:function(){return y},Fg:function(){return h},Im:function(){return Z},Pz:function(){return v},aV:function(){return g},ck:function(){return m},eA:function(){return k},nH:function(){return w},xv:function(){return b}});var r,o,a,i,c,u,p,s,l,d=t(168),f=t(924),x=t(87),h=(0,f.ZP)(x.rU)(r||(r=(0,d.Z)(["\n  text-decoration: none;\n  text-align: center;\n \n  }\n"]))),g=f.ZP.ul(o||(o=(0,d.Z)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 65px);\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-gap: 40px;\n  }\n"]))),m=f.ZP.li(a||(a=(0,d.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  border: 1px solid black;\n  overflow: hidden;\n  color: #b6587c;\n  background-color: #c67e9a;\n"]))),v=f.ZP.img(i||(i=(0,d.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),b=f.ZP.p(c||(c=(0,d.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n@media screen and (min-width: 768px) {\n   font-size: 24px;\n  }\n  }\n"]))),w=f.ZP.p(u||(u=(0,d.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: black;\n  text-align: center;\n  }\n"]))),Z=f.ZP.div(p||(p=(0,d.Z)(["\n  background-color: #58b692;\n  color: #e6e6e6;\n  padding: 50px 100px;\n"]))),k=f.ZP.h1(s||(s=(0,d.Z)(["\n  color: black;\n  margin-bottom: 20px;\n"]))),y=f.ZP.p(l||(l=(0,d.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: black;\n  text-align: center;\n"])))},12:function(n,e,t){t.d(e,{Bt:function(){return d},bI:function(){return p},c6:function(){return s},wL:function(){return l},zo:function(){return u}});var r=t(861),o=t(757),a=t.n(o),i=t(294),c="ddee4de9cb910735308a6ba3c3fd3ee2";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("trending/movie/day",{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trends:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("search/movie",{params:{api_key:c,query:e,language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie information:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching cast:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching reviews:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},593:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,a,i=t(439),c=t(87),u=t(168),p=t(924),s=t(71),l=p.ZP.div(r||(r=(0,u.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding: 12px;\n  z-index: 10;\n  margin: 0 auto;\n  background-color: #58b692;\n"]))),d=(0,p.ZP)(s.uFR)(o||(o=(0,u.Z)(["\n  color: #ffff;\n  font-size: 30px;\n"]))),f=p.ZP.form(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  background: #e8eced;\n  width: 100%;\n  margin-bottom: 40px;\n  max-width: 600px;\n  overflow: hidden;\n  border-radius: 8px;\n  border: 1px solid black;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-size: 40%;\n    background: #964262;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    padding: 3px;\n  }\n\n  button:hover {\n    opacity: 1;\n  }\n\n  span {\n    font-size: 30px;\n  }\n\n  button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 20px;\n    padding-right: 4px;\n    background: transparent;\n    color: black;\n  }\n\n  input::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: black;\n  }\n"]))),x=t(184),h=function(){var n,e=(0,c.lr)(),t=(0,i.Z)(e,2),r=t[0],o=t[1],a=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,x.jsx)(l,{children:(0,x.jsxs)(f,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),o({query:a})},children:[(0,x.jsx)("input",{type:"text",placeholder:"Enter movie name...",name:"query",autoFocus:!0,onChange:function(n){return o({query:n.target.value})},value:a}),(0,x.jsx)("button",{type:"submit",children:(0,x.jsx)(d,{})})]})})},g=t(454),m=t(12),v=t(791),b=t(499),w=t(143);var Z=function(){var n,e=(0,v.useState)([]),t=(0,i.Z)(e,2),r=t[0],o=t[1],a=(0,v.useState)(!1),u=(0,i.Z)(a,2),p=u[0],s=u[1],l=(0,v.useState)(!1),d=(0,i.Z)(l,2),f=d[0],Z=d[1],k=(0,c.lr)(),y=(0,i.Z)(k,2),j=y[0],P=y[1],z=null!==(n=j.get("query"))&&void 0!==n?n:"";return(0,v.useEffect)((function(){z?(s(!0),(0,m.bI)(z).then((function(n){o(n),Z(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){s(!1)}))):(o([]),Z(!1),s(!1))}),[z]),(0,x.jsxs)(b.Im,{children:[(0,x.jsx)(h,{query:z,onChange:function(n){P(""!==n?{query:n}:{})}}),p&&(0,x.jsx)(w.a,{}),f&&z&&(0,x.jsx)(b.DR,{children:"There is no movies with this request. Please, try again"}),(0,x.jsx)(g.O,{movies:r})]})}}}]);
//# sourceMappingURL=593.6e7c2945.chunk.js.map