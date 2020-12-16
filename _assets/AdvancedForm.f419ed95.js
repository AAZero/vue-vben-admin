import{a as e,i as o,o as l,j as n,k as s,w as p}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import{s as t}from"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.03e0e622.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import{C as i}from"./index.8390a561.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import{u as a}from"./useForm.8e6b95f4.js";var r=e({components:{BasicForm:t,CollapseContainer:i},setup(){const[e]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const c={class:"m-4"};r.render=function(e,t,i,a,r,d){const m=o("BasicForm"),f=o("CollapseContainer");return l(),n("div",c,[s(f,{title:"基础收缩示例"},{default:p((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(f,{title:"超过3行自动收起",class:"mt-4"},{default:p((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default r;