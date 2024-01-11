"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[364],{12:function(n,e,r){r.d(e,{Bt:function(){return l},bI:function(){return u},c6:function(){return p},wL:function(){return d},zo:function(){return s}});var t=r(861),a=r(757),i=r.n(a),c=r(294),o="ddee4de9cb910735308a6ba3c3fd3ee2";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day",{params:{api_key:o,language:"en-US"}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trends:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie",{params:{api_key:o,query:e,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e),{params:{api_key:o,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie information:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:o,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching cast:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:o,language:"en-US"}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching reviews:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},364:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,a,i,c,o,s,u,p,d,l,x,h=r(439),f=r(12),v=r(791),g=r(203),m=r(689),b=r(168),w=r(924),Z=r(87),j=w.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  background: #58b692;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),y=w.ZP.ul(a||(a=(0,b.Z)(["\n  list-style-type: none;\n  display: flex;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    justify-content: flex-start;\n  }\n"]))),k=w.ZP.ul(i||(i=(0,b.Z)(["\n  list-style-type: none;\n  padding-left: 0;\n\n  @media screen and (min-width: 768px) {\n    justify-content: flex-start;\n  }\n"]))),_=w.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  background: #58b692;\n"]))),P=w.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  gap: 15px;\n  padding: 15px;\n  flex-direction: column;\n  p {\n    text-align: justify;\n  }\n"]))),U=(0,w.ZP)(Z.rU)(s||(s=(0,b.Z)(["\n  display: block;\n  background-color: #c67e9a;\n  width: 100px;\n  text-align: center;\n  border: 1px solid grey;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  padding: 5px 35px 5px 35px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  &:hover {\n    background-color: #964262;\n  }\n"]))),S=w.ZP.div(u||(u=(0,b.Z)(["\n  background: #58b692;\n  padding: 10px 15px;\n  h3 {\n    margin-bottom: 15px;\n  }\n"]))),E=w.ZP.div(p||(p=(0,b.Z)(["\n  border-top: 2px solid grey;\n  border-bottom: 2px solid grey;\n"]))),C=w.ZP.img(d||(d=(0,b.Z)(["\n  padding: 15px;\n  width: 350px;\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n  }\n"]))),q=(0,w.ZP)(Z.rU)(l||(l=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n  width: 100px;\n  background-color: #c67e9a;\n  margin: 15px;\n  padding: 5px 15px 5px 15px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  font-weight: 700;\n  &:hover {\n    background-color: #964262;\n  }\n"]))),z=w.ZP.div(x||(x=(0,b.Z)(["\n  background: #58b692;\n  padding: 5px 15px 5px 15px;\n"]))),A=r(143),G=r(184),I=function(){var n,e,r=(0,v.useState)(null),t=(0,h.Z)(r,2),a=t[0],i=t[1],c=(0,v.useState)(!1),o=(0,h.Z)(c,2),s=o[0],u=o[1],p=(0,m.TH)(),d=(0,m.UO)().movieId;if((0,v.useEffect)((function(){u(!0),(0,f.c6)(d).then((function(n){i(n)})).catch((function(n){console.log(n)})).finally((function(){u(!1)}))}),[d]),!a)return null;var l=a||{},x=l.title,b=l.release_date,w=l.vote_average,Z=l.overview,I=l.genres,L=l.poster_path,O=l.original_title,R=b.slice(0,4),X=Math.round(10*w);return(0,G.jsxs)("div",{children:[(0,G.jsx)(z,{children:(0,G.jsxs)(q,{to:null!==(n=null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:["Go back",(0,G.jsx)(g.XmX,{})]})}),s&&(0,G.jsx)(A.a,{}),a&&(0,G.jsxs)(j,{children:[(0,G.jsx)(_,{children:(0,G.jsx)(C,{src:L?"https://image.tmdb.org/t/p/w500".concat(L):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:O})}),(0,G.jsxs)(P,{children:[(0,G.jsxs)("h2",{children:[x,"(",R,")"]}),(0,G.jsxs)("p",{children:["User score:",X,"%"]}),(0,G.jsx)("h3",{children:"Overview"}),(0,G.jsx)("p",{children:Z}),(0,G.jsx)("h3",{children:"Genres"}),(0,G.jsx)(y,{children:I.map((function(n){var e=n.name,r=n.id;return(0,G.jsx)("li",{children:e},r)}))})]})]}),(0,G.jsxs)(S,{children:[(0,G.jsxs)(E,{children:[(0,G.jsx)("h3",{children:"Additional information"}),(0,G.jsxs)(k,{children:[(0,G.jsx)("li",{children:(0,G.jsx)(U,{to:"cast",children:"Cast"})}),(0,G.jsx)("li",{children:(0,G.jsx)(U,{to:"reviews",children:"Reviews"})})]})]}),(0,G.jsx)(v.Suspense,{fallback:(0,G.jsx)(A.a,{}),children:(0,G.jsx)(m.j3,{})})]})]})}}}]);
//# sourceMappingURL=364.22f1af46.chunk.js.map