(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"3niX":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=c.cssRules();return c.flush(),e},t.default=void 0;var i,n=o("q1tI");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=new(((i=o("SevZ"))&&i.__esModule?i:{default:i}).default),u=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=a(this,p(t).call(this,e))).prevProps={},o}var o,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,n.Component),o=t,r=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],o=e[1];return c.computeId(t,o)}).join(" ")}}],(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){c.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&c.remove(this.prevProps),c.add(this.props),this.prevProps=this.props),null}}])&&s(o.prototype,i),r&&s(o,r),t}();t.default=u},"9kyW":function(e,t,o){"use strict";e.exports=function(e){for(var t=5381,o=e.length;o;)t=33*t^e.charCodeAt(--o);return t>>>0}},MX0m:function(e,t,o){e.exports=o("3niX")},SevZ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(o("9kyW")),n=r(o("bVZc"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.styleSheet,i=void 0===o?null:o,r=t.optimizeForSpeed,s=void 0!==r&&r,a=t.isBrowser,p=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=i||new n.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=p,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,o,r;return t=e,(o=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var o=this.getIdAndRules(e),i=o.styleId,n=o.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var r=n.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[i]=r,this._instancesCounts[i]=1}}},{key:"remove",value:function(e){var t=this,o=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(o in this._instancesCounts,"styleId: `".concat(o,"` not found")),this._instancesCounts[o]-=1,this._instancesCounts[o]<1){var i=this._fromServer&&this._fromServer[o];i?(i.parentNode.removeChild(i),delete this._fromServer[o]):(this._indices[o].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[o]),delete this._instancesCounts[o]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],o=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return o[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,o){if(!o)return"jsx-".concat(t);var n=String(o),r=t+n;return e[r]||(e[r]="jsx-".concat((0,i.default)("".concat(t,"-").concat(n)))),e[r]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(o,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var n=o+i;return t[n]||(t[n]=i.replace(e,o)),t[n]}}},{key:"getIdAndRules",value:function(e){var t=this,o=e.children,i=e.dynamic,n=e.id;if(i){var r=this.computeId(n,i);return{styleId:r,rules:Array.isArray(o)?o.map(function(e){return t.computeSelector(r,e)}):[this.computeSelector(r,o)]}}return{styleId:this.computeId(n),rules:Array.isArray(o)?o:[o]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,o),r&&s(t,r),e}();t.default=a},Sp0s:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles",function(){var e=o("raGG");return{page:e.default||e}}])},bVZc:function(e,t,o){"use strict";(function(e){function o(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.name,r=void 0===o?"stylesheet":o,a=t.optimizeForSpeed,p=void 0===a?i:a,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(n(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#".concat(r,"-deleted-rule____{}"),s("boolean"==typeof p,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=p,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,r,a;return t=e,(r=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,o){return"number"==typeof o?e._serverSheet.cssRules[o]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),o},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var o=this.getSheet();"number"!=typeof t&&(t=o.cssRules.length);try{o.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var o=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!o.cssRules[e])return e;o.deleteRule(e);try{o.insertRule(t,e)}catch(r){i||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),o.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];s(n,"old rule at index `".concat(e,"` not found")),n.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,o){return o?t=t.concat(e.getSheetForTag(o).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,o){t&&s(n(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-".concat(e),""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return o?r.insertBefore(i,o):r.appendChild(i),i}},{key:"length",get:function(){return this._rulesCount}}])&&o(t.prototype,r),a&&o(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=r}).call(this,o("8oxB"))},raGG:function(e,t,o){"use strict";o.r(t);var i=o("MX0m"),n=o.n(i),r=o("q1tI"),s=o.n(r);t.default=function(){return s.a.createElement("div",{className:"jsx-3204568327"},s.a.createElement(n.a,{id:"3204568327"},["#load{background-color:black;}","#logo_img{padding-top:8px;padding-bottom:8px;padding-left:8px;width:120px;cursor:pointer;-webkit-user-select:none;}","#logo_img:hover{opacity:0.7;}","#bar{background:#568af7;padding:5px 5px 5px 5px;}","#linkbar a{font-family:'Prompt',sans-serif;font-size:17px;color:white;-webkit-user-select:none;}","#linkbar a:hover{opacity:0.5;}","#toggledrop{padding-left:15px;padding-right:15px;}","#drop a{color:black;}",".servicecomponent .jumbotron{background:#f4f8fb;}",".doctorcomponent .jumbotron{background:#fff;}","#service{margin-top:30px;margin-bottom:30px;}","#home_img{-webkit-filter:brightness(60%);filter:brightness(60%);}","#content-img{height:80vh;}","#content-img p,h1,button{font-family:'Prompt',sans-serif;cursor:pointer;-webkit-user-select:none;}","#content-img button{position:relative;height:60px;font-size:30px;padding:0 2em;cursor:pointer;-webkit-transition:800ms ease all;transition:800ms ease all;outline:none;}","#service-name h2{font-family:'Prompt',sans-serif;}","#service-content{cursor:pointer;-webkit-user-select:none;}","#service-content img{padding-bottom:10px;}","#service-content img:hover{opacity:0.7;-webkit-filter:alpha(opacity=50);filter:alpha(opacity=50);}","#service-content .box{border:1px solid #f1f1f1;background-color:#ffffff;border-radius:10px;padding:10px;margin:10px 0px 10px 0px;}","#service-content p{font-size:17px;cursor:pointer;font-family:'Prompt',sans-serif;}","#doctor-name{font-family:'Prompt',sans-serif;}",".team_doctor h4{font-weight:bold;}",".team_doctor{font-family:'Raleway',sans-serif;}",".team_doctor img{width:100%;}","#doctor{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0;cursor:pointer;}","#doctor p{font-family:'Prompt',sans-serif;}","#question{padding-right:5px;}","#question p{font-size:17px;cursor:pointer;-webkit-user-select:none;}","#question img{-webkit-user-select:none;}","#question img:hover{-webkit-user-select:none;opacity:0.7;-webkit-filter:alpha(opacity=50);filter:alpha(opacity=50);}","#people{float:right;margin-left:20px;margin-right:0;cursor:pointer;}","#answer p{font-size:17px;float:right;cursor:pointer;-webkit-user-select:none;}","#answer img{float:right;margin-left:20px;margin-right:0;cursor:pointer;-webkit-user-select:none;}","#answer img:hover{opacity:0.7;-webkit-filter:alpha(opacity=50);filter:alpha(opacity=50);}","#login{padding-top:160px;padding-left:150px;padding-right:150px;}","#loginContent{background-color:#ebebeb;border-radius:5px;padding-top:50px;padding-left:50px;padding-right:50px;padding-bottom:50px;}","#login #loginContent{text-align:center;font-family:'Prompt',sans-serif;font-size:17px;}","#loginContent input{margin-top:10px;}","#loginContent #btlogin{margin-top:10px;padding:8px 25px 8px 25px;background-color:#568af7;color:#fff;}","#facebooklogin{background-color:#4267b2;}",".boxlogin{width:100%;}",".diseasecomponent .jumbotron{background:#fff;cursor:pointer;-webkit-user-select:none;}","#diseaseHeader{font-family:'Prompt',sans-serif;border-bottom:2px solid #000;}","#disease-content{font-family:'Prompt',sans-serif;}","#disease-content:hover{background:#568AF7;color:#fff;}","#disease-sub{font-family:'Sarabun',sans-serif;font-size:18px;}","#footer{padding:50px 0px 10px 0px;right:0;bottom:0;left:0;padding:'1rem';background-color:#EEEEEE;text-align:center;}","#footer p{font-family:'Roboto',sans-serif;}","@media (max-width:576px){li a{padding-top:10px;padding-right:10px;padding-left:10px;padding-bottom:10px;}#logo_img{padding-top:5px;padding-bottom:5px;width:120px;cursor:pointer;display:block;margin-left:auto;margin-right:auto;}#login{padding-top:160px;padding-left:60px;padding-right:60px;}}","#historybox p{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0;cursor:pointer;font-size:20px;}",".timeline p{padding-left:5px;color:black;font-family:'Prompt',sans-serif;}","ul.timeline{list-style-type:none;position:relative;}","ul.timeline:before{content:' ';background:#d4d9df;display:inline-block;position:absolute;left:29px;width:2px;height:100%;z-index:400;}","ul.timeline>li{margin:20px 0;}","ul.timeline>li:before{content:' ';background:white;display:inline-block;position:absolute;border-radius:50%;border:3px solid #22c0e8;left:20px;width:20px;height:20px;z-index:400;}","#bt-popup{bottom:0;right:0;position:fixed;margin-right:20px;}","#bt-popup .bt-click{padding-right:103px;padding-left:103px;}","#chatbox{font:30px 'Prompt',sans-serif;width:290px;background:#fff;border:2px solid #f0f1f2;border-radius:8px;border-color:#f0f1f2;overflow:hidden;height:484px;bottom:0;margin-bottom:38px;right:0;margin-right:20px;position:fixed;}","#chat-messages{margin-top:20px;margin-bottom:20px;width:290px;height:370px;overflow-y:scroll;overflow-x:hidden;-webkit-scroll-behavior:auto;-moz-scroll-behavior:auto;-ms-scroll-behavior:auto;scroll-behavior:auto;-webkit-overflow-scrolling:auto;padding-right:20px;-webkit-transition:all 200ms cubic-bezier(0.000,0.995,0.990,1.000);-moz-transition:all 200ms cubic-bezier(0.000,0.995,0.990,1.000);-ms-transition:all 200ms cubic-bezier(0.000,0.995,0.990,1.000);-o-transition:all 200ms cubic-bezier(0.000,0.995,0.990,1.000);-webkit-transition:all 200ms cubic-bezier(0.000,0.995,0.990,1.000);transition:all 200ms cubic-bezier(0.000,0.995,0.990,1.000);}","#chat-messages.animate{opacity:1;margin-top:0;}","#chatbox label{color:#aab8c2;font-weight:600;font-size:12px;text-align:center;margin:15px 0;width:290px;display:block;}","#chat-messages div.message{padding:0 0 30px 58px;clear:both;margin-bottom:45px;}","#chat-messages div.message.right{padding:0 58px 30px 0;margin-right:-19px;margin-left:19px;}","#chat-messages .message img{float:left;margin-left:-38px;border-radius:50%;width:30px;margin-top:12px;}","#chat-messages div.message.right img{float:right;margin-left:0;margin-right:-38px;}",".message .bubble{background:#f0f4f7;font-size:13px;font-weight:600;padding:12px 13px;border-radius:5px 5px 5px 0px;color:#8495a3;position:relative;float:left;}","#chat-messages div.message.right .bubble{float:right;border-radius:5px 5px 0px 5px;}",".bubble{font-family:'Prompt',sans-serif;}",'.bubble .corner{background:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/bubble-corner.png") 0 0 no-repeat;position:absolute;width:7px;height:7px;left:-5px;bottom:0;}','div.message.right .corner{background:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/bubble-cornerR.png") 0 0 no-repeat;left:auto;right:-5px;}',".bubble span{color:#aab8c2;font-size:11px;position:absolute;right:0;bottom:-22px;}","#sendmessage{height:60px;border-top:1px solid #e7ebee;position:absolute;bottom:0;right:0px;width:290px;background:#fff;padding-bottom:10px;}","#sendmessage input{overflow-wrap:break-word;}","#sendmessage input{border;}",'#sendmessage input{background:#fff;margin:21px 0 0 21px;border:none;padding:0;font-size:14px;font-family:"Open Sans",sans-serif;font-weight:400px;color:#aab8c2;}',"#sendmessage input:focus{outline:0;}",'#sendmessage button{background:#fff url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/send.png") 0 -41px no-repeat;width:30px;height:30px;position:absolute;right:15px;top:23px;border:none;}',"#sendmessage button:hover{cursor:pointer;background-position:0 0;}","#sendmessage button:focus{outline:0;}","#chatview,#sendmessage{overflow:hidden;border-radius:6px;}",".card-body h3{text-align:center;border-bottom:2px solid #000;padding-bottom:10px;}","#conclusion-sheet{font-family:'Sarabun',sans-serif;}","#data-user{line-height:0.3;text-indent:20px;border-bottom:2px solid #000;padding-top:10px;padding-bottom:10px;margin-bottom:10px;}","#symptom-user{border-bottom:2px solid #000;padding-bottom:10px;margin-bottom:10px;}","#doctor-advice{text-indent:40px;}","@media (max-width:768px) #login{padding-top:50px;padding-left:15px;padding-right:15px;}","@media (max-width:768px) #loginContent{background-color:#ebebeb;border-radius:5px;padding-top:50px;padding-left:50px;padding-right:50px;padding-bottom:50px;}","@media (max-width:768px) #login #loginContent{text-align:center;font-family:'Prompt',sans-serif;font-size:17px;}","@media (max-width:992px){}","@media (max-width:1200px){}"]))}}},[["Sp0s",1,0]]]);