(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(e,t,n){"use strict";n.r(t);var a=n(5893),r=(n(906),n(7294)),i=n(1785),o=n.n(i);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,r.useEffect)((function(){o().initialize({gtmId:"GTM-KX9G7KR"})}),[]),(0,a.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){d(e,t,n[t])}))}return e}({},n))}},906:function(){},6421:function(e,t,n){"use strict";var a,r=n(6425),i=(a=r)&&a.__esModule?a:{default:a};var o={tags:function(e){var t=e.id,n=e.events,a=e.dataLayer,r=e.dataLayerName,o=e.preview,d="&gtm_auth="+e.auth,u="&gtm_preview="+o;return t||(0,i.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+d+u+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(n).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+d+u+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+r+"','"+t+"');",dataLayerVar:this.dataLayer(a,r)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=o},8676:function(e,t,n){"use strict";var a,r=n(6421),i=(a=r)&&a.__esModule?a:{default:a};var o={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=i.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,n=e.events,a=void 0===n?{}:n,r=e.dataLayer,i=e.dataLayerName,o=void 0===i?"dataLayer":i,d=e.auth,u=void 0===d?"":d,c=e.preview,s=void 0===c?"":c,f=this.gtm({id:t,events:a,dataLayer:r||void 0,dataLayerName:o,auth:u,preview:s});r&&document.head.appendChild(f.dataScript),document.head.insertBefore(f.script(),document.head.childNodes[0]),document.body.insertBefore(f.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,n=e.dataLayerName,a=void 0===n?"dataLayer":n;if(window[a])return window[a].push(t);var r=i.default.dataLayer(t,a),o=this.dataScript(r);document.head.insertBefore(o,document.head.childNodes[0])}};e.exports=o},1785:function(e,t,n){"use strict";var a,r=n(8676),i=(a=r)&&a.__esModule?a:{default:a};e.exports=i.default},6425:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);