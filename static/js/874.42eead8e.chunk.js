"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[874],{8874:function(s,e,t){t.r(e),t.d(e,{default:function(){return W}});var i=t(5671),n=t(3144),o=t(136),r=t(5716),a=t(2791),l="Profile_content__8wOo0",u=t(5022),c="MyPosts_postsBlock__fMM0o",d="MyPosts_posts__YECKp",h="Post_item__JVIO3",p=t(184),f=function(s){return(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("img",{alt:"",src:"https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"}),s.message,(0,p.jsx)("div",{children:(0,p.jsxs)("span",{children:["like ",s.likeCounter]})})]})},j=t(6139),m=t(704),x=t(683),v=t(3079),b=(0,v.t)(10),g=(0,m.Z)({form:"addNewPosts"})((function(s){return(0,p.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,p.jsx)(j.Z,{name:"addNewPost",component:x.gN,validate:[v.C,b]}),(0,p.jsx)("button",{children:"Add"})]})})),k=(0,a.memo)((function(s){var e=s.posts.map((function(s,e){return(0,p.jsx)(f,{message:s.message,likeCounter:s.likeCounter},e)}));return(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)("div",{children:(0,p.jsx)(g,{onSubmit:function(e){s.addPost(e.addNewPost)}})}),(0,p.jsx)("div",{className:d,children:e})]})})),_=t(8687),P=(0,_.$j)((function(s){return{posts:s.profilePage.postDate}}),(function(s){return{addPost:function(e){s((0,u.WA)(e))}}}))(k),y=t(885),N=t(9892),S=t(6216),C="profileStatusWithHooks_statusContainer__6BjY+",I="profileStatusWithHooks_status__mRLAq",w=function(s){var e=(0,a.useState)(!1),t=(0,y.Z)(e,2),i=t[0],n=t[1],o=(0,a.useState)(s.status),r=(0,y.Z)(o,2),l=r[0],u=r[1];(0,a.useEffect)((function(){u(s.status)}),[s.status]);return(0,p.jsx)("div",{className:C,children:i?(0,p.jsx)("input",{onChange:function(s){u(s.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),s.updateStatus(l)},value:l||""}):(0,p.jsxs)("div",{className:I,children:[(0,p.jsx)("b",{children:"Status"}),":",(0,p.jsx)("span",{onDoubleClick:function(){n(!0)},children:l||"Type your new status"})]})})},E=function(s){var e=s.contactTitle,t=s.contactValue;return(0,p.jsxs)("div",{style:{paddingLeft:"10px"},children:[(0,p.jsx)("b",{children:e})," : ",t]})},T="profileData_profileDataContainer__gfIgK",Z="profileData_dataContainer__wqPnj",A="profileData_contactsContainer__Xdamp",M=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,p.jsxs)("div",{className:T,children:[(0,p.jsxs)("div",{className:Z,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),t&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:i,children:"edit"})})]}),(0,p.jsxs)("div",{className:A,children:[(0,p.jsx)("b",{children:"Contacts: "})," ",e.contacts&&Object.keys(e.contacts).map((function(s){return(0,p.jsx)(E,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},O=t(1450),D=(0,m.Z)({form:"editProfile"})((function(s){var e=s.handleSubmit,t=s.initialValues,i=s.error,n=t;return(0,p.jsxs)("form",{onSubmit:e,className:O.Z.editInfo,children:[(0,p.jsx)("div",{children:(0,p.jsx)("button",{className:O.Z.button,children:"save"})}),i&&(0,p.jsx)("div",{className:O.Z.formSummeryError,children:i}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",(0,x.Gr)("fullName",x.Yj,{placeholder:"Full name"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),":",(0,x.Gr)("lookingForAJob",x.Yj,{type:"checkbox"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),":",(0,x.Gr)("lookingForAJobDescription",x.gN,{placeholder:"My professional skills"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",(0,x.Gr)("aboutMe",x.gN,{placeholder:"About me"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(s){return(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:s}),":",(0,x.Gr)("contacts."+s,x.Yj,{placeholder:s})," "]},s)}))]})]})})),F="TopInfo_profileInfoContainer__rfHXW",J="TopInfo_ava__egLCP",L=function(s){var e,t=s.profile,i=s.status,n=s.updateStatus,o=s.isOwner,r=s.savePhoto,l=s.saveProfile,u=s.isEdit,c=s.setIsEdit,d=(0,a.useState)(!1),h=(0,y.Z)(d,2),f=h[0],j=h[1];if(!t)return(0,p.jsx)(N.Z,{});return(0,p.jsxs)("div",{className:F,children:[(0,p.jsxs)("div",{className:J,children:[(0,p.jsx)("img",{alt:"",src:(null===(e=t.photos)||void 0===e?void 0:e.large)||S}),(0,p.jsx)(w,{status:i,updateStatus:n}),o&&(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{id:"file",type:"file",onChange:function(s){var e;null!==(e=s.target.files)&&void 0!==e&&e.length&&r(s.target.files[0])}}),(0,p.jsx)("label",{htmlFor:"file",children:"upload photo"})]})]}),f?(0,p.jsx)(D,{initialValues:t,onSubmit:function(s){l(s),"successes"===u&&j(!1)}}):(0,p.jsx)(M,{goToEditMode:function(){c("none"),j(!0)},profile:t,isOwner:o})]})},V=function(s){return(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)(L,{setIsEdit:s.setIsEdit,isEdit:s.isEdit,saveProfile:s.saveProfile,savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,p.jsx)(P,{})]})},Y=t(9271),G=t(7781),B=function(s){(0,o.Z)(t,s);var e=(0,r.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=JSON.stringify(this.props.userId),this.props.userId||this.props.history.push("/login")),this.props.getProfileThunk(+s),this.props.setStatusThunk(+s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)("div",{children:(0,p.jsx)(V,{isEdit:this.props.isEdit,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk,savePhoto:this.props.savePhotoThunk,saveProfile:this.props.saveProfileThunk,setIsEdit:this.props.setIsEdit})})}}]),t}(a.Component),W=(0,G.qC)(Y.EN,(0,_.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,userId:s.auth.userId,isAuth:s.auth.isAuth,isEdit:s.profilePage.isEdit}}),{getProfileThunk:u.VB,setStatusThunk:u.oI,updateStatusThunk:u.dw,savePhotoThunk:u.zL,saveProfileThunk:u.c$,setIsEdit:u.zY}))(B)}}]);
//# sourceMappingURL=874.42eead8e.chunk.js.map