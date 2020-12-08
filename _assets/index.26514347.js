import{k as n,G as e,Y as o,L as t,cp as l,cq as r,ah as c,P as a,a as i,X as s,J as u,M as d,r as f,ba as p,cr as m,br as b,cs as v,a8 as y,bv as h,K as x}from"./index.b140c207.js";function C(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function w(n){return null!=n}var g=function(e){var o,t=e.itemPrefixCls,l=e.component,r=e.span,c=e.bordered,a=e.label,i=e.content,s=e.colon,u=l;return c?n(u,{class:[(o={},C(o,"".concat(t,"-item-label"),w(a)),C(o,"".concat(t,"-item-content"),w(i)),o)],colSpan:r},{default:function(){return[w(a)?a:i]}}):n(u,{class:["".concat(t,"-item")],colSpan:r},{default:function(){return[a&&n("span",{class:["".concat(t,"-item-label"),C({},"".concat(t,"-item-no-colon"),!s)]},[a]),i&&n("span",{class:"".concat(t,"-item-content")},[i])]}})},k=function(a){var i=function(c,a,i){var s=a.colon,u=a.prefixCls,d=a.bordered,f=i.component,p=i.type,m=i.showLabel,b=i.showContent;return c.map((function(c,a){var i=e(c),v=i.prefixCls,y=void 0===v?u:v,h=i.span,x=void 0===h?1:h,C=o(c,"label"),w=t(c),k=l(c),P=r(c),S=c.key;return"string"==typeof f?n(g,{key:"".concat(p,"-").concat(S||a),class:k,style:P,span:x,colon:s,component:f,itemPrefixCls:y,bordered:d,label:m?C:null,content:b?w:null},null):[n(g,{key:"label-".concat(S||a),class:k,style:P,span:1,colon:s,component:f[0],itemPrefixCls:y,bordered:d,label:C},null),n(g,{key:"content-".concat(S||a),class:k,style:P,span:2*x-1,component:f[1],itemPrefixCls:y,bordered:d,content:w},null)]}))},s=a.prefixCls,u=a.vertical,d=a.row,f=a.index,p=a.bordered;return u?n(c,null,[n("tr",{key:"label-".concat(f),class:"".concat(s,"-row")},[i(d,a,{component:"th",type:"label",showLabel:!0})]),n("tr",{key:"content-".concat(f),class:"".concat(s,"-row")},[i(d,a,{component:"td",type:"content",showContent:!0})])]):n("tr",{key:f,class:"".concat(s,"-row")},[i(d,a,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0})])};function P(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function S(n){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}a.string,a.any,a.number;var j=i({name:"ADescriptionsItem",props:{prefixCls:a.string,label:a.VNodeChild,span:a.number.def(1)},render:function(){return null}}),D={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(n,e,o){var t=n;return(void 0===e||e>o)&&(t=h(n,{span:o}),x(void 0===e,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}var z={prefixCls:a.string,bordered:a.looseBool,size:a.oneOf(s("default","middle","small")).def("default"),title:a.VNodeChild,extra:a.VNodeChild,column:{type:[Number,Object],default:function(){return D}},layout:a.oneOf(s("horizontal","vertical")),colon:a.looseBool},I=i({name:"ADescriptions",Item:j,setup:function(e,o){var t,l=o.slots,r=u("configProvider",d).getPrefixCls,c=f({});return p((function(){t=m.subscribe((function(n){"object"===S(e.column)&&(c.value=n)}))})),b((function(){m.unsubscribe(t)})),function(){var o,t,a,i,s=e.prefixCls,u=e.column,d=e.size,f=e.bordered,p=void 0!==f&&f,m=e.layout,b=void 0===m?"horizontal":m,h=e.colon,x=void 0===h||h,C=e.title,w=void 0===C?null===(t=l.title)||void 0===t?void 0:t.call(l):C,g=e.extra,j=void 0===g?null===(a=l.extra)||void 0===a?void 0:a.call(l):g,z=r("descriptions",s),I=function(n,e){if("number"==typeof n)return n;if("object"===S(n))for(var o=0;o<v.length;o++){var t=v[o];if(e[t]&&void 0!==n[t])return n[t]||D[t]}return 3}(u,c.value),L=function(n,e){var o=y(n),t=[],l=[],r=e;return o.forEach((function(n,c){var a,i=null===(a=n.props)||void 0===a?void 0:a.span,s=i||1;if(c===o.length-1)return l.push(O(n,i,r)),void t.push(l);s<r?(r-=s,l.push(n)):(l.push(O(n,s,r)),t.push(l),r=e,l=[])})),t}(null===(i=l.default)||void 0===i?void 0:i.call(l),I);return n("div",{class:[z,(o={},P(o,"".concat(z,"-").concat(d),"default"!==d),P(o,"".concat(z,"-bordered"),!!p),o)]},[(w||j)&&n("div",{class:"".concat(z,"-header")},[n("div",{class:"".concat(z,"-title")},[w]),n("div",{class:"".concat(z,"-extra")},[j])]),n("div",{class:"".concat(z,"-view")},[n("table",null,[n("tbody",null,[L.map((function(e,o){return n(k,{key:o,index:o,colon:x,prefixCls:z,vertical:"vertical"===b,bordered:p,row:e},null)}))])])])])}}});I.props=z,I.install=function(n){return n.component(I.name,I),n.component(I.Item.name,I.Item),n};export{I as D};