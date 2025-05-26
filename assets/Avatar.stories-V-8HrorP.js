import{j}from"./jsx-runtime-D_zvdyIk.js";const A="_avatar_1cf24_1",I="_small_1cf24_27",k="_medium_1cf24_33",B="_large_1cf24_39",i={avatar:A,small:I,medium:k,large:B},T=({bgColor:w="#39349a",size:N,...e})=>{const $={"--bg-color":w,"--width":e.width,"--image-url":`url(${e.src})`,"--font-size":e.fontSize};return j.jsx("div",{style:$,className:`${i.avatar} ${i[N]} ${i.className}`,children:e.children})};T.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#39349a'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Components/Data display/Avatar",component:T,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"pv",bgColor:"#39349a",size:"small"}},r={args:{src:"/src/static/images/avatar/avatar-1.avif",size:"medium"}},s={args:{children:"pv",bgColor:"#39349a",size:"small"}},t={args:{children:"pv",bgColor:"#39349a",size:"medium"}},o={args:{children:"pv",bgColor:"#39349a",size:"large"}},n={args:{children:"pv",bgColor:"#39349a",width:"25px",fontSize:"14px"}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'pv',
    bgColor: '#39349a',
    size: 'small'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: '/src/static/images/avatar/avatar-1.avif',
    size: 'medium'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'pv',
    bgColor: '#39349a',
    size: 'small'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,z,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'pv',
    bgColor: '#39349a',
    size: 'medium'
  }
}`,...(_=(z=t.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var C,S,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'pv',
    bgColor: '#39349a',
    size: 'large'
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,x,q;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'pv',
    bgColor: '#39349a',
    width: '25px',
    fontSize: '14px'
  }
}`,...(q=(x=n.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const M=["Background","Image","Small","Medium","Large","CustomSize"];export{a as Background,n as CustomSize,r as Image,o as Large,t as Medium,s as Small,M as __namedExportsOrder,L as default};
