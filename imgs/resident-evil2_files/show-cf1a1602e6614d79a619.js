_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"7r43":function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"videoFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Video"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"promoSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"talent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nickname"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objects"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"names"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"objectRegions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"region"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:321}};i.loc.source={body:"fragment videoFields on Video {\n  description\n  promoSummary\n  talent {\n    displayName\n    nickname\n  }\n  objects {\n    id\n    type\n    slug\n    url\n    metadata {\n      names {\n        name\n        alt\n        short\n      }\n    }\n    objectRegions(region: $region) {\n      name\n      shortName\n      region\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},F7fs:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AuthorInfo"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"nickname"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"author"},name:{kind:"Name",value:"contributor"},arguments:[{kind:"Argument",name:{kind:"Name",value:"nickname"},value:{kind:"Variable",name:{kind:"Name",value:"nickname"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"authorId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"profileUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nickname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"aboutMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twitterHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundImageUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:242}};i.loc.source={body:"query AuthorInfo($nickname: String) {\n  author: contributor(nickname: $nickname) {\n    id\n    authorId\n    name\n    profileUrl\n    thumbnailUrl\n    nickname\n    position\n    location\n    aboutMe\n    twitterHandle\n    backgroundImageUrl\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.AuthorInfo=function(e,n){var i={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,o=new Set;for(t.forEach((function(e){o.add(e)}));o.size>0;){var c=o;o=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){o.add(e)})))}))}return d.forEach((function(n){var t=r(e,n);t&&i.definitions.push(t)})),i}(i,"AuthorInfo"),i.documentId="922d8223e72b3aa1d941b24e731333fcfff362725b5a7588132e23eb0579738f"},PoVq:function(e,n,i){"use strict";i.r(n),i.d(n,"AuthorShow",(function(){return R}));var t=i("o0o1"),a=i.n(t),r=i("HaE+"),d=i("nKUr"),o=i("rePB"),c=(i("q1tI"),i("mwIZ")),l=i.n(c),s=i("F7fs"),m=i.n(s),u=i("wPIa"),k=i.n(u),v=i("eMNQ"),g=i("zJC5"),b=i("F1wk"),f=i("4Fw0"),p=i("lfJx"),h=i("MX0m"),x=i.n(h),y=i("VnKV"),N=i("dhEp"),j=i("HwZ1"),F=i("JoFD"),S=function(e){var n=e.name,i=e.nickname,t=e.backgroundImageUrl,a=e.thumbnailUrl,r=e.position,o=e.location,c=e.aboutMe,l=e.socials,s=Object(v.u)({socials:l}),m=t||y.PLACEHOLDER_IMAGE_SRC_BACKGROUND;return Object(d.jsxs)("section",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" author-summary page-content",children:[Object(d.jsx)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" background-image"}),Object(d.jsxs)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" info",children:[Object(d.jsx)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" author-thumb",children:Object(d.jsx)(j.b,{src:a||y.PLACEHOLDER_IMAGE_SRC_AVATAR,className:"author-thumb-img",alt:n,imageOptions:{fit:"crop",width:200,height:200}})}),Object(d.jsx)("h1",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" heading",children:n}),Object(v.mc)(i)&&Object(d.jsxs)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" username",children:[Object(d.jsx)(N.IconIgnDpad,{styles:{marginRight:"5px",width:"0.8em",height:"0.8em"}}),"".concat(i)]}),Object(d.jsxs)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" details",children:[Object(d.jsxs)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" inner-details",children:[r&&Object(d.jsx)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" position",children:r}),o&&Object(d.jsxs)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" location",children:[Object(d.jsx)(N.IconPin,{})," ",o]})]}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:c},className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" blurb"})]}),s.length>0&&Object(d.jsx)("div",{className:x.a.dynamic([["1671695236",[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})]]])+" social-links",children:s.map((function(e){var n=e.key,i=e.icon,t=e.url;return Object(d.jsx)(F.b,{external:!0,title:n,href:t,className:"social-link",children:i},n)}))})]}),Object(d.jsx)(x.a,{id:"1671695236",dynamic:[Object(v.Nb)(m,{height:156,crop:"1200:331"}),Object(v.Nb)(m,{height:331,crop:"1200:331"})],children:[".background-image.__jsx-style-dynamic-selector{position:relative;height:156px;width:100%;overflow:hidden;border-radius:4px;background-image:url(".concat(Object(v.Nb)(m,{height:156,crop:"1200:331"}),");background-position:center,top left;background-size:cover;background-repeat:no-repeat,repeat;}"),".heading.__jsx-style-dynamic-selector{font-size:2.25rem;margin-top:12px;margin-bottom:6px;font-weight:bold;height:41px;}",".username.__jsx-style-dynamic-selector{font-size:21px;font-weight:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".social-links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding-bottom:12px;--socialSize:32px;}",".social-links.__jsx-style-dynamic-selector .social-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 12px 6px 0;width:var(--socialSize);height:var(--socialSize);color:var(--theme-elements-text-supplemental);}",".position.__jsx-style-dynamic-selector{margin-top:6px;color:var(--theme-elements-text-supplemental);font-size:1.125rem;font-weight:500;}",".location.__jsx-style-dynamic-selector{margin-top:6px;color:var(--theme-elements-text-supplemental);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".blurb.__jsx-style-dynamic-selector{padding:18px 0 12px;line-height:1.5;}",".info.__jsx-style-dynamic-selector{margin-top:-68px;background-color:var(--theme-elements-background-altColor);}",".info.__jsx-style-dynamic-selector .author-thumb.__jsx-style-dynamic-selector{position:relative;padding:0 12px;}",".info.__jsx-style-dynamic-selector .author-thumb-img{width:100%;height:100%;max-width:200px;max-height:200px;border:4px solid white;border-radius:50%;}","@media (max-width:860px){.author-summary.__jsx-style-dynamic-selector{padding:0;}.info.__jsx-style-dynamic-selector{padding:0 12px;text-align:center;}.location.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.social-links.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}","@media (min-width:861px){.background-image.__jsx-style-dynamic-selector{height:244px;background-image:linear-gradient(to bottom,rgba(0,0,0,0) 76%,rgba(0,0,0,0.5) 100%), url(".concat(Object(v.Nb)(m,{height:331,crop:"1200:331"}),");}.info.__jsx-style-dynamic-selector{display:grid;grid-template-columns:[leftRail-start] 24% [leftRail-end mainContent-start] auto [mainContent-end];}.author-thumb.__jsx-style-dynamic-selector{grid-area:leftRail;grid-row:1 / span 2;text-align:center;}.heading.__jsx-style-dynamic-selector{position:relative;margin:18px 36px 18px 0;color:white;grid-column:2 / span 2;grid-row:1;}.username.__jsx-style-dynamic-selector{grid-area:leftRail;grid-row:3;justify-self:center;margin-top:18px;margin-bottom:36px;}.details.__jsx-style-dynamic-selector{grid-area:mainContent;grid-row:2 / span 2;}.inner-details.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.job-title.__jsx-style-dynamic-selector{margin-right:12px;}.blurb.__jsx-style-dynamic-selector{margin-right:36px;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.social-links.__jsx-style-dynamic-selector{grid-area:rightRail;grid-row:2 / span 3;}}"),"@media (min-width:1281px){.background-image.__jsx-style-dynamic-selector{height:331px;}.info.__jsx-style-dynamic-selector{grid-template-columns:[leftRail-start] 22.5% [leftRail-end mainContent-start] auto [mainContent-end rightRail-start] 300px [rightRail-end];}.heading.__jsx-style-dynamic-selector,.details.__jsx-style-dynamic-selector{margin-left:36px;}.social-links.__jsx-style-dynamic-selector{grid-area:rightRail;grid-row:2 / span 3;padding-top:6px;padding-right:12px;}}"]})]})},w=i("j2H6"),O=i("e1TJ"),_=i("j3Zk"),I=i("oR23"),A=i("lTn/"),D=Object(w.a)(A.b),E=function(e){var n=e.activeFilter,i=e.endIndex,t=Object(O.c)(),a=t.region,r=t.author,o=r.authorId,c=r.name,l=r.nickname,s=t.title,m=t.canonical,u=Object(v.Hc)({endIndex:i}).startIndex,g={region:a,authorId:o,filter:"Wiki Guide Edits"===n?"GuideEdits":n,startIndex:u,count:Object(v.Gc)()};return Object(d.jsx)(_.a,{query:k.a,notifyOnNetworkStatusChange:!0,variables:g,purge:"Author Content Feed",children:function(e){var i,t,a=e.data,r=e.loadMore,o=e.networkStatus,u=null!==(i=null===a||void 0===a||null===(t=a.author)||void 0===t?void 0:t.contentFeed)&&void 0!==i?i:{},k=u.contentItems,g=u.pagination,b=Object(v.Jb)(Object(v.Q)(k));return Object(d.jsx)(I.a,{items:b,pagination:g,paginationCount:Object(v.Gc)(),networkStatus:o,onLoadMore:function(){return r(Object(v.Hc)(g),(function(e){return Object(v.Dc)({url:m,title:"".concat(s," ('").concat(n,"' Page ").concat(e,")"),eventLabel:"virtualPageview"})}))},trackingComponent:"content-AuthorFeed",children:Object(d.jsx)(D,{label:"".concat(n," from ").concat(c||"@".concat(l)),mainContentTrackingComponent:"content-authorFeed"})})}})};function C(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function q(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?C(Object(i),!0).forEach((function(n){Object(o.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var V=i("NOtv")("kraken:pages:authors:show"),R=function(e){var n=e.page.author,i=e.endIndex,t=e.defaultFilter,a=void 0===t?"Latest":t,r=Object(v.t)({filterLabels:v.o,route:"authors-show",query:{nickname:n.nickname}});return Object(d.jsx)(b.a,{children:Object(d.jsxs)(p.b,{children:[Object(d.jsx)(S,q({},n)),n&&n.authorId&&Object(d.jsx)(f.a,{defaultFilter:a,filters:r,children:function(e){var n=e.activeFilter;return Object(d.jsx)(E,{endIndex:i,activeFilter:n})}})]})},n.nickname)};R.getInitialProps=function(){var e=Object(r.a)(a.a.mark((function e(n){var i,t,r,d,o,c,s,u,g,b,f,p,h,x,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.query,t=n.res,r=n.apolloClient,d=i.nickname,o=i.filter,c=i.endIndex,s=Object(v.P)({filter:o,defaultFilter:"Latest"}),e.prev=3,e.next=6,r.query({query:m.a,variables:{nickname:d}});case 6:if(u=e.sent,g=u.data.author,b=q(q({},g),{},{socials:Object(v.v)({twitterHandle:l()(g,"twitterHandle")})}),f=!1,!(p=l()(g,"authorId"))){e.next=18;break}return e.next=14,r.query({query:k.a,variables:{authorId:p,filter:"Wiki Guide Edits"===s?"GuideEdits":s,count:10}});case 14:h=e.sent,x=h.data,y=l()(x,"author.contentFeed.contentItems",{}),f=y.length>0;case 18:return e.abrupt("return",{page:q(q({},Object(v.ad)(q(q({filter:s},g),{},{hasContent:f}))),{},{schema:Object(v.bd)({author:b}),author:b,hasAds:!1}),endIndex:isNaN(parseInt(c))?void 0:parseInt(c),defaultFilter:s});case 21:return e.prev=21,e.t0=e.catch(3),e.abrupt("return",Object(v.Ac)({error:e.t0,res:t,debug:V}));case 24:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(n){return e.apply(this,arguments)}}();n.default=Object(g.a)(R)},eWLt:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"contentItemStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContentItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"contentItemRequiredFields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"promoTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"canWatchRead"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"relatedMediaId"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"videoFields"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Article"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"review"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scoreText"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:337}};t.loc.source={body:"#import './contentItemRequiredFieldsFragment.gql'\n#import './videoFieldsFragment.gql'\nfragment contentItemStandardFields on ContentItem {\n  ...contentItemRequiredFields\n  title\n  promoTitle\n  thumbnailUrl\n  duration\n  canWatchRead\n  relatedMediaId\n  ...videoFields\n  ... on Article {\n    review {\n      score\n      scoreText\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}t.definitions=t.definitions.concat(r(i("ZLB7").definitions)),t.definitions=t.definitions.concat(r(i("7r43").definitions)),e.exports=t},nIgi:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"modernArticleFeed"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ModernArticle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"sponsorship"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"clickthroughUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"brandAssetImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:244}};t.loc.source={body:"#import './modernContentFeedFragment.gql'\n\nfragment modernArticleFeed on ModernArticle {\n  content {\n    ...modernContentFeed\n    sponsorship {\n      type\n      name\n      clickthroughUrl\n      brandAssetImage {\n        url\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};t.definitions=t.definitions.concat(i("AD/w").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))),e.exports=t},nkGZ:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/show",function(){return i("PoVq")}])},wPIa:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AuthorContentFeed"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"authorId"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"startIndex"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"author"},name:{kind:"Name",value:"contributor"},arguments:[{kind:"Argument",name:{kind:"Name",value:"authorId"},value:{kind:"Variable",name:{kind:"Name",value:"authorId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentFeed"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}},{kind:"Argument",name:{kind:"Name",value:"startIndex"},value:{kind:"Variable",name:{kind:"Name",value:"startIndex"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isMore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endIndex"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"contentItems"},name:{kind:"Name",value:"feedItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"contentItemStandardFields"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"modernArticleFeed"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:526}};t.loc.source={body:"#import './fragments/contentItemStandardFieldsFragment.gql'\n#import './fragments/modernArticleFeedFragment.gql'\n\nquery AuthorContentFeed($authorId: Int, $filter: String!, $count: Int, $startIndex: Int, $region: String) {\n  author: contributor (authorId: $authorId) {\n    id\n    contentFeed(filter: $filter, count: $count, startIndex: $startIndex) {\n      pagination {\n        isMore\n        endIndex\n      }\n      contentItems: feedItems {\n        ...contentItemStandardFields\n        ...modernArticleFeed\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}t.definitions=t.definitions.concat(r(i("eWLt").definitions)),t.definitions=t.definitions.concat(r(i("nIgi").definitions));var o={};function c(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.AuthorContentFeed=function(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,a=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var d=r;r=new Set,d.forEach((function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach((function(e){r.add(e)})))}))}return a.forEach((function(n){var t=c(e,n);t&&i.definitions.push(t)})),i}(t,"AuthorContentFeed"),t.documentId="99c99e50e8df8e8acc0418e17801d4f926dca32bc53f4f210041608597b52616"}},[["nkGZ",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19]]]);
//# sourceMappingURL=show-cf1a1602e6614d79a619.js.map