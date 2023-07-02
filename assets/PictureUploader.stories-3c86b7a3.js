import{w as P,l as oe,o as le,p as ue,m as de,x as ce,b as me,H as pe,t as he,y as fe,s as ge,j as n,z as O,C as ye,q as N,F as Se,D as ve,T as x,S as T,r as v,E as be,G as Ne,J as Ie}from"./Text-be6fc2a0.js";import{r as y,R as u}from"./index-cb9ba028.js";import{u as B,I as k,D as Ee,P as xe}from"./useTheme-3e60b62f.js";import{_ as ae,g as De,a as re,m as ie,F as Ue}from"./index-3e703dcc.js";import{v as _e}from"./v4-a960c1f4.js";import"./_commonjsHelpers-725317a4.js";var we=function(e){ae(a,e);function a(t){var i=e.call(this,t)||this;return i.state={isRendered:De()===void 0},i}return a.prototype.componentDidMount=function(){var t=this,i=this.props.delay;this._timeoutId=window.setTimeout(function(){t.setState({isRendered:!0})},i)},a.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},a.prototype.render=function(){return this.state.isRendered?y.Children.only(this.props.children):null},a.defaultProps={delay:0},a}(y.Component);function Te(e){var a=y.useState(e),t=a[0],i=a[1],d=P(function(){return function(){i(!0)}}),s=P(function(){return function(){i(!1)}}),l=P(function(){return function(){i(function(c){return!c})}});return[t,{setTrue:d,setFalse:s,toggle:l}]}var S;(function(e){e[e.xSmall=0]="xSmall",e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large"})(S||(S={}));var F;(function(e){e[e.normal=0]="normal",e[e.large=1]="large"})(F||(F={}));var Ce=ue(),Pe=function(e){ae(a,e);function a(){return e!==null&&e.apply(this,arguments)||this}return a.prototype.render=function(){var t=this.props,i=t.type,d=t.size,s=t.ariaLabel,l=t.ariaLive,c=t.styles,m=t.label,o=t.theme,p=t.className,h=t.labelPosition,f=s,C=oe(this.props,le,["size"]),r=d;r===void 0&&i!==void 0&&(r=i===F.large?S.large:S.medium);var E=Ce(c,{theme:o,size:r,className:p,labelPosition:h});return y.createElement("div",re({},C,{className:E.root}),y.createElement("div",{className:E.circle}),m&&y.createElement("div",{className:E.label},m),f&&y.createElement("div",{role:"status","aria-live":l},y.createElement(we,null,y.createElement("div",{className:E.screenReaderText},f))))},a.defaultProps={size:S.medium,ariaLive:"polite",labelPosition:"bottom"},a}(y.Component),Fe={root:"ms-Spinner",circle:"ms-Spinner-circle",label:"ms-Spinner-label"},qe=de(function(){return ce({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}})}),Le=function(e){var a,t=e.theme,i=e.size,d=e.className,s=e.labelPosition,l=t.palette,c=me(Fe,t);return{root:[c.root,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},s==="top"&&{flexDirection:"column-reverse"},s==="right"&&{flexDirection:"row"},s==="left"&&{flexDirection:"row-reverse"},d],circle:[c.circle,{boxSizing:"border-box",borderRadius:"50%",border:"1.5px solid "+l.themeLight,borderTopColor:l.themePrimary,animationName:qe(),animationDuration:"1.3s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.53,.21,.29,.67)",selectors:(a={},a[pe]=re({borderTopColor:"Highlight"},he()),a)},i===S.xSmall&&["ms-Spinner--xSmall",{width:12,height:12}],i===S.small&&["ms-Spinner--small",{width:16,height:16}],i===S.medium&&["ms-Spinner--medium",{width:20,height:20}],i===S.large&&["ms-Spinner--large",{width:28,height:28}]],label:[c.label,t.fonts.small,{color:l.themePrimary,margin:"8px 0 0",textAlign:"center"},s==="top"&&{margin:"0 0 8px"},s==="right"&&{margin:"0 0 0 8px"},s==="left"&&{margin:"0 8px 0 0"}],screenReaderText:fe}},Ae=ge(Pe,Le,void 0,{scope:"Spinner"}),g=(e=>(e.SELECTED="selected",e.UPLOADING="uploading",e.UPLOADED="uploaded",e.ERROR="error",e))(g||{});const ne=e=>{const a=[];for(let t=0;t<e.length;t++){const i=e.item(t);i&&i!=null&&a.push(i)}return a},Be=ie({height:50,width:50}),q=e=>{const a=B(),t=u.useRef(null),[i,d]=u.useState(!1),s=u.useMemo(()=>e.width?e.width:100,[e.width]),l=u.useMemo(()=>e.height?e.height:100,[e.height]),c=u.useMemo(()=>e.iconName?e.iconName:"CloudUpload",[e.iconName]),m=u.useMemo(()=>i?a.semanticColors.primaryButtonBackground:a.semanticColors.buttonBorder,[i]),o=u.useMemo(()=>({borderColor:m,borderStyle:"dashed",borderWidth:"2px",borderRadius:"15px",width:s+"px",height:l+"px",display:"flex",alignItems:"center",justifyContent:"center"}),[s,l,m]),p=u.useCallback(r=>{r.preventDefault(),r.stopPropagation(),r.dataTransfer.items&&r.dataTransfer.items.length>0&&d(!0)},[]),h=u.useCallback(r=>{r.preventDefault(),r.stopPropagation(),d(!1)},[]),f=u.useCallback(r=>{r.preventDefault(),r.stopPropagation(),i||d(!0)},[i]),C=u.useCallback(r=>{if(r.preventDefault(),r.stopPropagation(),d(!1),r.dataTransfer.files&&r.dataTransfer.files.length>0){const E=ne(r.dataTransfer.files);e.onDropFiles(E),r.dataTransfer.clearData()}},[e.onDropFiles]);return u.useEffect(()=>{const r=t==null?void 0:t.current;return r&&(r.addEventListener("dragenter",p),r.addEventListener("dragleave",h),r.addEventListener("dragover",f),r.addEventListener("drop",C)),()=>{r==null||r.removeEventListener("dragenter",p),r==null||r.removeEventListener("dragleave",h),r==null||r.removeEventListener("dragover",f),r==null||r.removeEventListener("drop",C)}},[]),n("div",{style:o,ref:t,children:e.noIcon?null:n(k,{iconProps:{iconName:c},styles:{icon:{fontSize:30}},className:Be,onClick:e.onClick})})};try{q.displayName="DropZone",q.__docgenInfo={description:"",displayName:"DropZone",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},onDropFiles:{defaultValue:null,description:"",name:"onDropFiles",required:!0,type:{name:"(files: File[]) => void"}},noIcon:{defaultValue:null,description:"",name:"noIcon",required:!1,type:{name:"boolean"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const L=e=>{const[a,{toggle:t}]=Te(!1),i=O("callout-button"),d=O("callout-label"),s=u.useMemo(()=>e.size?e.size:12,[e.size]),l=u.useMemo(()=>e.iconName?e.iconName:"StatusErrorFull",[e.iconName]),c=B(),m=ye({callout:{width:320,padding:"20px 24px",background:c.semanticColors.bodyBackground},title:{marginBottom:12,fontWeight:Ue.semilight},actions:{marginTop:20},icon:{width:s,heigth:s}});return N(Se,{children:[n(k,{id:i,onClick:t,onMouseOver:t,iconProps:{iconName:l},styles:{icon:{fontSize:s}},className:m.icon}),a&&N(ve,{coverTarget:!0,ariaLabelledBy:d,role:"dialog",className:m.callout,onDismiss:t,target:`#${i}`,isBeakVisible:!1,setInitialFocus:!0,children:[n(x,{block:!0,variant:"xLarge",className:m.title,id:d,children:e.errorTitle}),n(x,{block:!0,variant:"medium",children:e.errorText}),n("div",{className:m.actions,children:n(Ee,{onClick:t,text:"Click to dismiss"})})]})]})};try{L.displayName="ErrorIndicator",L.__docgenInfo={description:"",displayName:"ErrorIndicator",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"string"}},errorTitle:{defaultValue:null,description:"",name:"errorTitle",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!0,type:{name:"string"}}}}}catch{}const z=ie({height:10,width:10}),A=e=>{const a=B(),t=u.useMemo(()=>e.width?e.width:100,[e.width]),i=u.useMemo(()=>e.height?e.width:100,[e.height]),[d,s]=u.useState();return u.useEffect(()=>{const l=new FileReader;l.onloadend=()=>s(l.result),l.readAsDataURL(e.picture.file)},[e.picture.file]),N(T,{children:[n(v,{style:{height:i+"px"},children:d?n(be,{width:t,height:i,src:d,imageFit:Ne.centerContain,styles:{root:{border:"1px solid "+a.palette.neutralSecondary,borderRadius:"5px"}}}):null}),n(v,{style:{width:t+"px"},children:N(T,{horizontalAlign:"space-between",horizontal:!0,verticalAlign:"center",children:[n(v,{style:{maxWidth:t-10+"px"},children:n(x,{variant:"xSmall",nowrap:!0,block:!0,children:e.picture.file.name})}),N(v,{align:"end",children:[e.picture.status==g.SELECTED?n(k,{iconProps:{iconName:"Trash"},styles:{icon:{fontSize:10}},className:z,onClick:()=>e.onRemove(e.picture.id)}):null,e.picture.status==g.UPLOADED?n(Ie,{iconName:"CheckMark",style:{fontSize:10},className:z}):null,e.picture.status==g.UPLOADING?n(Ae,{size:S.xSmall}):null,e.picture.status==g.ERROR?n(L,{errorText:e.picture.errorInformation+"",errorTitle:"Error during upload!",size:10}):null]})]})})]})};try{A.displayName="Thumbnail",A.__docgenInfo={description:"",displayName:"Thumbnail",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},picture:{defaultValue:null,description:"",name:"picture",required:!0,type:{name:"IPictureUpload"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const R=e=>({id:_e(),file:e,status:g.SELECTED}),I=e=>{const[a,t]=u.useState([]),[i,d]=u.useState([]),s=u.useRef(null),l=u.useMemo(()=>a.filter(o=>o.status==g.SELECTED).length==0,[a]);u.useEffect(()=>{const o=i.filter(p=>!a.find(h=>h.id==p.id));t([...a,...o])},[i]),u.useEffect(()=>{const o=[...a];e.uploadStatus&&e.uploadStatus.forEach(p=>{const h=o.find(f=>f.id==p.id);h&&(h.status=p.status,h.errorInformation=p.errorInformation)}),t(o)},[e.uploadStatus]);const c=o=>{o.preventDefault();const p=ne(o.target.files);d(p.map(R)),s!=null&&s.current&&(s.current.value="")},m=o=>{const p=[],h=o.filter(f=>f.status==g.SELECTED);o.forEach(f=>{f.status==g.SELECTED&&(f.status=g.UPLOADING),p.push(f)}),e.onUploadStart(h),t(p)};return N(T,{children:[e.title?n(v,{children:n(x,{variant:"large",children:e.title})}):null,e.title&&e.instructions?n(v,{children:n("hr",{})}):null,e.instructions?n(v,{children:n(x,{variant:"medium",children:e.instructions})}):null,N(v,{align:"center",style:{marginTop:"20px"},children:[n("input",{onChange:c,multiple:!1,ref:s,type:"file",hidden:!0}),n(q,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.click()},onDropFiles:o=>d(o.map(R))})]}),N(x,{children:["Files selected: ",a.length]}),n(T,{horizontal:!0,wrap:!0,tokens:{childrenGap:"5px"},children:a.map(o=>n(A,{picture:o,onRemove:p=>t(a.filter(h=>h.id!=p))},o.id))}),n(v,{children:n(T,{horizontal:!0,horizontalAlign:"end",children:n(xe,{disabled:l,text:"Upload",onClick:()=>m(a)})})})]})};try{I.displayName="PictureUploader",I.__docgenInfo={description:"",displayName:"PictureUploader",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},instructions:{defaultValue:null,description:"",name:"instructions",required:!1,type:{name:"string"}},fileTypes:{defaultValue:null,description:"",name:"fileTypes",required:!1,type:{name:"string[]"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"string"}},uploadStatus:{defaultValue:null,description:"",name:"uploadStatus",required:!0,type:{name:"IPictureUploadAnswer[]"}},onUploadStart:{defaultValue:null,description:"",name:"onUploadStart",required:!0,type:{name:"(picturesToUpload: IPictureUpload[]) => void"}}}}}catch{}const{useArgs:se}=__STORYBOOK_MODULE_CLIENT_API__,Ge={component:I,title:"Basic/PictureUploader",argTypes:{}},b=e=>{const[a,t]=se();return n(I,{"data-testId":"InputField-id",...e,onUploadStart:d=>{d.forEach(s=>{const l={...s};setTimeout(()=>{var m,o;l.status=g.UPLOADED;const c=(m=b.args)!=null&&m.uploadStatus?[...(o=b.args)==null?void 0:o.uploadStatus]:[];c.push(l),t({...e,uploadStatus:c})},3e3)})}})};b.args={title:"Do the Upload",instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",uploadStatus:[]};const D=e=>n(I,{"data-testId":"InputField-id",...e});D.args={instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};const U=e=>n(I,{"data-testId":"InputField-id",...e});U.args={title:"Do the Upload"};const _=e=>n(I,{"data-testId":"InputField-id",...e});_.args={};const w=e=>{const[a,t]=se();return n(I,{"data-testId":"InputField-id",...e,onUploadStart:d=>{d.forEach(s=>{const l={...s};setTimeout(()=>{var m,o;l.status=g.ERROR,l.errorInformation="Server was not ready. Service failed!";const c=(m=b.args)!=null&&m.uploadStatus?[...(o=b.args)==null?void 0:o.uploadStatus]:[];c.push(l),t({...e,uploadStatus:c})},3e3)})}})};w.args={title:"Do the Upload",instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",uploadStatus:[]};var V,M,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`(args: any) => {
  const [_, updateArgs] = useArgs();
  const handleOnUploadStart = (files: IPictureUpload[]) => {
    files.forEach(f => {
      const fNew = {
        ...f
      };
      setTimeout(() => {
        fNew.status = PictureUploadStatus.UPLOADED;
        const newUploadStatus = Basic.args?.uploadStatus ? [...Basic.args?.uploadStatus] : [];
        newUploadStatus.push(fNew);
        updateArgs({
          ...args,
          uploadStatus: newUploadStatus
        });
      }, 3000);
    });
  };
  return <PictureUploader data-testId="InputField-id" {...args} onUploadStart={handleOnUploadStart} />;
}`,...(G=(M=b.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var j,W,H;D.parameters={...D.parameters,docs:{...(j=D.parameters)==null?void 0:j.docs,source:{originalSource:'(args: any) => <PictureUploader data-testId="InputField-id" {...args} />',...(H=(W=D.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var $,J,K;U.parameters={...U.parameters,docs:{...($=U.parameters)==null?void 0:$.docs,source:{originalSource:'(args: any) => <PictureUploader data-testId="InputField-id" {...args} />',...(K=(J=U.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Q,X;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:'(args: any) => <PictureUploader data-testId="InputField-id" {...args} />',...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`(args: any) => {
  const [_, updateArgs] = useArgs();
  const handleOnUploadStart = (files: IPictureUpload[]) => {
    files.forEach(f => {
      const fNew = {
        ...f
      };
      setTimeout(() => {
        fNew.status = PictureUploadStatus.ERROR;
        fNew.errorInformation = "Server was not ready. Service failed!";
        const newUploadStatus = Basic.args?.uploadStatus ? [...Basic.args?.uploadStatus] : [];
        newUploadStatus.push(fNew);
        updateArgs({
          ...args,
          uploadStatus: newUploadStatus
        });
      }, 3000);
    });
  };
  return <PictureUploader data-testId="InputField-id" {...args} onUploadStart={handleOnUploadStart} />;
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const je=["Basic","BasicNoTitle","BasicNoInstructions","BasicNoTitleAndInstructions","BasicGeneratesError"];export{b as Basic,w as BasicGeneratesError,U as BasicNoInstructions,D as BasicNoTitle,_ as BasicNoTitleAndInstructions,je as __namedExportsOrder,Ge as default};
//# sourceMappingURL=PictureUploader.stories-3c86b7a3.js.map