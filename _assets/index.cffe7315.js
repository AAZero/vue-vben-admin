import{b as r,ck as e,r as n,cG as s,f as a,c_ as o,co as t,t as i,ae as u,cH as c,F as l,ao as w,y as f}from"./index.247b4d5c.js";const d=r({});function p(){if(!e())throw new Error("Please put useDrawer function in the setup function!");const r=n(null),u=n(!1),c=n("");const l=()=>{const e=a(r);if(!e)throw new Error("instance is undefined!");return e};return[function(e,n){s((()=>{r.value=null,u.value=null,d[a(c)]=null})),a(u)&&o()&&e===a(r)||(c.value=n,r.value=e,u.value=!0)},{setDrawerProps:r=>{l().setDrawerProps(r)},openDrawer:(r=!0,e,n=!0)=>{if(l().setDrawerProps({visible:r}),!e)return;if(n)return d[a(c)]=null,void(d[a(c)]=e);t(i(d[a(c)]),e)||(d[a(c)]=e)}}]}const D=r=>{const o=n(null),t=e(),i=n("");if(!t)throw new Error("useDrawerInner instance is undefined!");const w=()=>{const r=a(o);if(!r)throw new Error("useDrawerInner instance is undefined!");return r};return u((()=>{const e=d[a(i)];e&&r&&c(r)&&l((()=>{r(e)}))})),[(r,e)=>{s((()=>{o.value=null})),i.value=e,o.value=r,t.emit("register",r,e)},{changeLoading:(r=!0)=>{w().setDrawerProps({loading:r})},changeOkLoading:(r=!0)=>{w().setDrawerProps({confirmLoading:r})},closeDrawer:()=>{w().setDrawerProps({visible:!1})},setDrawerProps:r=>{w().setDrawerProps(r)}}]},v=w((()=>import("./BasicDrawer.b94dd30c.js")));f(v);export{v as B,D as a,p as u};