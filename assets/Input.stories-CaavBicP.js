import{j as a}from"./jsx-runtime-D_zvdyIk.js";const E="_input_1tfhs_1",z="_solid_1tfhs_24",R="_outlined_1tfhs_28",A="_filled_1tfhs_34",G="_label_1tfhs_40",H="_block_1tfhs_47",J="_inline_1tfhs_53",l={input:E,solid:z,outlined:R,filled:A,label:G,block:H,inline:J},V=({type:D="text",bgColor:I="#f9f9f9",borderColor:d="#4a4a4a",radius:N="0.3rem",padding:j="3px 10px",variant:C="solid",focusColor:F="#373b3e",focusBorderColor:$="#090909",className:K,display:L="inline",...e})=>{const B={"--label-color":d},O={"--bg-color":I,"--border-color":d,"--radius":N,"--padding":j,"--focus-color":F,"--focus-border-color":$,"--width":e.width,"--display":L};return a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:e.id,className:`${l.label} ${l[e.labelDisplay]}`,style:B,children:e.label}),a.jsx("input",{type:D,className:`${l.input} ${l[C]} ${l.className}`,...e,style:O})]})};V.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelDisplay:{required:!1,tsType:{name:"union",raw:"'inline' | 'block'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'block'"}]},description:""},display:{required:!1,tsType:{name:"union",raw:"'inline' | 'block' | 'inline-block'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'block'"},{name:"literal",value:"'inline-block'"}]},description:"",defaultValue:{value:"'inline'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},autoComplete:{required:!1,tsType:{name:"string"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#f9f9f9'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#4a4a4a'",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'3px 10px'",computed:!1}},radius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0.3rem'",computed:!1}},fontSize:{required:!1,tsType:{name:"string"},description:""},focusColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#373b3e'",computed:!1}},focusBorderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#090909'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Components/Inputs/Input",component:V,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{id:"basic",placeholder:"Placeholder",variant:"solid"}},s={args:{id:"outlined",placeholder:"Placeholder",variant:"outlined"}},i={args:{id:"filled",placeholder:"Placeholder",variant:"filled"}},n={args:{id:"label-inline",label:"label:",labelDisplay:"inline",placeholder:"Placeholder",variant:"solid"}},t={args:{id:"label-block",label:"label:",labelDisplay:"block",placeholder:"Placeholder",variant:"solid"}},o={args:{id:"disabled",placeholder:"Placeholder",disabled:!0,variant:"outlined"}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'basic',
    placeholder: 'Placeholder',
    variant: 'solid'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'outlined',
    placeholder: 'Placeholder',
    variant: 'outlined'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'filled',
    placeholder: 'Placeholder',
    variant: 'filled'
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,_,q;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'label-inline',
    label: 'label:',
    labelDisplay: 'inline',
    placeholder: 'Placeholder',
    variant: 'solid'
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var T,k,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'label-block',
    label: 'label:',
    labelDisplay: 'block',
    placeholder: 'Placeholder',
    variant: 'solid'
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var P,S,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'outlined'
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const U=["Solid","Outlined","Filled","LabelInline","LabelBlock","Disabled"];export{o as Disabled,i as Filled,t as LabelBlock,n as LabelInline,s as Outlined,r as Solid,U as __namedExportsOrder,Q as default};
