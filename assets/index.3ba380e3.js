import{B as e,t}from"./data.de19f461.js";import{a}from"./index.72bfb6c6.js";import{_ as r}from"./index.6a59b07e.js";import{d as s,h as i,o,i as l,w as d,j as n}from"./index.89eaa474.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./RightOutlined.f6122b3f.js";/* empty css              */import"./useTimeout.2438cbf6.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./index.e2fe5134.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./isEqual.0bcea136.js";import"./toInteger.e5f6d519.js";import"./DownOutlined.1abeee16.js";import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";import"./vendor.3b1829c7.js";var p=s({components:{BasicTree:e,CollapseContainer:a,PageWrapper:r},setup:()=>({treeData:t})});const m={class:"flex"};p.render=function(e,t,a,r,s,p){const c=i("BasicTree"),f=i("CollapseContainer"),j=i("PageWrapper");return o(),l(j,{title:"Tree基础示例"},{default:d((()=>[n("div",m,[n(f,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:d((()=>[n(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),n(f,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:d((()=>[n(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),n(f,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:d((()=>[n(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])])),_:1})};export default p;