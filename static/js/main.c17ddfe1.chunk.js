(this.webpackJsonpgoogle_clone=this.webpackJsonpgoogle_clone||[]).push([[0],{50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),r=t.n(l),o=(t(55),t(56),t(57),t(5)),s=t(40),i=t.n(s),m=t(81),u=t(35),g=t(18),d=(t(58),t(25)),h=t.n(d),E=t(39),v=t.n(E),p=t(80),f=t(3),b=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(b.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(b)},P=t(30),w="SET_SEARCH_TERM",O=function(e,a){switch(console.log(a),a.type){case w:return Object(P.a)(Object(P.a)({},e),{},{term:a.term});default:return e}};var j=function(e){var a=e.hideButtons,t=void 0!==a&&a,l=N(),r=Object(g.a)(l,2);Object(u.a)(r[0]);var o=r[1],s=Object(n.useState)(""),i=Object(g.a)(s,2),m=i[0],d=i[1],E=Object(f.f)(),b=function(e){e.preventDefault(),o({type:w,term:m}),E.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search_input"},c.a.createElement(h.a,{className:"search_inputIcon"}),c.a.createElement("input",{value:m,onChange:function(e){return d(e.target.value)}}),c.a.createElement(v.a,null)),t?c.a.createElement("div",{className:"search_buttons"},c.a.createElement(p.a,{className:"search_buttonsHidden",type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(p.a,{className:"search_buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search_buttons"},c.a.createElement(p.a,{type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(p.a,{variant:"outlined"},"I'm Feeling Lucky")))};var k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home_header"},c.a.createElement("div",{className:"home_headerLeft"},c.a.createElement(o.b,{to:"/about"},"About"),c.a.createElement(o.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home_headerRight"},c.a.createElement(o.b,{to:"/gmail"},"Gmail"),c.a.createElement(o.b,{to:"/images"},"Images"),c.a.createElement(i.a,null),c.a.createElement(m.a,null))),c.a.createElement("div",{className:"home_body"},c.a.createElement("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"Google"}),c.a.createElement("div",{className:"home_inputContainer"},c.a.createElement(j,null))))},S=(t(65),t(29)),y=t.n(S),C=t(41),I=function(e){var a=Object(n.useState)(null),t=Object(g.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(C.a)(y.a.mark((function a(){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyCi7hFepdgNaZ9NDLFOcn4UOiBuFYCWtpk","&cx=").concat("80193fde1bdbef014","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},x=t(42),L=t.n(x),A=t(43),B=t.n(A),R=t(44),T=t.n(R),F=t(45),G=t.n(F),M=t(46),H=t.n(M);var W=function(){var e=N(),a=Object(g.a)(e,2),t=a[0].term,n=(a[1],I(t).data);return c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage_header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"searchPage_logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"Google"})),c.a.createElement("div",{className:"searchPage_headerBody"},c.a.createElement(j,{hideButtons:!0}),c.a.createElement("div",{className:"searchPage_options"},c.a.createElement("div",{className:"searchPage_optionsLeft"},c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(h.a,null),c.a.createElement(o.b,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(L.a,null),c.a.createElement(o.b,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(B.a,null),c.a.createElement(o.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(T.a,null),c.a.createElement(o.b,{to:"/shopping"},"Shopping")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(G.a,null),c.a.createElement(o.b,{to:"/maps"},"Maps")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(H.a,null),c.a.createElement(o.b,{to:"/more"},"More"))),c.a.createElement("div",{className:"searchPage_optionsRight"},c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(o.b,{to:"/settings"},"Settings")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(o.b,{to:"/tools"},"Tools")))))),t&&c.a.createElement("div",{className:"searchPage_results"},c.a.createElement("p",{className:"searchPage_resultCount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results (",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime,") seconds for ",t),null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,l,r,o;return c.a.createElement("div",{className:"searchPage_result"},c.a.createElement("a",{className:"searchPage_resultLink",href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(l=n.cse_image[0])||void 0===l?void 0:l.src)&&c.a.createElement("img",{className:"searchPage_resultImage",src:null===(r=e.pagemap)||void 0===r||null===(o=r.cse_image[0])||void 0===o?void 0:o.src,alt:""}),e.displayLink),c.a.createElement("a",{className:"searchPage_resultTitle",href:e.link},c.a.createElement("h2",null,e.title)),c.a.createElement("p",{className:"searchPage_resultSnippet"},e.snippet))}))))};var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/search"},c.a.createElement(W,null)),c.a.createElement(f.a,{path:"/"},c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{term:null},reducer:O},c.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.c17ddfe1.chunk.js.map