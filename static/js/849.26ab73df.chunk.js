"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[849],{866:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return i},Y5:function(){return f},y:function(){return p}});var r=e(861),a=e(687),u=e.n(a),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3a1f94f312e9e48e882bb6b4b1db8ab3",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},849:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(687),c=e.n(u),s=e(791),i=e(146),o=e(866),f=e(100),p=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),d=v[0],h=v[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,o.Tg)();case 4:t=n.sent,u(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),d?(0,p.jsx)(f.Z,{}):(0,p.jsx)(i.Z,{films:e})]})}},146:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,u,c=e(689),s=e(168),i=e(572),o=e(87),f=i.Z.ul(r||(r=(0,s.Z)(["\n  list-style-type: none;\n"]))),p=i.Z.li(a||(a=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,i.Z)(o.rU)(u||(u=(0,s.Z)(["\n  text-decoration: none;\n  color: #62044a;\n"]))),v=e(184),d=function(n){var t=n.films,e=(0,c.TH)();return(0,v.jsx)(f,{children:t.map((function(n){return(0,v.jsx)(p,{children:(0,v.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}}}]);
//# sourceMappingURL=849.26ab73df.chunk.js.map