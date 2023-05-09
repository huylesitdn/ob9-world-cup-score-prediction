"use strict";(self.webpackChunkworld_cup_score_prediction=self.webpackChunkworld_cup_score_prediction||[]).push([[8056],{8421:(Ve,C,s)=>{s.r(C),s.d(C,{default:()=>Ie});var n=s(67294),r=s(68547),L=s(87751),h=s(97132),b=s(23724),A=s(49656),Y=s(36232),J=s.n(Y),S=s(78862),K=s(62031),X=s(19408),q=s(80768),I=s.n(q),M=s(23998);const _=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var ee=s(45697),o=s.n(ee),T=s(49425),y=s(41798),te=s(67826),ne=s(18568),ae=s.n(ne),se=s(30741),oe=s(5493),re=Object.defineProperty,R=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,B=(a,e,t)=>e in a?re(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,ce=(a,e)=>{for(var t in e||(e={}))le.call(e,t)&&B(a,t,e[t]);if(R)for(var t of R(e))ie.call(e,t)&&B(a,t,e[t]);return a};const N=({tokenName:a,onClickDelete:e})=>{const{formatMessage:t}=(0,h.useIntl)(),{trackUsage:u}=(0,r.useTracking)();return n.createElement(oe.Box,ce({paddingLeft:1},r.stopPropagation),n.createElement(se.IconButton,{onClick:()=>{u("willDeleteToken"),e()},label:t({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),name:"delete",noBorder:!0,icon:n.createElement(ae(),null)}))};N.propTypes={tokenName:o().string.isRequired,onClickDelete:o().func.isRequired};const de=N;var ue=s(19352),me=s.n(ue),pe=s(16384);const fe={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},ye=(0,pe.default)(r.Link)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,D=({tokenName:a,tokenId:e,buttonType:t,children:u})=>{const{formatMessage:m}=(0,h.useIntl)(),{location:{pathname:p}}=(0,A.useHistory)();return n.createElement(ye,{to:`${p}/${e}`,title:m(fe[t],{target:a})},u)};D.propTypes={tokenName:o().string.isRequired,tokenId:o().oneOfType([o().string,o().number]).isRequired,buttonType:o().string,children:o().node.isRequired},D.defaultProps={buttonType:"edit"};const V=D,U=({tokenName:a,tokenId:e})=>n.createElement(V,{tokenName:a,tokenId:e},n.createElement(me(),null));U.propTypes={tokenName:o().string.isRequired,tokenId:o().oneOfType([o().string,o().number]).isRequired};const ge=U;var ve=s(28649),Te=s.n(ve);const j=({tokenName:a,tokenId:e})=>n.createElement(V,{tokenName:a,tokenId:e,buttonType:"read"},n.createElement(Te(),null));j.propTypes={tokenName:o().string.isRequired,tokenId:o().oneOfType([o().string,o().number]).isRequired};const Ee=j;var Pe=Object.defineProperty,x=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,$=(a,e,t)=>e in a?Pe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Ae=(a,e)=>{for(var t in e||(e={}))he.call(e,t)&&$(a,t,e[t]);if(x)for(var t of x(e))be.call(e,t)&&$(a,t,e[t]);return a};const k=({canDelete:a,canUpdate:e,canRead:t,onClickDelete:u,withBulkActions:m,rows:p})=>{const[{query:d}]=(0,r.useQueryParams)(),[,f]=d.sort.split(":"),{push:i,location:{pathname:g}}=(0,A.useHistory)(),{trackUsage:E}=(0,r.useTracking)(),O=p.sort((l,v)=>{const P=l.name.localeCompare(v.name);return f==="DESC"?-P:P});return n.createElement(y.Tbody,null,O.map(l=>n.createElement(y.Tr,Ae({key:l.id},(0,r.onRowClick)({fn(){E("willEditTokenFromList"),i(`${g}/${l.id}`)},condition:e})),n.createElement(y.Td,null,n.createElement(T.Typography,{textColor:"neutral800",fontWeight:"bold"},l.name)),n.createElement(y.Td,{maxWidth:(0,r.pxToRem)(250)},n.createElement(T.Typography,{textColor:"neutral800",ellipsis:!0},l.description)),n.createElement(y.Td,null,n.createElement(T.Typography,{textColor:"neutral800"},n.createElement(r.RelativeTime,{timestamp:new Date(l.createdAt)}))),n.createElement(y.Td,null,l.lastUsedAt&&n.createElement(T.Typography,{textColor:"neutral800"},n.createElement(r.RelativeTime,{timestamp:new Date(l.lastUsedAt)}))),m&&n.createElement(y.Td,null,n.createElement(te.Flex,{justifyContent:"end"},e&&n.createElement(ge,{tokenName:l.name,tokenId:l.id}),!e&&t&&n.createElement(Ee,{tokenName:l.name,tokenId:l.id}),a&&n.createElement(de,{tokenName:l.name,onClickDelete:()=>u(l.id)}))))))};k.defaultProps={canDelete:!1,canUpdate:!1,canRead:!1,onClickDelete(){},rows:[],withBulkActions:!1},k.propTypes={canDelete:o().bool,canUpdate:o().bool,canRead:o().bool,onClickDelete:o().func,rows:o().array,withBulkActions:o().bool};const De=k;var ke=Object.defineProperty,we=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,H=(a,e,t)=>e in a?ke(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Q=(a,e)=>{for(var t in e||(e={}))Ce.call(e,t)&&H(a,t,e[t]);if(F)for(var t of F(e))Le.call(e,t)&&H(a,t,e[t]);return a},W=(a,e)=>we(a,Oe(e)),w=(a,e,t)=>new Promise((u,m)=>{var p=i=>{try{f(t.next(i))}catch(g){m(g)}},d=i=>{try{f(t.throw(i))}catch(g){m(g)}},f=i=>i.done?u(i.value):Promise.resolve(i.value).then(p,d);f((t=t.apply(a,e)).next())});const Se=()=>{(0,r.useFocusWhenNavigate)();const a=(0,b.useQueryClient)(),{formatMessage:e}=(0,h.useIntl)(),t=(0,r.useNotification)(),{allowedActions:{canCreate:u,canDelete:m,canUpdate:p,canRead:d}}=(0,r.useRBAC)(L.Z.settings["api-tokens"]),{push:f}=(0,A.useHistory)(),{trackUsage:i}=(0,r.useTracking)(),{startSection:g}=(0,r.useGuidedTour)(),E=(0,n.useRef)(g);(0,n.useEffect)(()=>{E.current&&E.current("apiTokens")},[]),(0,n.useEffect)(()=>{f({search:J().stringify({sort:"name:ASC"},{encode:!1})})},[f]);const O=_.map(c=>W(Q({},c),{metadatas:W(Q({},c.metadatas),{label:e(c.metadatas.label)})})),{data:l,status:v,isFetching:P}=(0,b.useQuery)(["api-tokens"],()=>w(void 0,null,function*(){i("willAccessTokenList");const{data:{data:c}}=yield M.be.get("/admin/api-tokens");return i("didAccessTokenList",{number:c.length}),c}),{enabled:d,onError(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),G=d&&(v!=="success"&&v!=="error"||v==="success"&&P),Me=(0,b.useMutation)(c=>w(void 0,null,function*(){yield M.be.delete(`/admin/api-tokens/${c}`)}),{onSuccess(){return w(this,null,function*(){yield a.invalidateQueries(["api-tokens"]),i("didDeleteToken")})},onError(c){var Z,z;(z=(Z=c==null?void 0:c.response)==null?void 0:Z.data)!=null&&z.data?t({type:"warning",message:c.response.data.data}):t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Re=d&&l,Be=d&&!l&&!u,Ne=d&&!l&&u;return n.createElement(K.Main,{"aria-busy":G},n.createElement(r.SettingsPageTitle,{name:"API Tokens"}),n.createElement(S.HeaderLayout,{title:e({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:e({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:u?n.createElement(r.LinkButton,{"data-testid":"create-api-token-button",startIcon:n.createElement(I(),null),size:"S",onClick:()=>i("willAddTokenFromList"),to:"/settings/api-tokens/create"},e({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),n.createElement(S.ContentLayout,null,!d&&n.createElement(r.NoPermissions,null),Re&&n.createElement(r.DynamicTable,{headers:O,contentType:"api-tokens",rows:l,withBulkActions:m||p||d,isLoading:G,onConfirmDelete:c=>Me.mutateAsync(c)},n.createElement(De,{canRead:d,canDelete:m,canUpdate:p,rows:l,withBulkActions:m||p||d})),Ne&&n.createElement(r.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:n.createElement(X.Button,{variant:"secondary",startIcon:n.createElement(I(),null)},e({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),Be&&n.createElement(r.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},Ie=()=>n.createElement(r.CheckPagePermissions,{permissions:L.Z.settings["api-tokens"].main},n.createElement(Se,null))}}]);
