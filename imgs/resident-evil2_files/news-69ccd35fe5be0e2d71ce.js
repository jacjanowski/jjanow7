_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"7r43":function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"videoFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Video"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"promoSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"talent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nickname"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objects"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"names"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"objectRegions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"region"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:321}};i.loc.source={body:"fragment videoFields on Video {\n  description\n  promoSummary\n  talent {\n    displayName\n    nickname\n  }\n  objects {\n    id\n    type\n    slug\n    url\n    metadata {\n      names {\n        name\n        alt\n        short\n      }\n    }\n    objectRegions(region: $region) {\n      name\n      shortName\n      region\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},DoTo:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ChannelInfo"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"channel"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filters"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"adOps"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"genre"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"platforms"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:221}};i.loc.source={body:"query ChannelInfo($slug: String!) {\n  channel(slug: $slug) {\n    id\n    slug\n    displayName\n    color\n    title\n    description\n    filters\n    adOps {\n      tags\n      categories\n      genre\n      platforms\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.ChannelInfo=function(e,n){var i={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,o=new Set;for(t.forEach((function(e){o.add(e)}));o.size>0;){var l=o;o=new Set,l.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){o.add(e)})))}))}return r.forEach((function(n){var t=d(e,n);t&&i.definitions.push(t)})),i}(i,"ChannelInfo"),i.documentId="5ad7548fdef03c9d5823fd182b7f2df55c6bdd7c1341b316febecc5252c3b141"},E9Cz:function(e,n,i){"use strict";var t=i("nKUr"),a=i("rePB"),d=i("Ff2n"),r=(i("q1tI"),i("WHZb"));function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){Object(a.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}n.a=function(e){return function(n){var i=n.items,a=Object(d.a)(n,["items"]),o=Object(r.a)({items:i});return Object(t.jsx)(e,l({},l(l({},a),{},{items:o})))}}},MCUz:function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"abTest"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ABTest"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"represents"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"values"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"winnerIndex"},arguments:[],directives:[]}]}}],loc:{start:0,end:71}};i.loc.source={body:"fragment abTest on ABTest {\n  id\n  represents\n  values\n  winnerIndex\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},TgFc:function(e,n,i){"use strict";i.r(n),i.d(n,"NewsIndex",(function(){return $}));var t=i("o0o1"),a=i.n(t),d=i("ODXe"),r=i("HaE+"),o=i("nKUr"),l=i("rePB"),s=i("Ff2n"),c=(i("q1tI"),i("eMNQ")),m=i("zJC5"),u=i("sLj/"),v=i.n(u),k=i("DoTo"),f=i.n(k),g=i("F1wk"),p=i("suQY"),b=i("e1TJ"),N=i("4Fw0"),S=i("xBi5"),F=i.n(S),y=i("j2H6"),O=i("j3Zk"),h=i("oR23"),j=i("lTn/"),w=Object(y.a)(j.b),I=function(e){var n=e.activeFilter,i=e.endIndex,t=Object(b.c)(),a=t.region,d=t.title,r=t.canonical,l={filter:n,region:a,startIndex:Object(c.Hc)({endIndex:i}).startIndex,count:Object(c.Gc)(),newsOnly:!0},s=function(e){var n=e.activeFilter,i=void 0===n?"Latest":n;return"".concat(Object(c.td)({label:i})," News")}({activeFilter:n});return Object(o.jsx)(O.a,{query:F.a,notifyOnNetworkStatusChange:!0,variables:l,purge:"News Content Feed",children:function(e){var n,i=e.data,t=e.loadMore,a=e.networkStatus,l=null===i||void 0===i||null===(n=i.homepage)||void 0===n?void 0:n.contentFeed,m=l.contentItems,u=void 0===m?[]:m,v=l.pagination,k=void 0===v?{}:v;return Object(o.jsx)(h.a,{items:Object(c.Jb)(u),paginationCount:Object(c.Gc)(),pagination:k,networkStatus:a,onLoadMore:function(){return t(Object(c.Hc)(k),(function(e){return Object(c.Dc)({url:r,title:"".concat(d," (Page ").concat(e,")"),eventLabel:"virtualPageview"})}))},trackingComponent:"content-NewsFeed",children:Object(o.jsx)(w,{label:s,mainContentTrackingComponent:"content-newsFeed"})})}})};function T(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var D=function(e){var n=e.defaultFilter,i=void 0===n?"Latest":n,t=Object(s.a)(e,["defaultFilter"]),a=Object(b.c)().router,d=(void 0===a?{}:a).query||{},r=Object(c.t)({filterLabels:c.lc,route:"news-index",query:d});return Object(o.jsx)(N.a,{defaultFilter:i,filters:r,children:function(e){var n=e.activeFilter;return Object(o.jsx)(I,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?T(Object(i),!0).forEach((function(n){Object(l.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({activeFilter:n},t))}})},C=i("tFR/"),P=i("E9Cz"),x=i("ZwR/"),E=Object(P.a)((function(e){var n=e.items,i=void 0===n?[]:n;return Object(o.jsx)(x.a,{slug:"News",sectionHeader:{title:"Trending News"},items:i,trackingComponent:"content-newsTenUp"})})),V=Object(C.a)(Object(C.b)("items"),E);function q(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function A(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?q(Object(i),!0).forEach((function(n){Object(l.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var L=i("NOtv")("kraken:pages:news:index"),$=function(e){var n=e.page,i=e.items,t=Object(s.a)(e,["page","items"]);return Object(o.jsxs)(g.a,{children:[Object(o.jsx)(V,{items:i}),Object(o.jsx)(p.a,{mixName:"bigAd",position:0}),Object(o.jsx)(D,A({},t))]},n.slug)};$.getInitialProps=function(){var e=Object(r.a)(a.a.mark((function e(n){var i,t,r,o,l,s,m,u,k,g,p,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.query,t=n.res,r=n.apolloClient,o=n.region,l=i.filter,s=i.endIndex,m="news",u=Object(c.P)({filter:l,defaultFilter:"Latest"}),e.prev=4,e.next=7,Promise.all([Object(c.Oc)({apolloClient:r,query:f.a,dataPath:"channel",variables:{slug:m}}),Object(c.Oc)({apolloClient:r,query:v.a,dataPath:"topPages",variables:{contentType:"News",count:10,region:o}})]);case 7:return k=e.sent,g=Object(d.a)(k,2),p=g[0],b=g[1],e.abrupt("return",{items:b,page:A(A({},Object(c.cd)(A({filter:u},p))),{},{hasAds:!0,slug:m,routeName:"news-index"}),defaultFilter:u,endIndex:isNaN(parseInt(s))?void 0:parseInt(s)});case 14:return e.prev=14,e.t0=e.catch(4),e.abrupt("return",Object(c.Ac)({error:e.t0,res:t,debug:L}));case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(n){return e.apply(this,arguments)}}();n.default=Object(m.a)($)},eWLt:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"contentItemStandardFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContentItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"contentItemRequiredFields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"promoTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"canWatchRead"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"relatedMediaId"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"videoFields"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Article"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"review"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scoreText"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:337}};t.loc.source={body:"#import './contentItemRequiredFieldsFragment.gql'\n#import './videoFieldsFragment.gql'\nfragment contentItemStandardFields on ContentItem {\n  ...contentItemRequiredFields\n  title\n  promoTitle\n  thumbnailUrl\n  duration\n  canWatchRead\n  relatedMediaId\n  ...videoFields\n  ... on Article {\n    review {\n      score\n      scoreText\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function d(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}t.definitions=t.definitions.concat(d(i("ZLB7").definitions)),t.definitions=t.definitions.concat(d(i("7r43").definitions)),e.exports=t},"sLj/":function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PopularContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentType"}},type:{kind:"NamedType",name:{kind:"Name",value:"PopularContentTypeEnum"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topPages"},arguments:[{kind:"Argument",name:{kind:"Name",value:"contentType"},value:{kind:"Variable",name:{kind:"Name",value:"contentType"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"feedItem"},directives:[]}]}}]}}],loc:{start:0,end:212}};t.loc.source={body:"#import './fragments/feedItemFragment.gql'\n\nquery PopularContent($contentType: PopularContentTypeEnum, $count: Int, $region: String) {\n  topPages(contentType: $contentType, count: $count) {\n    ...feedItem\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}t.definitions=t.definitions.concat(i("snMA").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})));var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.PopularContent=function(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=r[n]||new Set,a=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var l=d;d=new Set,l.forEach((function(e){a.has(e)||(a.add(e),(r[e]||new Set).forEach((function(e){d.add(e)})))}))}return a.forEach((function(n){var t=o(e,n);t&&i.definitions.push(t)})),i}(t,"PopularContent"),t.documentId="56d223bd764cd0659a3637bfd743e73735f387163aa0291af8376aa5f8964a37"},snMA:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"feedItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ModernArticle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"abTests"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"abTest"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sponsorship"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"clickthroughUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"brandAssetImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Faceoff"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"abTests"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"abTest"},directives:[]}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Promotion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]},{kind:"Field",name:{kind:"Name",value:"abTests"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"abTest"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:580}};t.loc.source={body:"#import './modernContentFeedFragment.gql'\n#import './abTestFragment.gql'\n\nfragment feedItem on FeedItem {\n  ... on ModernArticle {\n    content {\n      ...modernContentFeed\n      abTests {\n        ...abTest\n      }\n      sponsorship {\n        type\n        name\n        clickthroughUrl\n        brandAssetImage {\n          url\n        }\n      }\n    }\n  }\n  ... on Faceoff {\n    content {\n      ...modernContentFeed\n      abTests {\n        ...abTest\n      }\n    }\n  }\n  ... on Promotion {\n    content {\n      ...modernContentFeed\n      abTests {\n        ...abTest\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function d(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}t.definitions=t.definitions.concat(d(i("AD/w").definitions)),t.definitions=t.definitions.concat(d(i("MCUz").definitions)),e.exports=t},vDAS:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return i("TgFc")}])},xBi5:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"NewsContentFeed"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"HomepageFeedFilterEnum"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"startIndex"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newsOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"homepage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contentFeed"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}},{kind:"Argument",name:{kind:"Name",value:"count"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}},{kind:"Argument",name:{kind:"Name",value:"startIndex"},value:{kind:"Variable",name:{kind:"Name",value:"startIndex"}}},{kind:"Argument",name:{kind:"Name",value:"newsOnly"},value:{kind:"Variable",name:{kind:"Name",value:"newsOnly"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isMore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endIndex"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"contentItems"},name:{kind:"Name",value:"feedItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"contentItemStandardFields"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ModernArticle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"modernContentFeed"},directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:633}};t.loc.source={body:"#import './fragments/contentItemStandardFieldsFragment.gql'\n#import './fragments/modernContentFeedFragment.gql'\n\nquery NewsContentFeed($filter: HomepageFeedFilterEnum!, $region: String, $count: Int, $startIndex: Int, $newsOnly: Boolean) {\n  homepage {\n    contentFeed(filter: $filter, region: $region, count: $count, startIndex: $startIndex, newsOnly: $newsOnly) {\n      pagination {\n        total\n        isMore\n        endIndex\n      }\n      contentItems: feedItems {\n        ...contentItemStandardFields\n        ... on ModernArticle {\n          content {\n            ...modernContentFeed\n          }\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function d(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)}))}function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}t.definitions=t.definitions.concat(d(i("eWLt").definitions)),t.definitions=t.definitions.concat(d(i("AD/w").definitions));var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.NewsContentFeed=function(e,n){var i={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,a=new Set,d=new Set;for(t.forEach((function(e){d.add(e)}));d.size>0;){var r=d;d=new Set,r.forEach((function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return a.forEach((function(n){var t=l(e,n);t&&i.definitions.push(t)})),i}(t,"NewsContentFeed"),t.documentId="13bef5508c5f2d4610f93df7c872b8a362cb0dae29eba4e4804eb11809e77760"}},[["vDAS",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,23]]]);
//# sourceMappingURL=news-69ccd35fe5be0e2d71ce.js.map