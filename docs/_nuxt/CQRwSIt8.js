import y from"./BIFoEP89.js";import{_ as g}from"./cS0j_ik-.js";import{_ as x,K as k,L as b,i as w,M as C,A as o,S,U as l,o as r,c as n,a as i,O as t,F as O,l as U,t as _,D as f,R as m,B as v}from"./CWvnpu3D.js";import{u as $}from"./Dgu_NOG_.js";import"./DhKcbZJJ.js";import"./qsMMcMsd.js";const j={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},s=k(b.ui.strategy,b.ui.divider,j),A=w({components:{UIcon:y,UAvatar:g},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.border.size.horizontal).includes(e)||Object.keys(s.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:d}=$("divider",C(e,"ui"),s),u=o(()=>S(l(a.value.wrapper.base,a.value.wrapper[e.orientation]),e.class)),c=o(()=>l(a.value.container.base,a.value.container[e.orientation])),p=o(()=>l(a.value.border.base,a.value.border[e.orientation],a.value.border.size[e.orientation][e.size],a.value.border.type[e.type]));return{ui:a,attrs:d,wrapperClass:u,containerClass:c,borderClass:p}}});function B(e,a,d,u,c,p){const z=y,h=g;return r(),n("div",m({class:e.wrapperClass},e.attrs),[i("div",{class:t(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),n(O,{key:0},[i("div",{class:t(e.containerClass)},[U(e.$slots,"default",{},()=>[e.label?(r(),n("span",{key:0,class:t(e.ui.label)},_(e.label),3)):e.icon?(r(),f(z,{key:1,name:e.icon,class:t(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),f(h,m({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):v("",!0)])],2),i("div",{class:t(e.borderClass)},null,2)],64)):v("",!0)],16)}const V=x(A,[["render",B]]);export{V as default};
