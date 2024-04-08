import be from"./BIFoEP89.js";import{_ as me}from"./cS0j_ik-.js";import{u as we}from"./BX-j-myY.js";import{i as J,r as B,A as d,G as Ae,j as ue,k as re,Y as ve,F as ge,H as Re,I as Ve,$ as E,J as Be,a7 as P,_ as Pe,K as ye,L as W,M as ie,a0 as Te,S as De,U as G,a4 as He,N as je,o as y,D as z,w as $,c as R,O as c,B as N,a2 as K,l as q,a as U,R as oe,b as X,t as Q,T as Ne,C as ze,a1 as qe,d as ce}from"./CWvnpu3D.js";import{Z as Ue,t as Fe,l as Ee,a as We,o as $e}from"./BL06BS03.js";import{d as Ge,e as Ke}from"./D1a7g7xN.js";import{u as F,o as L,E as Qe,A as ee,T as Je,I as se,N as pe,a as I,l as Ze}from"./D1fMqrGr.js";import{w as Ye}from"./DtTRIGNA.js";import{s as Xe}from"./kbyLnVhO.js";import{p as xe}from"./B67Vfamu.js";import{f as _e,c as w,u as ea}from"./KbvckWdS.js";import{f as aa,s as la}from"./BcxiJ6uw.js";import{t as ta,i as _,l as na}from"./QuuH8Hmt.js";import{w as ia,h as oa,O as ua}from"./BmJLC6q3.js";import{d as ra}from"./ZcX4t2is.js";import{s as sa,b as da,u as fe,g as va}from"./Dgu_NOG_.js";import{u as ca}from"./JVDYO2nv.js";import{u as pa}from"./CJDABd-u.js";import{a as fa}from"./Cd0ASaHY.js";import"./DhKcbZJJ.js";import"./qsMMcMsd.js";import"./jthpZqva.js";import"./CxIZtCgj.js";function ba(e,b){return e===b}var ma=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ma||{}),ga=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ga||{}),ya=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ya||{});function ha(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let he=Symbol("ListboxContext");function ae(e){let b=Be(he,null);if(b===null){let C=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(C,ae),C}return b}let Oa=J({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ba},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:b,attrs:C,emit:u}){let p=B(1),m=B(null),a=B(null),h=B(null),v=B([]),f=B(""),i=B(null),t=B(1);function o(l=n=>n){let n=i.value!==null?v.value[i.value]:null,r=ua(l(v.value.slice()),M=>L(M.dataRef.domRef)),s=n?r.indexOf(n):null;return s===-1&&(s=null),{options:r,activeOptionIndex:s}}let k=d(()=>e.multiple?1:0),[O,A]=Ge(d(()=>e.modelValue),l=>u("update:modelValue",l),d(()=>e.defaultValue)),H=d(()=>O.value===void 0?F(k.value,{1:[],0:void 0}):O.value),S={listboxState:p,value:H,mode:k,compare(l,n){if(typeof e.by=="string"){let r=e.by;return(l==null?void 0:l[r])===(n==null?void 0:n[r])}return e.by(l,n)},orientation:d(()=>e.horizontal?"horizontal":"vertical"),labelRef:m,buttonRef:a,optionsRef:h,disabled:d(()=>e.disabled),options:v,searchQuery:f,activeOptionIndex:i,activationTrigger:t,closeListbox(){e.disabled||p.value!==1&&(p.value=1,i.value=null)},openListbox(){e.disabled||p.value!==0&&(p.value=0)},goToOption(l,n,r){if(e.disabled||p.value===1)return;let s=o(),M=_e(l===w.Specific?{focus:w.Specific,id:n}:{focus:l},{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:j=>j.id,resolveDisabled:j=>j.dataRef.disabled});f.value="",i.value=M,t.value=r??1,v.value=s.options},search(l){if(e.disabled||p.value===1)return;let n=f.value!==""?0:1;f.value+=l.toLowerCase();let r=(i.value!==null?v.value.slice(i.value+n).concat(v.value.slice(0,i.value+n)):v.value).find(M=>M.dataRef.textValue.startsWith(f.value)&&!M.dataRef.disabled),s=r?v.value.indexOf(r):-1;s===-1||s===i.value||(i.value=s,t.value=1)},clearSearch(){e.disabled||p.value!==1&&f.value!==""&&(f.value="")},registerOption(l,n){let r=o(s=>[...s,{id:l,dataRef:n}]);v.value=r.options,i.value=r.activeOptionIndex},unregisterOption(l){let n=o(r=>{let s=r.findIndex(M=>M.id===l);return s!==-1&&r.splice(s,1),r});v.value=n.options,i.value=n.activeOptionIndex,t.value=1},theirOnChange(l){e.disabled||A(l)},select(l){e.disabled||A(F(k.value,{0:()=>l,1:()=>{let n=P(S.value.value).slice(),r=P(l),s=n.findIndex(M=>S.compare(r,P(M)));return s===-1?n.push(r):n.splice(s,1),n}}))}};Ye([a,h],(l,n)=>{var r;S.closeListbox(),ia(n,oa.Loose)||(l.preventDefault(),(r=L(a))==null||r.focus())},d(()=>p.value===0)),Ae(he,S),ta(d(()=>F(p.value,{0:_.Open,1:_.Closed})));let T=d(()=>{var l;return(l=L(a))==null?void 0:l.closest("form")});return ue(()=>{re([T],()=>{if(!T.value||e.defaultValue===void 0)return;function l(){S.theirOnChange(e.defaultValue)}return T.value.addEventListener("reset",l),()=>{var n;(n=T.value)==null||n.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:n,disabled:r,form:s,...M}=e,j={open:p.value===0,disabled:r,value:H.value};return ve(ge,[...l!=null&&H.value!=null?Ke({[l]:H.value}).map(([Z,le])=>ve(aa,Qe({features:la.Hidden,key:Z,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:Z,value:le}))):[],ee({ourProps:{},theirProps:{...C,...Je(M,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:j,slots:b,attrs:C,name:"Listbox"})])}}}),Sa=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:b,slots:C,expose:u}){var p;let m=(p=e.id)!=null?p:`headlessui-listbox-button-${se()}`,a=ae("ListboxButton");u({el:a.buttonRef,$el:a.buttonRef});function h(t){switch(t.key){case I.Space:case I.Enter:case I.ArrowDown:t.preventDefault(),a.openListbox(),E(()=>{var o;(o=L(a.optionsRef))==null||o.focus({preventScroll:!0}),a.value.value||a.goToOption(w.First)});break;case I.ArrowUp:t.preventDefault(),a.openListbox(),E(()=>{var o;(o=L(a.optionsRef))==null||o.focus({preventScroll:!0}),a.value.value||a.goToOption(w.Last)});break}}function v(t){switch(t.key){case I.Space:t.preventDefault();break}}function f(t){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),E(()=>{var o;return(o=L(a.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(t.preventDefault(),a.openListbox(),ha(()=>{var o;return(o=L(a.optionsRef))==null?void 0:o.focus({preventScroll:!0})})))}let i=Xe(d(()=>({as:e.as,type:b.type})),a.buttonRef);return()=>{var t,o;let k={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...O}=e,A={ref:a.buttonRef,id:m,type:i.value,"aria-haspopup":"listbox","aria-controls":(t=L(a.optionsRef))==null?void 0:t.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(o=L(a.labelRef))==null?void 0:o.id,m].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:h,onKeyup:v,onClick:f};return ee({ourProps:A,theirProps:O,slot:k,attrs:b,slots:C,name:"ListboxButton"})}}}),Ma=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:b,slots:C,expose:u}){var p;let m=(p=e.id)!=null?p:`headlessui-listbox-options-${se()}`,a=ae("ListboxOptions"),h=B(null);u({el:a.optionsRef,$el:a.optionsRef});function v(t){switch(h.value&&clearTimeout(h.value),t.key){case I.Space:if(a.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),a.search(t.key);case I.Enter:if(t.preventDefault(),t.stopPropagation(),a.activeOptionIndex.value!==null){let o=a.options.value[a.activeOptionIndex.value];a.select(o.dataRef.value)}a.mode.value===0&&(a.closeListbox(),E(()=>{var o;return(o=L(a.buttonRef))==null?void 0:o.focus({preventScroll:!0})}));break;case F(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return t.preventDefault(),t.stopPropagation(),a.goToOption(w.Next);case F(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return t.preventDefault(),t.stopPropagation(),a.goToOption(w.Previous);case I.Home:case I.PageUp:return t.preventDefault(),t.stopPropagation(),a.goToOption(w.First);case I.End:case I.PageDown:return t.preventDefault(),t.stopPropagation(),a.goToOption(w.Last);case I.Escape:t.preventDefault(),t.stopPropagation(),a.closeListbox(),E(()=>{var o;return(o=L(a.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case I.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(a.search(t.key),h.value=setTimeout(()=>a.clearSearch(),350));break}}let f=na(),i=d(()=>f!==null?(f.value&_.Open)===_.Open:a.listboxState.value===0);return()=>{var t,o;let k={open:a.listboxState.value===0},{...O}=e,A={"aria-activedescendant":a.activeOptionIndex.value===null||(t=a.options.value[a.activeOptionIndex.value])==null?void 0:t.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(o=L(a.buttonRef))==null?void 0:o.id,"aria-orientation":a.orientation.value,id:m,onKeydown:v,role:"listbox",tabIndex:0,ref:a.optionsRef};return ee({ourProps:A,theirProps:O,slot:k,attrs:b,slots:C,features:pe.RenderStrategy|pe.Static,visible:i.value,name:"ListboxOptions"})}}}),Ia=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:b,attrs:C,expose:u}){var p;let m=(p=e.id)!=null?p:`headlessui-listbox-option-${se()}`,a=ae("ListboxOption"),h=B(null);u({el:h,$el:h});let v=d(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===m:!1),f=d(()=>F(a.mode.value,{0:()=>a.compare(P(a.value.value),P(e.value)),1:()=>P(a.value.value).some(l=>a.compare(P(l),P(e.value)))})),i=d(()=>F(a.mode.value,{1:()=>{var l;let n=P(a.value.value);return((l=a.options.value.find(r=>n.some(s=>a.compare(P(s),P(r.dataRef.value)))))==null?void 0:l.id)===m},0:()=>f.value})),t=xe(h),o=d(()=>({disabled:e.disabled,value:e.value,get textValue(){return t()},domRef:h}));ue(()=>a.registerOption(m,o)),Re(()=>a.unregisterOption(m)),ue(()=>{re([a.listboxState,f],()=>{a.listboxState.value===0&&f.value&&F(a.mode.value,{1:()=>{i.value&&a.goToOption(w.Specific,m)},0:()=>{a.goToOption(w.Specific,m)}})},{immediate:!0})}),Ve(()=>{a.listboxState.value===0&&v.value&&a.activationTrigger.value!==0&&E(()=>{var l,n;return(n=(l=L(h))==null?void 0:l.scrollIntoView)==null?void 0:n.call(l,{block:"nearest"})})});function k(l){if(e.disabled)return l.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),E(()=>{var n;return(n=L(a.buttonRef))==null?void 0:n.focus({preventScroll:!0})}))}function O(){if(e.disabled)return a.goToOption(w.Nothing);a.goToOption(w.Specific,m)}let A=ea();function H(l){A.update(l)}function S(l){A.wasMoved(l)&&(e.disabled||v.value||a.goToOption(w.Specific,m,0))}function T(l){A.wasMoved(l)&&(e.disabled||v.value&&a.goToOption(w.Nothing))}return()=>{let{disabled:l}=e,n={active:v.value,selected:f.value,disabled:l},{value:r,disabled:s,...M}=e,j={id:m,ref:h,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":f.value,disabled:void 0,onClick:k,onFocus:O,onPointerenter:H,onMouseenter:H,onPointermove:S,onMousemove:S,onPointerleave:T,onMouseleave:T};return ee({ourProps:j,theirProps:M,slot:n,attrs:C,slots:b,name:"ListboxOption"})}}});const D=ye(W.ui.strategy,W.ui.select,sa),x=ye(W.ui.strategy,W.ui.selectMenu,da),Ca=J({components:{HCombobox:Ue,HComboboxButton:Fe,HComboboxOptions:Ee,HComboboxOption:We,HComboboxInput:$e,HListbox:Oa,HListboxButton:Sa,HListboxOptions:Ma,HListboxOption:Ia,UIcon:be,UAvatar:me},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>D.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>D.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>x.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},clearSearchOnClose:{type:Boolean,default:()=>x.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>x.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(D.size).includes(e)}},color:{type:String,default:()=>D.default.color,validator(e){return[...W.ui.colors,...Object.keys(D.color)].includes(e)}},variant:{type:String,default:()=>D.default.variant,validator(e){return[...Object.keys(D.variant),...Object.values(D.color).flatMap(b=>Object.keys(b))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:b,slots:C}){const{ui:u,attrs:p}=fe("select",ie(e,"ui"),D,ie(e,"class")),{ui:m}=fe("selectMenu",ie(e,"uiMenu"),x),a=d(()=>Te({},e.popper,m.value.popper)),[h,v]=ca(a.value),{size:f,rounded:i}=fa({ui:u,props:e}),{emitFormBlur:t,emitFormChange:o,inputId:k,color:O,size:A,name:H}=pa(e,D),S=d(()=>f.value||A.value),T=B(""),l=d({get(){return e.query??T.value},set(g){T.value=g,b("update:query",g)}}),n=d(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue)if(e.valueAttribute){const g=e.options.find(V=>V[e.valueAttribute]===e.modelValue);return g?g[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),r=d(()=>{var V,Y;const g=((Y=(V=u.value.color)==null?void 0:V[O.value])==null?void 0:Y[e.variant])||u.value.variant[e.variant];return De(G(u.value.base,m.value.select,i.value,u.value.size[S.value],u.value.gap[S.value],e.padded?u.value.padding[S.value]:"p-0",g==null?void 0:g.replaceAll("{color}",O.value),(s.value||C.leading)&&u.value.leading.padding[S.value],(M.value||C.trailing)&&u.value.trailing.padding[S.value]),e.placeholder&&!e.modelValue&&u.value.placeholder,e.selectClass)}),s=d(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),M=d(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),j=d(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Z=d(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),le=d(()=>G(u.value.icon.leading.wrapper,u.value.icon.leading.pointer,u.value.icon.leading.padding[S.value])),Oe=d(()=>G(u.value.icon.base,O.value&&W.ui.colors.includes(O.value)&&u.value.icon.color.replaceAll("{color}",O.value),u.value.icon.size[S.value],e.loading&&u.value.icon.loading)),Se=d(()=>G(u.value.icon.trailing.wrapper,u.value.icon.trailing.pointer,u.value.icon.trailing.padding[S.value])),Me=d(()=>G(u.value.icon.base,O.value&&W.ui.colors.includes(O.value)&&u.value.icon.color.replaceAll("{color}",O.value),u.value.icon.size[S.value],e.loading&&!s.value&&u.value.icon.loading)),de=typeof e.searchable=="function"?He(e.searchable,e.debounce):void 0,te=ra(async()=>e.searchable&&de?await de(l.value):l.value===""?e.options:e.options.filter(g=>{var V;return((V=e.searchAttributes)!=null&&V.length?e.searchAttributes:[e.optionAttribute]).some(Y=>{if(["string","number"].includes(typeof g))return String(g).search(new RegExp(l.value,"i"))!==-1;const ne=va(g,Y);return ne!=null&&String(ne).search(new RegExp(l.value,"i"))!==-1})})),Ie=d(()=>l.value===""||e.showCreateOptionWhen==="empty"&&te.value.length||e.showCreateOptionWhen==="always"&&te.value.find(V=>["string","number"].includes(typeof V)?V===l.value:V[e.optionAttribute]===l.value)?null:["string","number"].includes(typeof e.modelValue)?l.value:{[e.optionAttribute]:l.value});function Ce(){e.clearSearchOnClose&&(l.value="")}re(v,g=>{g?b("open"):(Ce(),b("close"),t())});function ke(g){b("update:modelValue",g),b("change",g),o()}function Le(g){l.value=g.target.value}return Ze(()=>we("$NLWO4AIsUM")),{ui:u,uiMenu:m,attrs:p,name:H,inputId:k,popper:a,trigger:h,container:v,label:n,isLeading:s,isTrailing:M,selectClass:r,leadingIconName:j,leadingIconClass:Oe,leadingWrapperIconClass:le,trailingIconName:Z,trailingIconClass:Me,trailingWrapperIconClass:Se,filteredOptions:te,createOption:Ie,query:l,onUpdate:ke,onChange:Le}}}),ka=["value","required"],La=["id","disabled"],wa={class:"truncate"};function Aa(e,b,C,u,p,m){const a=be,h=je("HComboboxInput"),v=me;return y(),z(K(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:c(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:$(({open:f})=>[e.required?(y(),R("input",{key:0,value:e.modelValue,required:e.required,class:c(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,ka)):N("",!0),(y(),z(K(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:c(e.uiMenu.trigger)},{default:$(()=>[q(e.$slots,"default",{open:f,disabled:e.disabled,loading:e.loading},()=>[U("button",oe({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),R("span",{key:0,class:c(e.leadingWrapperIconClass)},[q(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[X(a,{name:e.leadingIconName,class:c(e.leadingIconClass)},null,8,["name","class"])])],2)):N("",!0),q(e.$slots,"label",{},()=>[e.label?(y(),R("span",{key:0,class:c(e.uiMenu.label)},Q(e.label),3)):(y(),R("span",{key:1,class:c(e.uiMenu.label)},Q(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),R("span",{key:1,class:c(e.trailingWrapperIconClass)},[q(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[X(a,{name:e.trailingIconName,class:c(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):N("",!0)],16,La)])]),_:2},1032,["class"])),f?(y(),R("div",{key:1,ref:"container",class:c([e.uiMenu.container,e.uiMenu.width])},[X(Ne,oe({appear:""},e.uiMenu.transition),{default:$(()=>[U("div",null,[e.popper.arrow?(y(),R("div",{key:0,"data-popper-arrow":"",class:c(Object.values(e.uiMenu.arrow))},null,2)):N("",!0),(y(),z(K(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:c([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:$(()=>[e.searchable?(y(),z(h,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:c(e.uiMenu.input),onChange:e.onChange},null,8,["display-value","placeholder","class","onChange"])):N("",!0),(y(!0),R(ge,null,ze(e.filteredOptions,(i,t)=>(y(),z(K(e.searchable?"HComboboxOption":"HListboxOption"),{key:t,as:"template",value:e.valueAttribute?i[e.valueAttribute]:i,disabled:i.disabled},{default:$(({active:o,selected:k,disabled:O})=>[U("li",{class:c([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,o?e.uiMenu.option.active:e.uiMenu.option.inactive,k&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[U("div",{class:c(e.uiMenu.option.container)},[q(e.$slots,"option",{option:i,active:o,selected:k},()=>[i.icon?(y(),z(a,{key:0,name:i.icon,class:c([e.uiMenu.option.icon.base,o?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,i.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):i.avatar?(y(),z(v,oe({key:1},{size:e.uiMenu.option.avatar.size,...i.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):i.chip?(y(),R("span",{key:2,class:c(e.uiMenu.option.chip.base),style:qe({background:`#${i.chip}`})},null,6)):N("",!0),U("span",wa,Q(["string","number"].includes(typeof i)?i:i[e.optionAttribute]),1)])],2),k?(y(),R("span",{key:0,class:c([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[X(a,{name:e.selectedIcon,class:c(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):N("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(y(),z(K(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:$(({active:i,selected:t})=>[U("li",{class:c([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,i?e.uiMenu.option.active:e.uiMenu.option.inactive])},[U("div",{class:c(e.uiMenu.option.container)},[q(e.$slots,"option-create",{option:e.createOption,active:i,selected:t},()=>[U("span",{class:c(e.uiMenu.option.create)},'Create "'+Q(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!e.filteredOptions.length?(y(),R("p",{key:2,class:c(e.uiMenu.option.empty)},[q(e.$slots,"option-empty",{query:e.query},()=>[ce(' No results for "'+Q(e.query)+'". ',1)])],2)):e.filteredOptions.length?N("",!0):(y(),R("p",{key:3,class:c(e.uiMenu.empty)},[q(e.$slots,"empty",{query:e.query},()=>[ce(" No options. ")])],2))]),_:3},8,["class"]))])]),_:3},16)],2)):N("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const xa=Pe(Ca,[["render",Aa]]);export{xa as default};
