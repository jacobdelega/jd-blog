(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{7278:function(e,t,n){Promise.resolve().then(n.t.bind(n,3222,23)),Promise.resolve().then(n.t.bind(n,6685,23)),Promise.resolve().then(n.bind(n,3811)),Promise.resolve().then(n.t.bind(n,9240,23)),Promise.resolve().then(n.t.bind(n,4084,23)),Promise.resolve().then(n.t.bind(n,4699,23)),Promise.resolve().then(n.t.bind(n,6734,23))},3811:function(e,t,n){"use strict";n.r(t);var s=n(7437),_=n(2265),i=n(1396),o=n.n(i),a=n(4088),m=n.n(a),r=n(6691),c=n.n(r),u=n(2853),l=n(2749);let g=async e=>{let t=await fetch(e),n=await t.json();if(!t.ok){let e=Error(n.message);throw e}return n};t.default=e=>{let{postSlug:t}=e,{status:n}=(0,l.useSession)({postSlug:t}),{data:i,isLoading:a,mutate:r}=(0,u.ZP)("http://localhost:3000/api/comments?postSlug=".concat(t),g),[d,h]=(0,_.useState)(""),P=async()=>{await fetch("/api/comments",{method:"POST",body:JSON.stringify({desc:d,postSlug:t})}),r()};return(0,s.jsxs)("div",{className:m().container,children:[(0,s.jsx)("h1",{className:m().title,children:"Comments"}),"authenticated"===n?(0,s.jsxs)("div",{className:m().write,children:[(0,s.jsx)("textarea",{placeholder:"write a comment...",className:m().input,onChange:e=>h(e.target.value)}),(0,s.jsxs)("button",{className:m().button,onClick:P,children:[" ","Send"," "]})]}):(0,s.jsx)(o(),{href:"login",children:"Login to write a comment"}),(0,s.jsx)("div",{className:m().comments,children:a?"Loading...":null==i?void 0:i.map(e=>(0,s.jsxs)("div",{className:m().comment,children:[(0,s.jsxs)("div",{className:m().user,children:[(0,s.jsx)(c(),{className:m().image,width:50,height:50,src:e.user.image}),(0,s.jsxs)("div",{className:m().userInfo,children:[(0,s.jsx)("span",{className:m().username,children:e.user.name}),(0,s.jsx)("span",{className:m().date,children:e.createdAt.substring(0,10)})]})]}),(0,s.jsx)("p",{className:m().desc,children:e.desc})]},e._id))})]})}},4088:function(e){e.exports={container:"comments_container__IfCkM",title:"comments_title__hA78L",write:"comments_write__kvwLu",comments:"comments_comments__IXrJs",comment:"comments_comment__RQWq2",input:"comments_input__Se1EO",button:"comments_button__UI_FY",user:"comments_user__lB_zA",image:"comments_image__7pF6r",userInfo:"comments_userInfo__iGY1C",username:"comments_username__6WThV",date:"comments_date__UqsFQ",desc:"comments_desc__WwZHJ"}},4084:function(e){e.exports={container:"menu_container__OOv4_",subtitle:"menu_subtitle__slHAn",title:"menu_title__74U37"}},6734:function(e){e.exports={categoryList:"menuCategories_categoryList__pIVZ_",categoryItem:"menuCategories_categoryItem__tMp8t",style:"menuCategories_style__h6eFh",fashion:"menuCategories_fashion__8HmWe",food:"menuCategories_food__rrqaU",travel:"menuCategories_travel__qOlS9",culture:"menuCategories_culture__YhgSV",coding:"menuCategories_coding__U2Fi7"}},4699:function(e){e.exports={container:"menuPost_container__hyEBx",subtitle:"menuPost_subtitle__SMphb",title:"menuPost_title__Z3xMi",item:"menuPost_item__1TRT6",items:"menuPost_items__rn1IU",imgContainer:"menuPost_imgContainer__uBTN8",postTitle:"menuPost_postTitle__k4I_V",image:"menuPost_image__dkKwC",textContainer:"menuPost_textContainer__x26vz",detail:"menuPost_detail__mopNz",date:"menuPost_date__nYzL5",category:"menuPost_category__UBS9y",travel:"menuPost_travel__43NHy",culture:"menuPost_culture__n6373",food:"menuPost_food___h3x8",fashion:"menuPost_fashion__YXkKg",coding:"menuPost_coding__0e6dz",style:"menuPost_style__K3Xlv"}},9240:function(e){e.exports={infoContainer:"singlePage_infoContainer__tDFL9",textContainer:"singlePage_textContainer__6daun",title:"singlePage_title__MZu_m",user:"singlePage_user__gH_3H",userImageContainer:"singlePage_userImageContainer__MewWB",avatar:"singlePage_avatar__sdEz8",userTextContainer:"singlePage_userTextContainer__gpwGe",username:"singlePage_username__dTgCv",imageContainer:"singlePage_imageContainer__dmU88",image:"singlePage_image__ue3_I",content:"singlePage_content__QU5pL",post:"singlePage_post__XJLWC",description:"singlePage_description__wJyyk"}}},function(e){e.O(0,[954,749,685,386,971,596,744],function(){return e(e.s=7278)}),_N_E=e.O()}]);