(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},126:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s(0),c=s.n(a),i=s(19),r=s.n(i),o=(s(105),s(66)),l=s(14),j=s(44),u=s(41),d=s(53),p={episodes:[],serials:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EPISODES":return Object(d.a)(Object(d.a)({},e),{},{episodes:t.payload});case"SET_SERIALS":return Object(d.a)(Object(d.a)({},e),{},{serials:t.payload});default:return e}},b=s(84),m=s(85),O=Object(u.createStore)(h,Object(b.composeWithDevTools)(Object(u.applyMiddleware)(m.a))),f=(s(110),s(111),s(46)),x=s.n(f),v=s(59),g=s(21),S=s(128),w=s(130);s(112),s(113);var y=function(e){var t=e.name,s=e.img,a=e.rating,c=e.id,i=e.openModal;return Object(n.jsx)("div",{className:"serialContainer",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"showImage",onClick:function(){return i(c)},src:s&&s.medium||"https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg",alt:t}),Object(n.jsxs)("div",{children:[t," ",a]})]})})},_=s(129),C=s(131);s(114);var E=function(e){var t=e.onChange,s=e.filterByImage;return Object(n.jsxs)("div",{className:"inputBar",children:[Object(n.jsx)(_.a,{className:"input-row",onChange:t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(n.jsx)(C.a,{className:"checkboxCustom",onChange:s,children:"\u0421 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430\u043c\u0438"})]})},k=s(37),N=(s(115),function(e){var t=e.item,s=t.show.summary.replace(/<[^>]*>/g,""),a=new Date(t.show.premiered);return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:["year: ",a.toLocaleDateString("ru")]}),Object(n.jsx)("div",{children:s}),Object(n.jsx)("div",{className:"btn",children:Object(n.jsx)(k.a,{type:"primary",onClick:function(){},children:Object(n.jsx)(o.b,{to:"/episodes/".concat(t.show.id),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0440\u0438\u0439"})})})]})});var I=Object(j.b)((function(e){return{serials:e.serials}}),(function(e){return{setSerials:function(t){return e({type:"SET_SERIALS",payload:t})}}}))((function(e){var t=c.a.useState(null),s=Object(g.a)(t,2),a=s[0],i=s[1],r=c.a.useState(!1),o=Object(g.a)(r,2),l=o[0],j=o[1],u=c.a.useState([]),d=Object(g.a)(u,2),p=d[0],h=d[1],b=c.a.useState(!1),m=Object(g.a)(b,2),O=m[0],f=m[1],_=c.a.useState(""),C=Object(g.a)(_,2),k=C[0],I=C[1],L=c.a.useState(!1),T=Object(g.a)(L,2),D=T[0],B=T[1],M=c.a.useState(),q=Object(g.a)(M,2),A=q[0],J=q[1];c.a.useEffect((function(){Object(v.a)(x.a.mark((function t(){var s,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.tvmaze.com/search/shows?q=man");case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,e.setSerials(n),j(!0),h(n),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),j(!0),i(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()}),[]),c.a.useEffect((function(){var t=e.serials.filter((function(e){var t=e.show.name.toLowerCase();if(!O||e.show.image)return t.includes(k.toLowerCase())}));console.log(t),h(t)}),[O,k]);var P=function(e){if(e){var t=p.find((function(t){return t.show.id===e}));J(t)}B((function(e){return!e}))};return a?Object(n.jsxs)("p",{children:["Error ",a.message," "]}):l?Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{onChange:function(e){return I(e.target.value)},filterByImage:function(e){return f(e.target.checked)}}),p.map((function(e){return Object(n.jsx)(y,{id:e.show.id,name:e.show.name,img:e.show.image,openModal:P},e.show.id)})),Object(n.jsx)(w.a,{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0421\u0435\u0440\u0438\u0430\u043b\u0430",visible:D,onOk:P,onCancel:P,children:Object(n.jsx)(N,{item:A})})]}):Object(n.jsx)(S.a,{})})),L=s(96),T=s.n(L),D=s(58),B=s(4),M=s.n(B),q=s(55),A=s.n(q),J=function(e){var t=e.name,s=e.img,a=e.summary||"\u0431\u0435\u0437 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",i=c.a.useState(a.slice(0,100)),r=Object(g.a)(i,2),o=r[0],l=r[1],j=c.a.useState(!1),u=Object(g.a)(j,2),d=u[0],p=u[1],h=a.length>100;return Object(n.jsxs)("div",{className:A.a.episodeContainer,children:[Object(n.jsxs)("div",{className:A.a.everyEpisode,children:[Object(n.jsx)("img",{className:A.a.imageShow,src:s&&s.medium||"https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg",alt:t}),Object(n.jsx)("div",{children:t})]}),Object(n.jsx)("p",{className:M()(Object(D.a)({},A.a.ellips,!d)),children:o.replace(/<[^>]*>/g,"")}),Object(n.jsx)("div",{className:"btn",children:h&&Object(n.jsx)(k.a,{type:"primary",onClick:function(){l(d?a.slice(0,100):a),p((function(e){return!e}))},children:d?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c"})})]})};var P=Object(j.b)((function(e){return{episodes:e.episodes}}),(function(e){return{setEpisodes:function(t){return e({type:"SET_EPISODES",payload:t})}}}))((function(e){var t=c.a.useState(null),s=Object(g.a)(t,2),a=s[0],i=s[1],r=c.a.useState(!1),o=Object(g.a)(r,2),l=o[0],j=o[1];return c.a.useEffect((function(){Object(v.a)(x.a.mark((function t(){var s,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://api.tvmaze.com/shows/".concat(e.match.params.id,"/episodes"));case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,e.setEpisodes(n),j(!0),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),j(!0),i(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}),[]),console.log(e),a?Object(n.jsxs)("p",{children:["Error ",a.message," "]}):l?Object(n.jsxs)("div",{className:T.a.episodeContainer,children:[Object(n.jsx)(E,{}),Object(n.jsx)("div",{children:e.valueFromStore}),Object(n.jsx)("button",{onClick:e.changeValue,children:"\u0422\u0435\u0441\u0442"}),Object(n.jsxs)("div",{children:[e.episodes.map((function(e){return Object(n.jsx)(J,{name:e.name,img:e.image,summary:e.summary},e.id)})),Object(n.jsx)("div",{children:"name"})]})]}):Object(n.jsx)(S.a,{})}));var V=function(){return Object(n.jsx)(j.a,{store:O,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsx)(o.a,{basename:"/TVShows",children:Object(n.jsxs)("section",{className:"serialList",children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(n.jsx)(l.a,{path:"/episodes/:id",component:P})]})})})})})};r.a.render(Object(n.jsx)(V,{}),document.getElementById("root"))},55:function(e,t,s){e.exports={episodeContainer:"styles_episodeContainer__5Oi-e",btn:"styles_btn__tOM94",imageShow:"styles_imageShow__37JwO",ellips:"styles_ellips__yiV1H"}},96:function(e,t,s){e.exports={episodeContainer:"styles_episodeContainer__1Pqrq"}}},[[126,1,2]]]);
//# sourceMappingURL=main.d3119908.chunk.js.map