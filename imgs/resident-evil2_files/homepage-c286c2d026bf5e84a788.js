_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"1M2j":function(e,n,i){"use strict";i.r(n),i.d(n,"Homepage",(function(){return he}));var t=i("o0o1"),a=i.n(t),r=i("HaE+"),d=i("nKUr"),o=i("rePB"),s=i("MX0m"),l=i.n(s),c=i("q1tI"),m=i("zJC5"),u=i("eMNQ"),v=i("AGfU"),k=i.n(v),f=i("F1wk"),p=i("suQY"),g=i("9ZE7"),b=i("Ff2n"),h=i("e1TJ"),j=i("4Fw0"),N=i("b/hR"),O=i.n(N),y=i("j3Zk"),S=i("j2H6"),F=i("zapp"),x=i("oR23"),w=i("lTn/"),I=i("uVHE"),D=i("XUoJ"),T=i.n(D),P=i("6+M/"),C=i("nSvn"),E=i("DPDn"),V=i("mhtd"),q=i("OCcf"),A=i("IIIo"),L=i("TSYQ"),$=i.n(L),M=i("gNx5"),U=i("Rij+"),R=i("dhEp"),H=i("hncN"),_=i("O8CC"),z=i("kyDf");function B(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function G(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?B(Object(i),!0).forEach((function(n){Object(o.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var Q=function(e){return e.sponsored&&Object(d.jsx)("div",{className:$()("item-more-data"),children:Object(d.jsx)(H.a,{sponsor:"Sponsored"})})},W=function(e){var n=e.imageUrl,i=e.title,t=e.url,a=e.sponsored,r=Object(M.b)(),o=Object(U.a)({divider:"var(--theme-elements-deals-divider)",textColors:null===r||void 0===r?void 0:r.elements.deals.text}),s=o.className,l=o.styles,c={external:!0,href:t,trackingLabel:i,trackingComponent:"promo-deals-block"};return Object(d.jsxs)(_.a,G(G({},{classNames:[s,"deals-item"],divider:!0,itemLink:c,orientation:"row"}),{},{children:[Object(d.jsx)("div",{className:"item-thumbnail",children:Object(d.jsx)(z.a,G({},{aspectRatio:"16:9",shape:"rounded",thumbnailUrl:n}))}),Object(d.jsxs)("div",{className:"item-details",children:[Object(d.jsx)("div",{className:"item-data",children:"IGN Deals"}),Object(d.jsx)("div",{className:"item-title-link",children:Object(d.jsxs)("h3",{className:"item-title",children:[i," ",Object(d.jsx)(R.IconTopRightArrow,{})]})}),Object(d.jsx)(Q,{sponsored:a})]}),Object(d.jsx)(Q,{sponsored:a}),l]}))},J=/^\[Sponsor(ed)?\]:?\s*/,K=function(e){var n=e.items;return Object(d.jsxs)("div",{className:"jsx-4245530218 deals-block",children:[n.map((function(e,n){var i,t=J.test(e.title),a=null===(i=e.title)||void 0===i?void 0:i.replace(J,"");return Object(d.jsx)(W,G({},G(G({},e),{},{sponsored:t,title:a})),n)})),Object(d.jsx)(l.a,{id:"4245530218",children:[".deals-block.jsx-4245530218{background-color:var(--theme-elements-deals-background-color);margin:-3px -12px 0;padding:18px 12px 0;border-radius:8px;}",".deals-block.jsx-4245530218 .deals-item:last-child{border-bottom:none;}",".deals-block.jsx-4245530218 .sponsor-disclosure{color:var(--theme-elements-deals-text-muted);margin:0;}"]})]})};function X(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function Z(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?X(Object(i),!0).forEach((function(n){Object(o.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var Y=function(e){var n=e.region,i=void 0===n?"us":n;return Object(d.jsx)(y.a,{query:T.a,variables:{slug:"sticky-blogroll",region:i},children:function(e){var n=e.data.slotterBySlugAndRegion;return n&&n.items?Object(d.jsx)(V.a,{type:"slotter",params:{slug:"sticky-blogroll",region:i},children:Object(d.jsx)(q.b,{items:n.items})}):Object(d.jsx)(A.a,{styles:{margin:0}})}})},ee=function(e){var n=e.groupIndex,i=e.contentItems,t=e.region,a=Object(M.b)();return 0===n?Object(d.jsxs)(d.Fragment,{children:[i.map((function(e,n){return 2===n?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(E.a,Z(Z({},{slug:"infeed-video",region:t}),{},{analytics:{playerContext:"in_feed"}})),Object(d.jsx)(Y,Z({},{region:t})),Object(d.jsx)(C.a,Z(Z({},e),{},{trackingComponent:"content-homepageFeed",shape:null===a||void 0===a?void 0:a.elements.feed.items.shape,divider:"var(--theme-elements-feed-items-divider)"}))]},e.id):Object(d.jsx)(C.a,Z(Z({},e),{},{trackingComponent:"content-homepageFeed",shape:null===a||void 0===a?void 0:a.elements.feed.items.shape,divider:"var(--theme-elements-feed-items-divider)"}),e.id)})),Object(d.jsx)(y.a,{query:T.a,dataPath:"slotterBySlugAndRegion.items",variables:{slug:"deals-block",region:t},children:function(e){var n=e.data;return Object(d.jsx)(V.a,{type:"slotter",params:{slug:"deals-block",region:t},styles:{right:"-12px"},children:Object(d.jsx)(K,{items:n})})}})]}):Object(d.jsx)(P.a,{contentItems:i,trackingComponent:"content-homepageFeed"})},ne=i("mwIZ"),ie=i.n(ne),te=i("bNUf"),ae=i.n(te),re=i("Fit8"),de=function(e){var n=e.groupIndex,i=e.region;return Object(d.jsxs)(c.Fragment,{children:[!1!==Object(u.Kb)(n)&&Object(d.jsx)("div",{className:"jsx-2470524420 ad-rail-wrapper",children:Object(d.jsx)(w.a,{groupIndex:Object(u.Kb)(n)})}),1===n&&Object(d.jsx)(y.a,{query:ae.a,variables:{region:i},purge:"Out This Week",children:function(e){var n=e.data;return Object(d.jsx)(re.a,{items:ie()(n,"comingSoon",[])})}}),Object(d.jsx)(l.a,{id:"2470524420",children:["@media (min-width:861px){.right-rail{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.right-rail .out-this-week{margin-top:auto;}.ad-rail-wrapper.jsx-2470524420{height:100%;}}"]})]})};function oe(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function se(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(i),!0).forEach((function(n){Object(o.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):oe(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var le=Object(S.a)(w.b),ce=function(e){var n=e.slotterIds,i=e.groupIndex;return i<n.length&&Object(d.jsx)(F.a,{id:n[i]})},me=function(e){var n=e.groupIndex;return n>0&&!1!==Object(u.Kb)(n)&&Object(d.jsx)(p.a,{mixName:"bigAd",position:Object(u.Kb)(n),hideWhen:[{isMobile:!1,position:.5}]})},ue=function(e){var n=e.slotterIds,i=e.activeFilter,t=e.endIndex,a=Object(h.c)(),r=a.region,o=a.title,s=a.canonical,l=Object(u.Hc)({endIndex:t}).startIndex,c={filter:i,region:r,startIndex:l,count:12};return Object(d.jsx)(y.a,{query:O.a,notifyOnNetworkStatusChange:!0,variables:c,purge:"Content Feed",children:function(e){var t,a,l=e.data,c=e.loadMore,m=e.networkStatus,v=null!==(t=null===l||void 0===l||null===(a=l.homepage)||void 0===a?void 0:a.contentFeed)&&void 0!==t?t:{},k=v.contentItems,f=void 0===k?[]:k,p=v.pagination,g=void 0===p?{}:p,b=Object(u.Jb)(Object(u.Q)(f));return Object(d.jsx)(I.a,{hideByDefault:!0,children:Object(d.jsx)(x.a,{items:b,paginationCount:6,pagination:g,networkStatus:m,onLoadMore:function(){return c(Object(u.Hc)(g),(function(e){return Object(u.Dc)({url:s,title:"".concat(o," ('").concat(i,"' Page ").concat(e,")"),eventLabel:"virtualPageview"})}))},allowPartial:!1,trackingComponent:"content-HomepageFeed",children:Object(d.jsx)(le,se({className:"homepage-grid",label:"Latest"===i?"News":null,RightRail:de,TopBreak:me,BottomBreak:ce,ContentList:ee},{slotterIds:n,region:r}))})})}})};function ve(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var ke=function(e){var n=e.defaultFilter,i=void 0===n?"Latest":n,t=Object(b.a)(e,["defaultFilter"]),a=Object(h.c)().router,r=(void 0===a?{}:a).query||{},s=Object(u.t)({filterLabels:u.Lb,route:"homepage",query:r});return Object(d.jsx)(j.a,{defaultFilter:i,filters:s,children:function(e){var n=e.activeFilter;return Object(d.jsx)(ue,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ve(Object(i),!0).forEach((function(n){Object(o.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ve(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({activeFilter:n},t))}})},fe=i("lfJx");function pe(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function ge(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(i),!0).forEach((function(n){Object(o.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):pe(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var be=i("NOtv")("kraken:pages:homepage:index"),he=function(e){var n=e.slotterIds,i=void 0===n?[]:n,t=e.endIndex,a=e.defaultFilter,r=void 0===a?"Latest":a;return Object(d.jsxs)(f.a,{adRefresh:!1,children:[Object(d.jsxs)(fe.b,{lazyLoad:!1,children:[Object(d.jsx)(p.a,{mixName:"bigAd",position:0,hideWhen:[{isMobile:!0}]}),Object(d.jsx)(g.a,{slotterIds:i.slice(0,1)}),Object(d.jsx)(p.a,{mixName:"bigAd",position:0,hideWhen:[{isMobile:!1}]}),Object(d.jsx)(g.a,{slotterIds:i.slice(1,2)}),Object(d.jsx)(ke,ge({},{slotterIds:i.slice(2,6),endIndex:t,defaultFilter:r}))]}),Object(d.jsx)(l.a,{id:"1615067431",children:["#main-content{padding-top:16px;}","@media (min-width:861px){.bobble.bobble-0{margin-bottom:24px;}}"]})]})};he.getInitialProps=function(){var e=Object(r.a)(a.a.mark((function e(n){var i,t,r,d,o,s,l,c,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.query,t=n.res,r=n.apolloClient,d=n.region,o=i.filter,s=i.endIndex,l=Object(u.P)({filter:o,defaultFilter:"Latest"}),e.prev=3,e.next=6,r.query({query:k.a,variables:{slug:"homepage",region:d}});case 6:return c=e.sent,m=c.data.hub,e.abrupt("return",ge(ge({},m),{},{headers:{cache:30},page:{promotedThemeAllowed:!0,hasAds:!0,title:"Video Game News, Reviews, and Walkthroughs",pageType:"front_page",resource:"front_page",isCommunity:"no",categories:["ign","3ds","ds","pc","ps4","ps3","ps-vita","nintendo","wii","wii-u","xbox-one","xbox-360","wireless","blu-ray","comics","movies","tech","tv"],platforms:["3ds","ds","pc","ps4","ps3","ps-vita","nintendo-switch","wii","wii-u","xbox-one","xbox-360","wireless","android","ipad","iphone"],genre:["action","adventure","fighting","racing","rpg","shooter","sports","strategy"],editPage:{type:"slotter",params:{slug:"homepage",region:d}},hrefLangs:{"en-ae":"https://me.ign.com/en/","en-au":"https://www.ign.com/au","en-ca":"https://www.ign.com/ca","en-gb":"https://www.ign.com/uk","en-ie":"https://www.ign.com/ie","en-in":"https://in.ign.com/","en-my":"https://sea.ign.com/","en-se":"https://nordic.ign.com/","en-sg":"https://sea.ign.com/","en-us":"https://www.ign.com","en-za":"https://za.ign.com/","es-419":"https://latam.ign.com/","es-es":"https://es.ign.com/","es-mx":"https://latam.ign.com/",ar:"https://me.ign.com/ar/",de:"https://de.ign.com/",el:"https://gr.ign.com/",fr:"https://fr.ign.com/",he:"https://il.ign.com/",hu:"https://hu.ign.com/",it:"https://it.ign.com/",ja:"https://jp.ign.com/",nl:"https://nl.ign.com/",pl:"https://pl.ign.com/","pt-br":"https://br.ign.com/","pt-pt":"https://pt.ign.com/",ru:"https://ru.ign.com/",sl:"https://adria.ign.com/",sr:"https://adria.ign.com/",tr:"https://tr.ign.com/",zh:"https://www.ign.com.cn/"}},endIndex:isNaN(parseInt(s))?void 0:parseInt(s),defaultFilter:l}));case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",Object(u.Ac)({error:e.t0,res:t,debug:be}));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(n){return e.apply(this,arguments)}}();n.default=Object(m.a)(he)},"7r43":function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"videoFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Video"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"promoSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"talent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nickname"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objects"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"names"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"objectRegions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"region"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:321}};i.loc.source={body:"fragment videoFields on Video {\n  description\n  promoSummary\n  talent {\n    displayName\n    nickname\n  }\n  objects {\n    id\n    type\n    slug\n    url\n    metadata {\n      names {\n        name\n        alt\n        short\n      }\n    }\n    objectRegions(region: $region) {\n      name\n      shortName\n      region\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},AGfU:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"HubSlotters"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hub"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slotterIds"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:128}};i.loc.source={body:"query HubSlotters($slug: String!, $region: String) {\n  hub(slug: $slug, region: $region) {\n    id\n    slug\n    slotterIds\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.HubSlotters=function(e,n){var i={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,o=new Set;for(t.forEach((function(e){o.add(e)}));o.size>0;){var s=o;o=new Set,s.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){o.add(e)})))}))}return d.forEach((function(n){var t=r(e,n);t&&i.definitions.push(t)})),i}(i,"HubSlotters"),i.documentId="7cd3056793cf4b265cb1cb68bba4e92a3688549e51a84b6fccec66055e332f39"},DPDn:function(e,n,i){"use strict";var t=i("nKUr"),a=i("MX0m"),r=i.n(a),d=i("q1tI"),o=i("4pyU"),s=i("JoFD"),l=i("3s0m"),c=function(e){var n=Object(l.b)(e);if(null===n||void 0===n||!n.video)return null;var i=e.analytics,a=n.video,d=n.title,c=n.url,m=n.disclosure;return Object(t.jsxs)("div",{className:"jsx-1173849287 infeed-player",children:[m&&Object(t.jsx)("div",{className:"jsx-1173849287 infeed-disclosure",children:m}),Object(t.jsx)(o.a,{video:a,analytics:i,autoplay:!0,muted:!0,skipInitialAd:!0,enableMutedPreroll:!0}),Object(t.jsx)(s.b,{href:c,className:"infeed-url",trackingLabel:d,trackingComponent:"content-infeedVideo",children:Object(t.jsx)("h3",{className:"jsx-1173849287 infeed-video-title",children:d})}),Object(t.jsx)(r.a,{id:"1173849287",children:[".infeed-disclosure.jsx-1173849287{margin:1em 0;color:var(--theme-elements-feed-disclosure);font-size:0.875rem;font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".infeed-player.jsx-1173849287{padding:18px 0;}",".infeed-player.jsx-1173849287 .infeed-url{color:var(--theme-elements-text-heading);}",".infeed-player.jsx-1173849287 .infeed-url:hover{-webkit-text-decoration:underline;text-decoration:underline;color:var(--theme-elements-text-hover);}",".infeed-video-title.jsx-1173849287{font-size:1.5rem;font-weight:900;line-height:1.17;margin:1em 0 0 0;}"]})]})};n.a=Object(d.memo)(c)},MCUz:function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"abTest"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ABTest"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"represents"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"values"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"winnerIndex"},arguments:[],directives:[]}]}}],loc:{start:0,end:71}};i.loc.source={body:"fragment abTest on ABTest {\n  id\n  represents\n  values\n  winnerIndex\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},"b/hR":function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"HomepageContentFeed"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"HomepageFeedFilterEnum"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"startIndex"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newsOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"homepage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contentFeed"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}},{kind:"Argument",name:{kind:"Name",value:"startIndex"},value:{kind:"Variable",name:{kind:"Name",value:"startIndex"}}},{kind:"Argument",name:{kind:"Name",value:"newsOnly"},value:{kind:"Variable",name:{kind:"Name",value:"newsOnly"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isMore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endIndex"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"contentItems"},name:{kind:"Name",value:"feedItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"contentItemStandardFields"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"feedItem"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:542}};t.loc.source={body:"#import './fragments/contentItemStandardFieldsFragment.gql'\n#import './fragments/feedItemFragment.gql'\n\nquery HomepageContentFeed($filter: HomepageFeedFilterEnum!, $region: String, $count: Int, $startIndex: Int, $newsOnly: Boolean) {\n  homepage {\n    contentFeed(filter: $filter, region: $region, count: $count, startIndex: $startIndex, newsOnly: $newsOnly) {\n      pagination {\n        total\n        isMore\n        endIndex\n      }\n      contentItems: feedItems {\n        ...contentItemStandardFields\n        ...feedItem\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}t.definitions=t.definitions.concat(r(i("eWLt").definitions)),t.definitions=t.definitions.concat(r(i("snMA").definitions));var o={};function s(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.HomepageContentFeed=function(e,n){var i={kind:e.kind,definitions:[s(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,a=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var d=r;r=new Set,d.forEach((function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach((function(e){r.add(e)})))}))}return a.forEach((function(n){var t=s(e,n);t&&i.definitions.push(t)})),i}(t,"HomepageContentFeed"),t.documentId="181bfd3ccd2365e75755882430f2da42a663c2ea8c2f198c33a5562ea50fadfd"},bNUf:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ComingSoon"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectType"}},type:{kind:"NamedType",name:{kind:"Name",value:"ObjectType"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"withinDays"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"comingSoon"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"objectType"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}},{kind:"Argument",name:{kind:"Name",value:"withinDays"},value:{kind:"Variable",name:{kind:"Name",value:"withinDays"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"upcomingInfo"},directives:[]},{kind:"Field",name:{kind:"Name",value:"reviewScore"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:272}};t.loc.source={body:"#import './fragments/upcomingInfoFragment.gql'\nquery ComingSoon($region: String, $objectType: ObjectType, $withinDays: Int, $count: Int) {\n  comingSoon(type: $objectType, region: $region, count: $count, withinDays: $withinDays) {\n    ...upcomingInfo\n    reviewScore\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}t.definitions=t.definitions.concat(i("ya7r").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})));var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.ComingSoon=function(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=d[n]||new Set,a=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var s=r;r=new Set,s.forEach((function(e){a.has(e)||(a.add(e),(d[e]||new Set).forEach((function(e){r.add(e)})))}))}return a.forEach((function(n){var t=o(e,n);t&&i.definitions.push(t)})),i}(t,"ComingSoon"),t.documentId="71bd491b4052deb39ffbc6743d9beb46ad1634a69a41cdb43609443c0aefe58c"},eWLt:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"contentItemStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContentItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"contentItemRequiredFields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"promoTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"canWatchRead"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"relatedMediaId"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"videoFields"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Article"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"review"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scoreText"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:337}};t.loc.source={body:"#import './contentItemRequiredFieldsFragment.gql'\n#import './videoFieldsFragment.gql'\nfragment contentItemStandardFields on ContentItem {\n  ...contentItemRequiredFields\n  title\n  promoTitle\n  thumbnailUrl\n  duration\n  canWatchRead\n  relatedMediaId\n  ...videoFields\n  ... on Article {\n    review {\n      score\n      scoreText\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}t.definitions=t.definitions.concat(r(i("ZLB7").definitions)),t.definitions=t.definitions.concat(r(i("7r43").definitions)),e.exports=t},snMA:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"feedItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ModernArticle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"abTests"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"abTest"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sponsorship"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"clickthroughUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"brandAssetImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Faceoff"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"abTests"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"abTest"},directives:[]}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Promotion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"abTests"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"abTest"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:580}};t.loc.source={body:"#import './modernContentFeedFragment.gql'\n#import './abTestFragment.gql'\n\nfragment feedItem on FeedItem {\n  ... on ModernArticle {\n    content {\n      ...modernContentFeed\n      abTests {\n        ...abTest\n      }\n      sponsorship {\n        type\n        name\n        clickthroughUrl\n        brandAssetImage {\n          url\n        }\n      }\n    }\n  }\n  ... on Faceoff {\n    content {\n      ...modernContentFeed\n      abTests {\n        ...abTest\n      }\n    }\n  }\n  ... on Promotion {\n    content {\n      ...modernContentFeed\n      abTests {\n        ...abTest\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}t.definitions=t.definitions.concat(r(i("AD/w").definitions)),t.definitions=t.definitions.concat(r(i("MCUz").definitions)),e.exports=t},thKX:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homepage",function(){return i("1M2j")}])},ya7r:function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"upcomingInfo"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UpcomingObject"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"genres"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"platforms"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"releaseDate"},arguments:[],directives:[]}]}}],loc:{start:0,end:122}};i.loc.source={body:"fragment upcomingInfo on UpcomingObject {\n  id\n  type\n  name\n  slug\n  url\n  imageUrl\n  genres\n  platforms\n  releaseDate\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i}},[["thKX",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,17,21,19,23,25,28]]]);
//# sourceMappingURL=homepage-c286c2d026bf5e84a788.js.map