var e=Object.assign;import{dq as o,e as a,d as t,bt as n,r as i,a as s,aD as l,h as p,bA as r,H as d,o as m,i as u,w as c,j as g,m as f}from"./index.89eaa474.js";import{A as b}from"./index.6c42ac2e.js";import{_ as j}from"./index.6a59b07e.js";import"./vendor.3b1829c7.js";import"./index.e2fe5134.js";import"./index.81eb82f3.js";import"./RightOutlined.f6122b3f.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./isEqual.0bcea136.js";import"./toInteger.e5f6d519.js";import"./DownOutlined.1abeee16.js";/* empty css              */import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";function y(e){let t,n=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const o=e;t=o.props||{},n=o.target||document.body}else t=e;const i=o(t);return[()=>{const e=a(n);e&&i.open(e)},()=>{i.close()}]}var L=t({components:{Loading:n,PageWrapper:j,[b.name]:b},setup(){const o=i(null),a=i(!1),t=s({absolute:!1,loading:!1,tip:"加载中..."}),[n,p]=y({tip:"加载中..."}),[r,d]=y({target:o,props:{tip:"加载中...",absolute:!0}});function m(e){t.absolute=e,t.loading=!0,setTimeout((()=>{t.loading=!1}),2e3)}return e({openCompFullLoading:function(){m(!1)},openFnFullLoading:function(){n(),setTimeout((()=>{p()}),2e3)},openFnWrapLoading:function(){r(),setTimeout((()=>{d()}),2e3)},openCompAbsolute:function(){m(!0)},wrapEl:o,loadingRef:a,openDirectiveLoading:function(){a.value=!0,setTimeout((()=>{a.value=!1}),2e3)}},l(t))}});const C=f(" 全屏 Loading "),k=f(" 容器内 Loading "),x=f(" 全屏 Loading "),F=f(" 容器内 Loading "),v=f(" 打开指令Loading ");L.render=function(e,o,a,t,n,i){const s=p("a-alert"),l=p("a-button"),f=p("Loading"),b=p("PageWrapper"),j=r("loading");return d((m(),u(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:c((()=>[g(s,{message:"组件方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:c((()=>[C])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:c((()=>[k])),_:1},8,["onClick"]),g(f,{loading:e.loading,absolute:e.absolute,tip:e.tip},null,8,["loading","absolute","tip"]),g(s,{message:"函数方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:c((()=>[x])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:c((()=>[F])),_:1},8,["onClick"]),g(s,{message:"指令方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:c((()=>[v])),_:1},8,["onClick"])])),_:1},512)),[[j,e.loadingRef]])};export default L;