"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{454:function(n,t,r){r.d(t,{O:function(){return o}});r(791);var e=r(499),a=r(184),o=function(n){var t=n.movies;return(0,a.jsx)(e.aV,{children:t.map((function(n){var t=n.id,r=n.title,o=n.poster_path,c=n.vote_average;return(0,a.jsxs)(e.ck,{children:[(0,a.jsxs)(e.Fg,{to:"/movies/".concat(t),children:[(0,a.jsx)(e.Pz,{width:"264px",height:"384px",src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r}),(0,a.jsx)(e.xv,{children:r})]}),(0,a.jsxs)(e.nH,{children:["User Scrore: ",Math.round(10*c),"%"]})]},t)}))})}},499:function(n,t,r){r.d(t,{DR:function(){return y},Fg:function(){return h},Im:function(){return Z},Pz:function(){return m},aV:function(){return g},ck:function(){return v},eA:function(){return k},nH:function(){return b},xv:function(){return w}});var e,a,o,c,i,u,s,p,l,f=r(168),d=r(924),x=r(87),h=(0,d.ZP)(x.rU)(e||(e=(0,f.Z)(["\n  text-decoration: none;\n  text-align: center;\n \n  }\n"]))),g=d.ZP.ul(a||(a=(0,f.Z)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 65px);\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-gap: 40px;\n  }\n"]))),v=d.ZP.li(o||(o=(0,f.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  border: 1px solid black;\n  overflow: hidden;\n  color: #b6587c;\n  background-color: #c67e9a;\n"]))),m=d.ZP.img(c||(c=(0,f.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),w=d.ZP.p(i||(i=(0,f.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n@media screen and (min-width: 768px) {\n   font-size: 24px;\n  }\n  }\n"]))),b=d.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: black;\n  text-align: center;\n  }\n"]))),Z=d.ZP.div(s||(s=(0,f.Z)(["\n  background-color: #58b692;\n  color: #e6e6e6;\n  padding: 50px 100px;\n"]))),k=d.ZP.h1(p||(p=(0,f.Z)(["\n  color: black;\n  margin-bottom: 20px;\n"]))),y=d.ZP.p(l||(l=(0,f.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: black;\n  text-align: center;\n"])))},12:function(n,t,r){r.d(t,{Bt:function(){return f},bI:function(){return s},c6:function(){return p},wL:function(){return l},zo:function(){return u}});var e=r(861),a=r(757),o=r.n(a),c=r(294),i="ddee4de9cb910735308a6ba3c3fd3ee2";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,e.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day",{params:{api_key:i,language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trends:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie",{params:{api_key:i,query:t,language:"en-US"}});case 3:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t),{params:{api_key:i,language:"en-US"}});case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie information:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 3:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching cast:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:i,language:"en-US"}});case 3:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching reviews:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},415:function(n,t,r){r.r(t);var e=r(439),a=r(454),o=r(12),c=r(791),i=r(499),u=r(143),s=r(184);t.default=function(){var n=(0,c.useState)([]),t=(0,e.Z)(n,2),r=t[0],p=t[1],l=(0,c.useState)(!1),f=(0,e.Z)(l,2),d=f[0],x=f[1];return(0,c.useEffect)((function(){x(!0),(0,o.zo)().then((function(n){p(n)})).catch((function(n){console.log(n)})).finally((function(){x(!1)}))}),[]),(0,s.jsxs)(i.Im,{children:[(0,s.jsx)(i.eA,{children:"Trending today"}),(0,s.jsx)(a.O,{movies:r}),d&&(0,s.jsx)(u.a,{})]})}}}]);
//# sourceMappingURL=415.84da7181.chunk.js.map