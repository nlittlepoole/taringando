(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),r=a.n(l),s=(a(23),a(12)),o=a(13),i=a(15),m=a(14),u=a(16),h=a(1),d=a(3),g=a.n(d);function v(e){var t=(e.channels?e.channels.items:[]).map(function(t,a){return c.a.createElement(p,{key:a,item:t,onClick:e.onClick})});return c.a.createElement("section",{class:"section"},c.a.createElement("div",{class:"container"},t))}function p(e){return c.a.createElement("article",{class:"media"},c.a.createElement("figure",{class:"media-left"},c.a.createElement("p",{class:"image is-64x64"},c.a.createElement("img",{src:e.item.thumbnail}))),c.a.createElement("div",{class:"media-content",onClick:function(t){return e.onClick(t,e.item.name)}},c.a.createElement("div",{class:"content"},c.a.createElement("p",null,c.a.createElement("strong",null,e.item.title)," ",c.a.createElement("small",null,e.item.stories)," ",c.a.createElement("small",null,"Stories"),c.a.createElement("br",null),e.item.description))))}function E(e){var t=e.query?c.a.createElement("input",{class:"input",value:e.query,type:"text",placeholder:"Channel",onChange:e.inputChange}):c.a.createElement("input",{class:"input",type:"text",placeholder:"Channel",onChange:e.inputChange});return c.a.createElement("section",{class:"section"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"field has-addons"},c.a.createElement("p",{class:"control is-expanded"},t),c.a.createElement("p",{class:"control"},c.a.createElement("a",{class:"button is-info",onClick:e.onClick},"Search")))))}function y(e){var t=e.posts?e.posts.items:[],a=t.map(function(t,a){return c.a.createElement(f,{key:a,post:t,onClick:e.onClick})});return console.log(e.posts,t),c.a.createElement("section",{class:"section"},c.a.createElement("div",{class:"container"},a))}function f(e){return c.a.createElement("article",{class:"media"},c.a.createElement("figure",{class:"media-left"},c.a.createElement("p",{class:"image is-64x64"},c.a.createElement("img",{src:e.post.summary.images.slice[0]?e.post.summary.images.slice[0].url:"https://cdn-images-1.medium.com/max/1200/1*SNI2ONdjDxSA3zeHYaMazg.png"}))),c.a.createElement("div",{class:"media-content",onClick:function(t){return e.onClick(t,e.post)}},c.a.createElement("div",{class:"content"},c.a.createElement("p",null,c.a.createElement("strong",null,e.post.title)," ",c.a.createElement("small",null,e.post.comments)," ",c.a.createElement("small",null,"Comments"),c.a.createElement("br",null),e.post.summary.excerpt))))}function C(e){console.log(e);var t=e.story.comments?e.story.comments.items.map(function(e,t){return c.a.createElement(S,{key:t,comment:e})}):"Loading Comments";return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{class:"section"},c.a.createElement("div",{class:"container"},c.a.createElement("h1",{className:"title"},e.story.original?e.story.original.data.title:"Loading"),c.a.createElement("h2",{class:"subtitle"},e.story.original?e.story.original.data.date:"Loading"),c.a.createElement("div",{className:"content is-medium",dangerouslySetInnerHTML:{__html:e.story.original?e.story.original.data.html:"Loading"}}))),c.a.createElement("section",{class:"section"},c.a.createElement("div",{class:"container"},c.a.createElement("h1",{className:"title"},"Comments:"),t)))}function S(e){var t=e.comment.replies?e.comment.replies.items.map(function(e,t){return c.a.createElement(S,{key:t,comment:e})}):"",a="http://translate.google.com/#auto/en/"+e.comment.body;return c.a.createElement("article",{class:"media"},c.a.createElement("figure",{class:"media-left"},c.a.createElement("p",{class:"image is-64x64"},c.a.createElement("img",{src:e.comment.owner.avatar}))),c.a.createElement("div",{class:"media-content"},c.a.createElement("div",{class:"content"},c.a.createElement("p",null,c.a.createElement("strong",null,e.comment.owner.firstname+" "+e.comment.owner.lastname),c.a.createElement("br",null),e.comment.body,c.a.createElement("br",null),c.a.createElement("small",null,c.a.createElement("a",{target:"_blank",href:a},"Translate")," \xb7 ",c.a.createElement("a",null,e.comment.upvotes-e.comment.downvotes," Points")," \xb7 ",e.comment.created))),t))}var b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={activeStory:null,activeChannel:null,activeChannelSearch:null,searchQuery:null},a.topChannels(),a.searchChannels=a.searchChannels.bind(Object(h.a)(Object(h.a)(a))),a.handleSearch=a.handleSearch.bind(Object(h.a)(Object(h.a)(a))),a.handleQueryChange=a.handleQueryChange.bind(Object(h.a)(Object(h.a)(a))),a.handleChannelSelect=a.handleChannelSelect.bind(Object(h.a)(Object(h.a)(a))),a.handleStorySelect=a.handleStorySelect.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"topChannels",value:function(){var e=this;g.a.get("https://www.taringa.net/apiv7/c/list/hot?count=100&after=ina0&sort=hotness/").then(function(t){e.setState({activeChannelSearch:t.data,activeChannel:null,activeStory:null})}).catch(function(e){console.log(e.message),alert(e)})}},{key:"searchChannels",value:function(e){var t=this,a={params:{q:e,count:100}};g.a.get("https://www.taringa.net/apiv7/search/channel",a).then(function(e){t.setState({activeChannelSearch:e.data,activeChannel:null,activeStory:null})}).catch(function(e){console.log(e.message),alert(e)})}},{key:"handleQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),this.searchChannels(this.state.searchQuery)}},{key:"handleChannelSelect",value:function(e,t){var a=this;g.a.get("https://www.taringa.net/apiv7/c/".concat(t,"/feed"),{params:{count:100,sort:"bigbang1d"}}).then(function(e){a.setState({activeChannel:e.data})}).catch(function(e){console.log(e.message),alert(e)})}},{key:"handleStorySelect",value:function(e,t){var a=this;g.a.get("https://www.taringa.net/apiv7/story/".concat(t.id,"/comments?sort=created-desc&count=500&repliesCount=100&repliesSort=created-desc")).then(function(e){var t=a.state.activeStory?a.state.activeStory:{};t.comments=e.data,a.setState({activeStory:t})}).catch(function(e){console.log(e.message),alert(e)});var n={params:{source_url:"http://www.taringa.net/+".concat(t.channel.name,"/").concat(t.slug,"/")}};g.a.get("https://outlineapi.com/v2/parse_article",n).then(function(e){var t=a.state.activeStory?a.state.activeStory:{};t.original=e.data,a.setState({activeStory:t})}).catch(function(e){console.log(e.message),alert(e)})}},{key:"render",value:function(){var e=c.a.createElement(v,{channels:this.state.activeChannelSearch,onClick:this.handleChannelSelect});return this.state.activeStory?(e=c.a.createElement(C,{story:this.state.activeStory}),console.log("Story time")):this.state.activeChannel&&(e=c.a.createElement(y,{posts:this.state.activeChannel,onClick:this.handleStorySelect})),c.a.createElement("div",{className:"App"},c.a.createElement(E,{query:this.state.searchQuery,inputChange:this.handleQueryChange,onClick:this.handleSearch}),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.60d15edc.chunk.js.map