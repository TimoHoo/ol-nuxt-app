import{u as C}from"./BX-j-myY.js";import{_ as w,K as q,L as p,i as B,M as b,J as V,A as y,S as $,U as j,o,c as s,a as u,v as O,a5 as I,R as N,O as a,l as R,d as A,t as v,B as d}from"./CWvnpu3D.js";import{u as M}from"./Dgu_NOG_.js";import{u as U}from"./CJDABd-u.js";const z={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-radio",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},c=q(p.ui.strategy,p.ui.radio,z),D=B({props:{id:{type:String,default:null},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>c.default.color,validator(e){return p.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:l}){const{ui:r,attrs:f}=M("radio",b(e,"ui"),c,b(e,"class")),g=e.id??C("$Yg8qUyZgim"),i=V("radio-group",null),{emitFormChange:n,color:t,name:k}=i??U(e,c),h=y({get(){return e.modelValue},set(m){l("update:modelValue",m),l("change",m),i||n()}}),S=y(()=>$(j(r.value.base,r.value.form,r.value.background,r.value.border,t.value&&r.value.ring.replaceAll("{color}",t.value),t.value&&r.value.color.replaceAll("{color}",t.value)),e.inputClass));return{inputId:g,ui:r,attrs:f,pick:h,name:k,inputClass:S}}}),F=["id","name","required","value","disabled"],G=["for"];function J(e,l,r,f,g,i){return o(),s("div",{class:a(e.ui.wrapper)},[u("div",{class:a(e.ui.container)},[O(u("input",N({id:e.inputId,"onUpdate:modelValue":l[0]||(l[0]=n=>e.pick=n),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:e.inputClass},e.attrs),null,16,F),[[I,e.pick]])],2),e.label||e.$slots.label?(o(),s("div",{key:0,class:a(e.ui.inner)},[u("label",{for:e.inputId,class:a(e.ui.label)},[R(e.$slots,"label",{},()=>[A(v(e.label),1)]),e.required?(o(),s("span",{key:0,class:a(e.ui.required)},"*",2)):d("",!0)],10,G),e.help?(o(),s("p",{key:0,class:a(e.ui.help)},v(e.help),3)):d("",!0)],2)):d("",!0)],2)}const P=w(D,[["render",J]]),Y=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{Y as R,P as _,z as r};
