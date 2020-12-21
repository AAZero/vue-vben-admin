let e=document.createElement("style");e.innerHTML=".collapse-container{background:#fff;border-radius:2px;transition:.3s ease-in-out}.collapse-container.no-shadow{box-shadow:none}.collapse-container__header{display:flex;height:32px;margin-bottom:10px;justify-content:space-between;align-items:center}.collapse-container__action{display:flex;align-items:center}",document.head.appendChild(e);import{a,i as t,o as s,j as n,k as o,w as i,ad as l,p as r,n as p,x as d,m as c,q as m,r as u,v as f,aI as x,aJ as b}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7125d4e8.js";import{S as y}from"./index.d8b4d01e.js";import{u as h}from"./useTimeout.08d45835.js";import{a as g,b as w}from"./index.04a7b444.js";import"./tsxHelper.907e86d2.js";import{C as _}from"./index.05de38bc.js";import"./domUtils.1dbfb09e.js";import j from"./LazyContainer.b97b561f.js";var k=a({inheritAttrs:!1,components:{BasicArrow:g,BasicTitle:w}});const v={class:"collapse-container__header"},$={class:"collapse-container__action"};function C(){const e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),e.eventType="message",window.dispatchEvent(e)}k.render=function(e,a,m,u,f,x){const b=t("BasicTitle"),y=t("BasicArrow");return s(),n("div",v,[o(b,{helpMessage:e.$attrs.helpMessage},{default:i((()=>[e.$attrs.title?(s(),n(l,{key:0},[r(p(e.$attrs.title),1)],64)):d(e.$slots,"title",{key:1})])),_:1},8,["helpMessage"]),o("div",$,[d(e.$slots,"action"),e.$attrs.canExpan?(s(),n(y,{key:0,top:"",expand:e.$attrs.show,onClick:a[1]||(a[1]=a=>e.$emit("expand"))},null,8,["expand"])):c("",!0)])])};var E=a({name:"CollapseContainer",components:{Skeleton:y,LazyContainer:j,CollapseHeader:k,CollapseTransition:_},props:{title:m.string.def(""),canExpan:m.bool.def(!0),helpMessage:{type:[Array,String],default:""},triggerWindowResize:m.bool,loading:m.bool,lazy:m.bool,lazyTime:m.number.def(0)},setup(e){const a=u(!0);return{show:a,handleExpand:function(){a.value=!a.value,e.triggerWindowResize&&h(C,200)}}}});const z={class:"collapse-container p-2"},T={key:1,class:"collapse-container__body"};E.render=function(e,a,l,r,p,c){const m=t("CollapseHeader"),u=t("Skeleton"),y=t("LazyContainer"),h=t("CollapseTransition");return s(),n("div",z,[o(m,f(e.$props,{show:e.show,onExpand:e.handleExpand}),{title:i((()=>[d(e.$slots,"title")])),_:1},16,["show","onExpand"]),o(h,{enable:e.canExpan},{default:i((()=>[e.loading?(s(),n(u,{key:0})):x((s(),n("div",T,[e.lazy?(s(),n(y,{key:0,timeout:e.lazyTime},{skeleton:i((()=>[d(e.$slots,"lazySkeleton")])),default:i((()=>[d(e.$slots,"default")])),_:3},8,["timeout"])):d(e.$slots,"default",{key:1})],512)),[[b,e.show]])])),_:1},8,["enable"])])};export default E;