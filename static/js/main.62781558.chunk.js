(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports={App:"Section_App__2b0Ni"}},26:function(e,t,a){},27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),i=(a(26),a(10)),s=a(4),l=a(5),u=a(7),m=a(6),h=(a(27),a(19)),g=a.n(h),d="https://pixabay.com/api/",p="22530693-10a6882b39438d2f880057b1b";function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return g.a.get("".concat(d,"?q=").concat(e,"&page=").concat(t,"&key=").concat(p,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})).catch((function(e){return console.log(e)}))}var b=a(0),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.onInputChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.imageName.trim())return alert("Please, enter smthk"),void e.reset();e.props.onSubmit(e.state.imageName),e.reset()},e.reset=function(){e.setState({imageName:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.onInputChange})]})})}}]),a}(n.Component);function v(e){var t=e.image,a=e.onClick,n=t.id,r=t.webformatURL,o=t.tags,c=t.largeImageURL;return Object(b.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(b.jsx)("img",{src:r,alt:o,className:"ImageGalleryItem-image","data-url":c})},n)}function O(e){var t=e.images,a=e.onClick;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.jsx)(v,{onClick:a,image:e},e.id)}))})}var x=document.querySelector("#modal-root"),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackDropClick,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),x)}}]),a}(n.Component);function S(e){var t=e.onBtnClick;return Object(b.jsx)("div",{className:"btnWrapper",children:Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load More"})})}a(47);var w=a(20),k=a.n(w),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(k.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),a}(n.Component),C=a(21),I=a.n(C);function M(e){var t=e.children;return Object(b.jsx)("div",{className:I.a.App,children:t})}var L=a.p+"static/media/errorImage.331050ce.jpg";function A(e){var t=e.textError;return Object(b.jsxs)("div",{role:"alert",children:[Object(b.jsx)("img",{src:L,alt:"sadTony",width:"300"}),Object(b.jsx)("p",{children:t})]})}var B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],imageName:"",page:1,error:null,showModal:!1,largeImageURL:"",tags:"",status:"idle"},e.fetchApiService=function(){var t=e.state,a=t.imageName,n=t.page;j(a,n).then((function(t){0!==t.length?(t.length,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1,status:"resolved"}})),1!==n&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):e.setState({status:"rejected",error:"Ooops, something went wrong"})})).catch((function(t){return e.setState({error:"Ooops, something went wrong",status:"rejected"})}))},e.onLoadMoreClick=function(){e.fetchApiService(),e.setState({status:"resolved"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onSubmit=function(t){e.setState({imageName:t,page:1,images:[],status:"pending"})},e.openBigImage=function(t){e.setState({largeImageURL:t.target.dataset.url,tags:t.target.alt}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.imageName,r=a.page;t.imageName!==n&&(this.setState({status:"pending"}),this.fetchApiService(n,r))}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.largeImageURL,n=e.tags,r=e.images,o=e.status,c=e.error;return Object(b.jsxs)(M,{className:"App",children:[Object(b.jsx)(f,{onSubmit:this.onSubmit,state:this.state}),"resolved"===o&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{images:r,onClick:this.openBigImage}),r.length>=12&&Object(b.jsx)(S,{onBtnClick:this.onLoadMoreClick})]}),"pending"===o&&Object(b.jsx)(N,{}),"rejected"===o&&Object(b.jsx)(A,{textError:c}),t&&Object(b.jsx)(y,{onClose:this.toggleModal,children:Object(b.jsx)("img",{src:a,alt:n})})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.62781558.chunk.js.map