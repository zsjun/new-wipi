_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[60],{"9POb":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return n("kCYD")}])},HSfi:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("o0o1"),l=n.n(a),r=n("HaE+"),u=n("1OyB"),o=n("vuIU"),c=n("pUN5"),i=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,null,[{key:"getSetting",value:function(){var e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("/setting/get"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateSetting",value:function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("/setting",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},"JT4/":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));n("dc+4");var a=n("Btem"),l=n.n(a),r=n("wx14"),u=(n("MaXC"),n("4IMT")),o=n.n(u),c=(n("8YFG"),n("ATwu")),i=n.n(c),s=(n("CXCZ"),n("hqwM")),f=n.n(s),b=n("Ff2n"),g=(n("mN36"),n("N9UN")),p=n.n(g),v=n("q1tI"),m=n.n(v),d=n("yCxO"),h=n.n(d),y=n("0Kvv"),O=n("+T3G"),j=n("NVXP"),S=n("s1bl"),C=n("4rwI"),k=n("tV+F"),w=n.n(k),I=m.a.createElement,T=p.a.Meta,E=null,N=[{label:"\u6587\u4ef6\u540d\u79f0",field:"originalname",msg:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d\u79f0"},{label:"\u6587\u4ef6\u7c7b\u578b",field:"type",msg:"\u8bf7\u8f93\u5165\u6587\u4ef6\u7c7b\u578b"}],P={gutter:16,xs:1,sm:2,md:4,lg:4,xl:4,xxl:6},x=function(e){var t=e.visible,n=e.isCopy,a=void 0!==n&&n,u=e.closeAfterClick,c=void 0!==u&&u,s=e.onClose,g=e.onChange,m=Object(v.useRef)(),d=Object(S.a)(O.a.getFiles),k=d.loading,x=d.data,M=d.refresh,F=Object(b.a)(d,["loading","data","refresh"]),U=Object(v.useCallback)((function(e){e.stopPropagation(),E?E.update():E=new h.a(m.current,{inline:!1})}),[]),J=Object(v.useCallback)((function(e){a&&Object(y.a)(e.url),g&&g(e.url),c&&s()}),[a,g,c,s]),A=Object(v.useCallback)((function(e){return I(f.a,{className:w.a.imgs,grid:P,dataSource:e,renderItem:function(e){return I(f.a.Item,{key:e.id},I(p.a,{hoverable:!0,cover:I("div",{className:w.a.preview,onClick:U},I("img",{alt:e.originalname,src:e.url})),onClick:function(){return J(e)}},I(T,{title:e.originalname})))}})}),[J,U]);return I(l.a,{width:786,placement:"right",title:"\u6587\u4ef6\u9009\u62e9",closable:!0,onClose:s,visible:t},a&&I("div",{style:{marginBottom:16}},I(i.a,{message:"\u70b9\u51fb\u5361\u7247\u590d\u5236\u94fe\u63a5\uff0c\u70b9\u51fb\u56fe\u7247\u67e5\u770b\u5927\u56fe",type:"info"})),I("div",{ref:m},I(C.a,Object(r.a)({loading:k,data:x},F,{refresh:M,searchFields:N,rightNode:I(j.a,{onOK:M,useDragger:!1},I(o.a,null,"\u4e0a\u4f20\u6587\u4ef6")),customDataTable:A}))))}},kCYD:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),l=n.n(a),r=n("HaE+"),u=(n("Z8Mf"),n("j7zX")),o=n.n(u),c=n("q1tI"),i=n.n(c),s=n("20a2"),f=n("ELla"),b=n("6HBy"),g=(n("MaXC"),n("4IMT")),p=n.n(g),v=(n("cUip"),n("iJl9")),m=n.n(v),d=(n("tL+A"),n("QpBz")),h=n.n(d),y=n("ymrT"),O=n("WsrF"),j=n("JT4/"),S=n("HSfi"),C=i.a.createElement,k=function(e){var t=e.setting,n=Object(c.useState)(!1),a=n[0],l=n[1],r=Object(c.useState)("logo"),u=r[0],o=r[1],i=Object(c.useState)(null),s=i[0],f=i[1],b=Object(c.useState)(null),g=b[0],v=b[1],d=Object(c.useState)(null),k=d[0],w=d[1],I=Object(c.useState)(null),T=I[0],E=I[1],N=Object(c.useState)(null),P=N[0],x=N[1],M=Object(c.useState)(null),F=M[0],U=M[1];Object(c.useEffect)((function(){f(t&&t.systemUrl||null),v(t&&t.systemTitle||null),w(t&&t.systemLogo||null),E(t&&t.systemFavicon||null),x(t&&t.systemFooterInfo||null),U(t&&t.adminSystemUrl||null)}),[t]);return C(O.a,{layout:"vertical"},C(O.a.Item,{label:"\u7cfb\u7edf\u5730\u5740"},C(m.a,{placeholder:"\u8bf7\u8f93\u5165\u7cfb\u7edf\u5730\u5740",value:s,onChange:function(e){f(e.target.value)}})),C(O.a.Item,{label:"\u540e\u53f0\u5730\u5740"},C(m.a,{placeholder:"\u8bf7\u8f93\u5165\u540e\u53f0\u5730\u5740",value:F,onChange:function(e){U(e.target.value)}})),C(O.a.Item,{label:"\u7cfb\u7edf\u6807\u9898"},C(m.a,{placeholder:"\u8bf7\u8f93\u5165\u7cfb\u7edf\u6807\u9898\uff0c\u5c06\u4f5c\u4e3a head.title \u663e\u793a",value:g,onChange:function(e){v(e.target.value)}})),C(O.a.Item,{label:"Logo"},C(m.a,{placeholder:"\u8bf7\u8f93\u5165 logo \u94fe\u63a5\u6216\u9009\u62e9\u6587\u4ef6\uff0c\u4e5f\u53ef\u8f93\u5165 html",addonAfter:C(y.a,{onClick:function(){o("logo"),l(!0)}}),value:k,onChange:function(e){w(e.target.value)}})),C(O.a.Item,{label:"Favicon"},C(m.a,{placeholder:"\u8bf7\u8f93\u5165 favicon \u94fe\u63a5\u6216\u9009\u62e9\u6587\u4ef6",addonAfter:C(y.a,{onClick:function(){o("favicon"),l(!0)}}),value:T,onChange:function(e){E(e.target.value)}})),C(O.a.Item,{label:"\u9875\u811a\u4fe1\u606f"},C(m.a.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u9875\u811a\u4fe1\u606f",rows:8,value:P,onChange:function(e){x(e.target.value)}})),C(j.a,{visible:a,closeAfterClick:!0,onClose:function(){return l(!1)},onChange:function(e){"logo"===u?w(e):E(e)}}),C(p.a,{type:"primary",onClick:function(){var e={systemUrl:s,systemTitle:g,systemLogo:k,systemFavicon:T,systemFooterInfo:P,adminSystemUrl:F};S.a.updateSetting(e).then((function(){h.a.success("\u4fdd\u5b58\u6210\u529f")}))}},"\u4fdd\u5b58"))},w=i.a.createElement,I=function(e){var t=e.setting,n=Object(c.useState)(null),a=n[0],l=n[1],r=Object(c.useState)(null),u=r[0],o=r[1];Object(c.useEffect)((function(){l(t&&t.seoKeyword||null),o(t&&t.seoDesc||null)}),[t]);return w(O.a,{layout:"vertical"},w(O.a.Item,{label:"\u5173\u952e\u8bcd"},w(m.a,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\uff0c\u7a7a\u683c\u5206\u5272",value:a,onChange:function(e){l(e.target.value)}})),w(O.a.Item,{label:"\u63cf\u8ff0\u4fe1\u606f"},w(m.a.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0\u4fe1\u606f",rows:6,value:u,onChange:function(e){o(e.target.value)}})),w(p.a,{type:"primary",onClick:function(){var e={seoKeyword:a,seoDesc:u};S.a.updateSetting(e).then((function(){h.a.success("\u4fdd\u5b58\u6210\u529f")}))}},"\u4fdd\u5b58"))},T=i.a.createElement,E=function(e){var t=e.setting,n=Object(c.useState)(null),a=n[0],l=n[1],r=Object(c.useState)(null),u=r[0],o=r[1];Object(c.useEffect)((function(){l(t&&t.baiduAnalyticsId||null),o(t&&t.googleAnalyticsId||null)}),[t]);return T(O.a,{layout:"vertical"},T(O.a.Item,{label:"\u767e\u5ea6\u7edf\u8ba1"},T(m.a,{placeholder:"\u8bf7\u8f93\u5165\u767e\u5ea6\u7edf\u8ba1 Id",value:a,onChange:function(e){l(e.target.value)}})),T(O.a.Item,{label:"\u8c37\u6b4c\u5206\u6790"},T(m.a,{placeholder:"\u8bf7\u8f93\u5165\u8c37\u6b4c\u5206\u6790 Id",value:u,onChange:function(e){o(e.target.value)}})),T(p.a,{type:"primary",onClick:function(){var e={baiduAnalyticsId:a,googleAnalyticsId:u};S.a.updateSetting(e).then((function(){h.a.success("\u4fdd\u5b58\u6210\u529f")}))}},"\u4fdd\u5b58"))},N=(n("8YFG"),n("ATwu")),P=n.n(N);n("nT0F");var x=n("MM9K"),M=n.n(x),F=i.a.createElement,U={height:"600px",overflow:"hidden",border:"1px solid var(--border-color)",marginBottom:24},J=function(e){var t=e.value,a=e.onChange,l=e.style,r=void 0===l?U:l,u=Object(c.useRef)(null),o=Object(c.useRef)(null),s=Object(c.useState)(!1),f=s[0],b=s[1],g=Object(c.useState)(null),p=g[0],v=g[1];return Object(c.useEffect)((function(){f&&o.current.setValue(t)}),[f,t]),Object(c.useEffect)((function(){return Promise.all([Promise.all([n.e(1),n.e(34)]).then(n.bind(null,"8z58"))]).then((function(e){var t=e[0].editor.create(u.current,{language:"json",automaticLayout:!0,theme:"vs",scrollBeyondLastLine:!1,scrollbar:{useShadows:!1,vertical:"visible",horizontal:"visible",verticalScrollbarSize:6,horizontalScrollbarSize:6}});o.current=t,t.onDidChangeModelContent((function(){var e=t.getValue();try{a(JSON.parse(e)),v(null)}catch(n){console.log(n),v(n)}})),b(!0)})),function(){b(!1),o.current&&o.current.dispose()}}),[a]),F(i.a.Fragment,null,F("div",{ref:u,style:r},f?null:F(M.a,{tip:"\u7f16\u8f91\u5668\u52aa\u529b\u52a0\u8f7d\u4e2d...",spinning:!0})),p?F(P.a,{style:{marginBottom:24},message:"Json \u683c\u5f0f\u5316\u51fa\u9519",type:"error",showIcon:!0}):null)},A=i.a.createElement,_=function(e){var t=e.setting,n=Object(c.useState)({}),a=n[0],l=n[1];Object(c.useEffect)((function(){l(function(e){try{return e&&"object"===typeof e?e:"string"===typeof e?JSON.parse(e):{}}catch(t){return{}}}(t.oss))}),[t.oss]);var r=Object(c.useCallback)((function(){var e={oss:JSON.stringify(a)};S.a.updateSetting(e).then((function(){h.a.success("\u4fdd\u5b58\u6210\u529f")}))}),[a]);return A(O.a,{layout:"vertical"},A(P.a,{message:"\u8bf4\u660e",description:'\u8bf7\u5728\u7f16\u8f91\u5668\u4e2d\u8f93\u5165\u60a8\u7684 oss \u914d\u7f6e\uff0c\u5e76\u6dfb\u52a0 type \u5b57\u6bb5\u533a\u5206 \r\n {"type":"aliyun","accessKeyId":"","accessKeySecret":"","bucket":"","https":true,"region":""}',type:"info",showIcon:!0,style:{marginBottom:"1rem"}}),A(J,{value:JSON.stringify(a,null,2),onChange:l,style:{height:"400px",overflow:"hidden",border:"1px solid var(--border-color)",marginBottom:24}}),A(p.a,{type:"primary",onClick:r},"\u4fdd\u5b58"))},B=n("1OyB"),L=n("vuIU"),X=n("pUN5"),K=function(){function e(){Object(B.a)(this,e)}return Object(L.a)(e,null,[{key:"testSendMail",value:function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X.a.post("/smtp",{to:t,subject:"\u6d4b\u8bd5",text:"\u6d4b\u8bd5\u90ae\u4ef6"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),z=i.a.createElement,D=function(e){var t=e.setting,n=Object(c.useState)(null),a=n[0],l=n[1],r=Object(c.useState)(null),u=r[0],o=r[1],i=Object(c.useState)(null),s=i[0],f=i[1],b=Object(c.useState)(null),g=b[0],v=b[1],d=Object(c.useState)(null),y=d[0],j=d[1];Object(c.useEffect)((function(){l(t&&t.smtpHost||null),o(t&&t.smtpPort||null),f(t&&t.smtpUser||null),v(t&&t.smtpPass||null),j(t&&t.smtpFromUser||null)}),[t]);var C=Object(c.useCallback)((function(){K.testSendMail(y).then((function(){h.a.success("\u90ae\u4ef6\u53d1\u9001\u6210\u529f")})).catch((function(){h.a.error("\u90ae\u4ef6\u53d1\u9001\u5931\u8d25")}))}),[y]);return z(O.a,{layout:"vertical"},z(O.a.Item,{label:"SMTP \u5730\u5740"},z(m.a,{placeholder:"\u8bf7\u8f93\u5165SMTP",value:a,onChange:function(e){l(e.target.value)}})),z(O.a.Item,{label:"SMTP \u7aef\u53e3\uff08\u5f3a\u5236\u4f7f\u7528 SSL \u8fde\u63a5\uff09"},z(m.a,{placeholder:"\u8bf7\u8f93\u5165SMTP \u7aef\u53e3",value:u,onChange:function(e){o(e.target.value)}})),z(O.a.Item,{label:"SMTP \u7528\u6237"},z(m.a,{placeholder:"\u8bf7\u8f93\u5165SMTP \u7528\u6237",value:s,onChange:function(e){f(e.target.value)}})),z(O.a.Item,{label:"SMTP \u5bc6\u7801"},z(m.a,{placeholder:"\u4e5f\u53ef\u80fd\u662f\u6388\u6743\u7801",value:g,onChange:function(e){v(e.target.value)}})),z(O.a.Item,{label:"\u53d1\u4ef6\u4eba"},z(m.a,{placeholder:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740",value:y,onChange:function(e){j(e.target.value)}})),z(p.a,{type:"primary",onClick:function(){var e={smtpHost:a,smtpPort:u,smtpUser:s,smtpPass:g,smtpFromUser:y};S.a.updateSetting(e).then((function(){h.a.success("\u4fdd\u5b58\u6210\u529f")}))}},"\u4fdd\u5b58"),z(p.a,{style:{marginLeft:16},onClick:C},"\u6d4b\u8bd5"))},H=(n("fwXI"),n("CC+v")),q=n.n(H),V=n("rv+x"),R=n("mMs/"),Y=i.a.createElement,G=function(e){var t=e.setting,n=Object(R.a)(),a=Object(c.useState)({}),l=a[0],r=a[1],u=l&&"object"===typeof l?Object.keys(l):[];Object(c.useEffect)((function(){try{if(t.i18n){var e=JSON.parse(t.i18n);r(e)}}catch(n){r({})}}),[t.i18n]);var i=Object(c.useCallback)((function(e,t){"add"===t?function(){var e="";q.a.confirm({title:"\u8bf7\u8f93\u5165\u8bed\u8a00\u540d\u79f0\uff08\u82f1\u6587\uff09",icon:Y(m.a,{onChange:function(t){e=t.target.value}}),onOk:function(){r((function(t){return t[e]={},t})),n()},okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",transitionName:"",maskTransitionName:""})}():q.a.confirm({title:"\u786e\u8ba4\u5220\u9664",icon:Y(V.a,null),onOk:function(){r((function(t){return delete t[e],t})),n()},okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",transitionName:"",maskTransitionName:""})}),[n]),s=Object(c.useCallback)((function(e){return function(t){r((function(n){return n[e]=t,n}))}}),[]),f=Object(c.useCallback)((function(){var e={i18n:JSON.stringify(l)};S.a.updateSetting(e).then((function(){h.a.success("\u4fdd\u5b58\u6210\u529f")}))}),[l]);return Y("div",null,Y(o.a,{type:"editable-card",onEdit:i},u.map((function(e){return Y(o.a.TabPane,{tab:e,key:e},Y(J,{value:JSON.stringify(l[e],null,2),onChange:s(e)}))}))),Y(p.a,{type:"primary",onClick:f},"\u4fdd\u5b58"))},Z=i.a.createElement,W=o.a.TabPane,Q=function(e){var t=e.type,n=Object(s.useRouter)(),a=Object(c.useState)(t),l=a[0],r=a[1],u=Object(b.a)(),i=[{label:"\u7cfb\u7edf\u8bbe\u7f6e",content:Z(k,{setting:u})},{label:"\u56fd\u9645\u5316\u8bbe\u7f6e",content:Z(G,{setting:u})},{label:"SEO\u8bbe\u7f6e",content:Z(I,{setting:u})},{label:"\u6570\u636e\u7edf\u8ba1",content:Z(E,{setting:u})},{label:"OSS\u8bbe\u7f6e",content:Z(_,{setting:u})},{label:"SMTP\u670d\u52a1",content:Z(D,{setting:u})}];return Z(f.a,null,u&&Z("div",{style:{background:"#fff",padding:16}},Z(o.a,{activeKey:l,tabPosition:"left",onChange:function(e){r(e),n.push("/setting","/setting?type="+e,{shallow:!0})}},i.map((function(e){return Z(W,{tab:e.label,key:e.label},e.content)})))))};Q.getInitialProps=function(){var e=Object(r.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.type,e.abrupt("return",{type:""+(n||"\u7cfb\u7edf\u8bbe\u7f6e")});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=Q},"mMs/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI");function l(){var e=Object(a.useState)(-1)[1];return Object(a.useCallback)((function(){e((function(e){return e+1}))}),[])}},"tV+F":function(e,t,n){e.exports={preview:"Ww9TX_Nr4kCUq3meZJEr-"}}},[["9POb",2,3,0,4,5,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,1]]]);