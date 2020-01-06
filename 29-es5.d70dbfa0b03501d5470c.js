var __extends=this&&this.__extends||function(){var l=function(n,u){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])})(n,u)};return function(n,u){function t(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"4h9M":function(l,n,u){"use strict";u.d(n,"a",(function(){return a}));var t=u("mrSG"),e=u("8Y7J"),s=u("TLGh"),a=function(){var l=function(){function l(l,n,u){this.el=l,this.renderer=n,this.hostService=u,this.stateChange=new e.m,this.variant="neutral",this.renderer.addClass(this.el.nativeElement,"slds-button"),this.renderer.addClass(this.el.nativeElement,"slds-button_stateful"),this.renderer.setAttribute(this.el.nativeElement,"aria-live","assertive")}return l.prototype.onSelectChange=function(){this.stateChange.emit(!this.state)},l.prototype.onFocusToggle=function(l){this.focused=!!+l,this.focused||this.setHostClass()},l.prototype.ngOnInit=function(){this.setHostClass()},l.prototype.ngOnChanges=function(){this.setHostClass()},l.prototype.setHostClass=function(){var l;this.hostService.updateClass(this.el,((l={})["slds-button_"+("text"===this.variant?"reset":this.variant)]=!!this.variant,l["slds-is-selected-clicked"]=this.state&&this.focused,l["slds-is-selected"]=this.state&&!this.focused,l["slds-not-selected"]=!this.state,l))},l}();return t.a([Object(s.a)(),t.b("design:type",Boolean)],l.prototype,"state",void 0),l}()},AxYp:function(l,n,u){"use strict";u.d(n,"a",(function(){return s}));var t=u("bijG"),e=u("SlX+"),s=function(){function l(l,n,u){this.xPos="0",u.setAttribute(n.nativeElement,"aria-hidden","true");var t=Object.assign({},new e.b,l);this.path=t.svgPath}return Object.defineProperty(l.prototype,"iconName",{set:function(l){var n=Object(t.a)(l).split(":"),u=n[0],e=n[1];this.iconPath=this.path+"/"+u+"-sprite/svg/symbols.svg#"+e},enumerable:!0,configurable:!0}),l}()},FfV1:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},s=function(){},a=u("pMnS"),o=u("jsLU"),i=u("AxYp"),r=u("SlX+"),c=u("SVse"),b=u("fnp8"),p=t.pb({encapsulation:2,styles:[],data:{}});function d(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,4,"button",[["class","slds-button slds-section__title-action"],["type","button"]],[[1,"aria-controls",0],[1,"aria-expanded",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggle(u)&&t),t}),null,null)),(l()(),t.rb(1,0,null,null,1,":svg:svg",[["class","slds-section__title-action-icon slds-button__icon slds-button__icon_left"],["nglIconName","switch"]],null,null,null,o.b,o.a)),t.qb(2,49152,null,0,i.a,[[2,r.a],t.k,t.C],{iconName:[0,"iconName"]},null),(l()(),t.rb(3,0,null,null,1,"span",[["class","slds-truncate"]],[[8,"title",0]],null,null,null,null)),(l()(),t.Kb(4,null,["",""]))],(function(l,n){l(n,2,0,"switch")}),(function(l,n){var u=n.component;l(n,0,0,u.uid,u.expanded),l(n,3,0,u.title),l(n,4,0,u.title)}))}function h(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"span",[["class","slds-truncate slds-p-horizontal_small"]],[[8,"title",0]],null,null,null,null)),(l()(),t.Kb(1,null,["",""]))],null,(function(l,n){var u=n.component;l(n,0,0,u.title),l(n,1,0,u.title)}))}function m(l){return t.Mb(2,[(l()(),t.rb(0,0,null,null,3,"h3",[["class","slds-section__title"]],[[2,"slds-theme_shade",null]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,d)),t.qb(2,16384,null,0,c.o,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.gb(0,[["simple_title",2]],null,0,null,h)),(l()(),t.rb(4,0,null,null,1,"div",[["class","slds-section__content"]],[[1,"aria-hidden",0],[1,"id",0]],null,null,null,null)),t.Bb(null,0)],(function(l,n){l(n,2,0,n.component.collapsable,t.Cb(n,3))}),(function(l,n){var u=n.component;l(n,0,0,!u.collapsable),l(n,4,0,!u.expanded,u.uid)}))}var f=u("IVul"),g=u("ttgq"),K=u("hk0e"),v=function(){function l(){this.open=!0,this.collapsable=!0}return l.prototype.change=function(){this.collapsable=!this.collapsable},l}(),k=t.pb({encapsulation:2,styles:[],data:{}});function y(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ngl-expandable-section",[["title","Section Title"]],[[2,"slds-section",null],[2,"slds-is-open",null]],[[null,"openChange"]],(function(l,n,u){var t=!0;return"openChange"===n&&(t=!1!==(l.component.open=u)&&t),t}),m,p)),t.qb(1,49152,null,0,b.a,[],{title:[0,"title"],collapsable:[1,"collapsable"],open:[2,"open"]},{openChange:"openChange"}),(l()(),t.Kb(-1,0,[" Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.\n"])),(l()(),t.rb(3,0,null,null,3,"button",[["class","slds-m-top_large"],["nglButton",""],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.change()&&t),t}),f.b,f.a)),t.Hb(512,null,g.a,g.a,[t.D]),t.qb(5,638976,null,0,K.a,[t.k,t.C,g.a],null,null),(l()(),t.Kb(-1,0,["Toggle Collapsable"]))],(function(l,n){var u=n.component;l(n,1,0,"Section Title",u.collapsable,u.open),l(n,5,0)}),(function(l,n){l(n,0,0,!0,t.Cb(n,1).expanded)}))}var C=u("tHxD"),_=u("M6rV"),A=t.pb({encapsulation:2,styles:[],data:{}});function x(l){return t.Mb(0,[(l()(),t.Kb(-1,null,["\n      "])),(l()(),t.rb(1,0,null,null,101,"pre",[["class","language-markup"],["ngNonBindable",""]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,100,"code",[],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,39,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["<"])),(l()(),t.Kb(-1,null,["ngl-expandable-section"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(9,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["[(open)]"])),(l()(),t.rb(11,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.rb(14,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,["open"])),(l()(),t.rb(17,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(20,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["title"])),(l()(),t.rb(22,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),t.rb(23,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.rb(25,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,["Section Title"])),(l()(),t.rb(28,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(31,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["[collapsable]"])),(l()(),t.rb(33,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),t.rb(34,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.rb(36,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,["collapsable"])),(l()(),t.rb(39,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.rb(41,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[">"])),(l()(),t.Kb(-1,null,["\n  Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\n  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\n  sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.\n"])),(l()(),t.rb(44,0,null,null,6,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(45,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(46,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["</"])),(l()(),t.Kb(-1,null,["ngl-expandable-section"])),(l()(),t.rb(49,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[">"])),(l()(),t.Kb(-1,null,["\n"])),(l()(),t.rb(52,0,null,null,42,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(53,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(54,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["<"])),(l()(),t.Kb(-1,null,["button"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(58,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["class"])),(l()(),t.rb(60,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),t.rb(61,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.rb(63,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,["slds-m-top_large"])),(l()(),t.rb(66,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(69,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["type"])),(l()(),t.rb(71,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),t.rb(72,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.rb(74,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,["button"])),(l()(),t.rb(77,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(80,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["nglButton"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(83,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["(click)"])),(l()(),t.rb(85,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),t.rb(86,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.rb(88,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.Kb(-1,null,["change()"])),(l()(),t.rb(91,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"'])),(l()(),t.rb(93,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[">"])),(l()(),t.Kb(-1,null,["Toggle Collapsable"])),(l()(),t.rb(96,0,null,null,6,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(97,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),t.rb(98,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["</"])),(l()(),t.Kb(-1,null,["button"])),(l()(),t.rb(101,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[">"])),(l()(),t.Kb(-1,null,["\n    "]))],null,null)}function D(l){return t.Mb(0,[(l()(),t.Kb(-1,null,["\n      "])),(l()(),t.rb(1,0,null,null,108,"pre",[["class","language-typescript"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,107,"code",[],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["import"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(6,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(7,null,["",""])),(l()(),t.Kb(-1,null,[" Component "])),(l()(),t.rb(9,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(10,null,["",""])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(12,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["from"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(15,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["'@angular/core'"])),(l()(),t.rb(17,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[";"])),(l()(),t.Kb(-1,null,["\n\n@"])),(l()(),t.rb(20,0,null,null,1,"span",[["class","token function"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Component"])),(l()(),t.rb(22,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["("])),(l()(),t.rb(24,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(25,null,["",""])),(l()(),t.Kb(-1,null,["\n  selector"])),(l()(),t.rb(27,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[":"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(30,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["'app-demo-sections-basic'"])),(l()(),t.rb(32,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[","])),(l()(),t.Kb(-1,null,["\n  templateUrl"])),(l()(),t.rb(35,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[":"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(38,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["'./basic.html'"])),(l()(),t.rb(40,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[","])),(l()(),t.Kb(-1,null,["\n"])),(l()(),t.rb(43,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(44,null,["",""])),(l()(),t.rb(45,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[")"])),(l()(),t.Kb(-1,null,["\n"])),(l()(),t.rb(48,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["export"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(51,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["class"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(54,0,null,null,1,"span",[["class","token class-name"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["DemoSectionsBasic"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(57,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(58,null,["",""])),(l()(),t.Kb(-1,null,["\n  open "])),(l()(),t.rb(60,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(63,0,null,null,1,"span",[["class","token boolean"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["true"])),(l()(),t.rb(65,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[";"])),(l()(),t.Kb(-1,null,["\n  collapsable "])),(l()(),t.rb(68,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(71,0,null,null,1,"span",[["class","token boolean"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["true"])),(l()(),t.rb(73,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[";"])),(l()(),t.Kb(-1,null,["\n\n  "])),(l()(),t.rb(76,0,null,null,1,"span",[["class","token function"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["change"])),(l()(),t.rb(78,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["("])),(l()(),t.rb(80,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[")"])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(83,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(84,null,["",""])),(l()(),t.Kb(-1,null,["\n    "])),(l()(),t.rb(86,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["this"])),(l()(),t.rb(88,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["."])),(l()(),t.Kb(-1,null,["collapsable "])),(l()(),t.rb(91,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["="])),(l()(),t.Kb(-1,null,[" "])),(l()(),t.rb(94,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["!"])),(l()(),t.rb(96,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["this"])),(l()(),t.rb(98,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["."])),(l()(),t.Kb(-1,null,["collapsable"])),(l()(),t.rb(101,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[";"])),(l()(),t.Kb(-1,null,["\n  "])),(l()(),t.rb(104,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(105,null,["",""])),(l()(),t.Kb(-1,null,["\n"])),(l()(),t.rb(107,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),t.Kb(108,null,["",""])),(l()(),t.Kb(-1,null,["\n"])),(l()(),t.Kb(-1,null,["\n    "]))],null,(function(l,n){l(n,7,0,"{"),l(n,10,0,"}"),l(n,25,0,"{"),l(n,44,0,"}"),l(n,58,0,"{"),l(n,84,0,"{"),l(n,105,0,"}"),l(n,108,0,"}")}))}function S(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,10,"header",[["class","component__header slds-border_bottom slds-grid slds-wrap slds-m-bottom_medium"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","slds-has-flexi-truncate slds-align-middle"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"h1",[["style","text-transform: capitalize"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" sections "])),(l()(),t.rb(4,0,null,null,6,"div",[["class","slds-align-middle slds-text-body_small"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"a",[["class","slds-button slds-button_neutral"],["href","https://www.lightningdesignsystem.com/components/expandable-section"],["target","_blank"],["title","External link to Salesforce Lightning Design System Site"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Lightning"])),(l()(),t.rb(7,0,null,null,3,"a",[["class","slds-button slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/sections"],["target","_blank"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,2,"div",[["class","slds-grid slds-grid_vertical-align-center"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,0,"img",[["src","assets/images/github.svg"],["style","height:15px; width:15px; margin-right:0.5rem;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Source"])),(l()(),t.rb(11,0,null,null,2,"div",[["class","slds-m-vertical_medium readme"]],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Section Titles are interactive titles that open and close sections, typically on a form."])),(l()(),t.rb(14,0,null,null,12,"div",[["class","slds-m-vertical_medium"]],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Examples"])),(l()(),t.rb(17,0,null,null,9,"div",[["class","slds-box slds-is-relative slds-theme_default slds-m-bottom_large"],["style","padding-top: 1.5rem;"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,1,"div",[["class","example__header slds-text-heading_small"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Basic Usage"])),(l()(),t.rb(20,0,null,null,1,"app-demo-sections-basic",[],null,null,null,y,k)),t.qb(21,49152,null,0,v,[],null,null),(l()(),t.gb(0,[["markupbasic",2]],null,0,null,x)),(l()(),t.gb(0,[["tsbasic",2]],null,0,null,D)),(l()(),t.rb(24,0,null,null,2,"div",[["class","slds-is-relative slds-m-top_large"],["style","min-height: 25px;"]],null,null,null,null,null)),(l()(),t.rb(25,0,null,null,1,"app-demo-example-docs",[["dir","sections"],["file","basic"],["markupRaw","%0A%3Cngl-expandable-section%20%5B(open)%5D%3D%22open%22%20title%3D%22Section%20Title%22%20%5Bcollapsable%5D%3D%22collapsable%22%3E%0A%20%20Aenean%20eu%20leo%20quam.%20Pellentesque%20ornare%20sem%20lacinia%20quam%20venenatis%20vestibulum.%0A%20%20Fusce%20dapibus%2C%20tellus%20ac%20cursus%20commodo%2C%20tortor%20mauris%20condimentum%20nibh%2C%20ut%20fermentum%20massa%20justo%0A%20%20sit%20amet%20risus.%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%0A%20%20Nullam%20quis%20risus%20eget%20urna%20mollis%20ornare%20vel%20eu%20leo.%20Nulla%20vitae%20elit%20libero%2C%20a%20pharetra%20augue.%0A%3C%2Fngl-expandable-section%3E%0A%3Cbutton%20class%3D%22slds-m-top_large%22%20type%3D%22button%22%20nglButton%20(click)%3D%22change()%22%3EToggle%20Collapsable%3C%2Fbutton%3E"],["tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-sections-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoSectionsBasic%20%7B%0A%20%20open%20%3D%20true%3B%0A%20%20collapsable%20%3D%20true%3B%0A%0A%20%20change()%20%7B%0A%20%20%20%20this.collapsable%20%3D%20!this.collapsable%3B%0A%20%20%7D%0A%7D%0A"]],null,null,null,C.b,C.a)),t.qb(26,49152,null,0,_.a,[],{dir:[0,"dir"],file:[1,"file"],ts:[2,"ts"],markup:[3,"markup"],tsRaw:[4,"tsRaw"],markupRaw:[5,"markupRaw"]},null),(l()(),t.rb(27,0,null,null,58,"div",[["class","slds-m-vertical_medium"]],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["API"])),(l()(),t.rb(30,0,null,null,55,"div",[["class","slds-box slds-theme_default"]],null,null,null,null,null)),(l()(),t.rb(31,0,null,null,54,"div",[["class","api"]],null,null,null,null,null)),(l()(),t.rb(32,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["<ngl-expandable-section>"])),(l()(),t.rb(34,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["NglExpandableSection"])),(l()(),t.rb(36,0,null,null,49,"table",[],null,null,null,null,null)),(l()(),t.rb(37,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.rb(38,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Property"])),(l()(),t.rb(41,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Description"])),(l()(),t.rb(43,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Type"])),(l()(),t.rb(45,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Default"])),(l()(),t.rb(47,0,null,null,38,"tbody",[],null,null,null,null,null)),(l()(),t.rb(48,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(49,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(50,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["[title]"])),(l()(),t.rb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Section's title."])),(l()(),t.rb(54,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["string"])),(l()(),t.rb(56,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),t.rb(57,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.rb(58,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(59,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["[open]"])),(l()(),t.rb(61,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Whether section's body is collapsed or not."])),(l()(),t.rb(63,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["boolean"])),(l()(),t.rb(65,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["false"])),(l()(),t.rb(67,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.rb(68,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(69,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["[collapsable]"])),(l()(),t.rb(71,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Whether section's body is able to collapse or not."])),(l()(),t.rb(73,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["boolean"])),(l()(),t.rb(75,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["true"])),(l()(),t.rb(77,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(78,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(79,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["(openChange)"])),(l()(),t.rb(81,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Emits event when the body is going collapse or open."])),(l()(),t.rb(83,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["EventEmitter<boolean>"])),(l()(),t.rb(85,0,null,null,0,"td",[],null,null,null,null,null))],(function(l,n){l(n,26,0,"sections","basic",t.Cb(n,23),t.Cb(n,22),"import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-sections-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoSectionsBasic%20%7B%0A%20%20open%20%3D%20true%3B%0A%20%20collapsable%20%3D%20true%3B%0A%0A%20%20change()%20%7B%0A%20%20%20%20this.collapsable%20%3D%20!this.collapsable%3B%0A%20%20%7D%0A%7D%0A","%0A%3Cngl-expandable-section%20%5B(open)%5D%3D%22open%22%20title%3D%22Section%20Title%22%20%5Bcollapsable%5D%3D%22collapsable%22%3E%0A%20%20Aenean%20eu%20leo%20quam.%20Pellentesque%20ornare%20sem%20lacinia%20quam%20venenatis%20vestibulum.%0A%20%20Fusce%20dapibus%2C%20tellus%20ac%20cursus%20commodo%2C%20tortor%20mauris%20condimentum%20nibh%2C%20ut%20fermentum%20massa%20justo%0A%20%20sit%20amet%20risus.%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%0A%20%20Nullam%20quis%20risus%20eget%20urna%20mollis%20ornare%20vel%20eu%20leo.%20Nulla%20vitae%20elit%20libero%2C%20a%20pharetra%20augue.%0A%3C%2Fngl-expandable-section%3E%0A%3Cbutton%20class%3D%22slds-m-top_large%22%20type%3D%22button%22%20nglButton%20(click)%3D%22change()%22%3EToggle%20Collapsable%3C%2Fbutton%3E")}),null)}var w=t.nb("app-demo-sections",e,(function(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"app-demo-sections",[],null,null,null,S,A)),t.qb(1,49152,null,0,e,[],null,null)],null,null)}),{},{},[]),q=u("iInd"),j=u("OZ9h"),N=u("uhgx"),B=u("RVgz"),O=u("niFT"),E=u("r2tc"),M=u("dH7C");u.d(n,"NglDemoSectionsModuleNgFactory",(function(){return P}));var P=t.ob(s,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[a.a,w]],[3,t.j],t.v]),t.Ab(4608,c.q,c.p,[t.s,[2,c.L]]),t.Ab(1073742336,c.c,c.c,[]),t.Ab(1073742336,q.o,q.o,[[2,q.t],[2,q.k]]),t.Ab(1073742336,j.a,j.a,[]),t.Ab(1073742336,N.a,N.a,[]),t.Ab(1073742336,B.a,B.a,[]),t.Ab(1073742336,O.a,O.a,[]),t.Ab(1073742336,E.a,E.a,[]),t.Ab(1073742336,M.a,M.a,[]),t.Ab(1073742336,s,s,[]),t.Ab(1024,q.i,(function(){return[[{path:"",component:e}]]}),[])])}))},IVul:function(l,n,u){"use strict";u.d(n,"a",(function(){return i})),u.d(n,"b",(function(){return b}));var t=u("8Y7J"),e=u("jsLU"),s=u("AxYp"),a=u("SlX+"),o=u("SVse"),i=(u("ttgq"),u("hk0e"),t.pb({encapsulation:2,styles:[],data:{}}));function r(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,":svg:svg",[["class","slds-button__icon slds-button__icon_left"]],null,null,null,e.b,e.a)),t.qb(1,49152,null,0,s.a,[[2,a.a],t.k,t.C],{iconName:[0,"iconName"]},null)],(function(l,n){l(n,1,0,n.component.iconName)}),null)}function c(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,":svg:svg",[["class","slds-button__icon slds-button__icon_right"]],null,null,null,e.b,e.a)),t.qb(1,49152,null,0,s.a,[[2,a.a],t.k,t.C],{iconName:[0,"iconName"]},null)],(function(l,n){l(n,1,0,n.component.iconName)}),null)}function b(l){return t.Mb(2,[(l()(),t.gb(16777216,null,null,1,null,r)),t.qb(1,16384,null,0,o.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null),t.Bb(null,0),(l()(),t.gb(16777216,null,null,1,null,c)),t.qb(4,16384,null,0,o.o,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.hasLeftIcon()),l(n,4,0,u.hasRightIcon())}),null)}},OZ9h:function(l,n,u){"use strict";u.d(n,"a",(function(){return t})),u("tC/h"),u("AxYp");var t=function(){}},RVgz:function(l,n,u){"use strict";u.d(n,"a",(function(){return t})),u("hk0e"),u("4h9M"),u("q4jQ");var t=function(){}},"SlX+":function(l,n,u){"use strict";u.d(n,"a",(function(){return t})),u.d(n,"b",(function(){return e}));var t=new(u("8Y7J").o)("ngl-icon-config"),e=function(){this.svgPath="assets/icons"}},bijG:function(l,n,u){"use strict";function t(l){return l.indexOf(":")>-1?l:"utility:"+l}u.d(n,"a",(function(){return t}))},fnp8:function(l,n,u){"use strict";u.d(n,"a",(function(){return s}));var t=u("8Y7J"),e=u("xYf+"),s=function(){function l(){this.collapsable=!0,this.open=!1,this.openChange=new t.m,this._uid=Object(e.g)("expandable-section")}return Object.defineProperty(l.prototype,"expanded",{get:function(){return!this.collapsable||this.open},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"uid",{get:function(){return this.collapsable?this._uid:void 0},enumerable:!0,configurable:!0}),l.prototype.toggle=function(l){l.preventDefault(),this.openChange.emit(!this.open)},l}()},hk0e:function(l,n,u){"use strict";u.d(n,"a",(function(){return t})),u("ttgq");var t=function(){function l(l,n,u){this.el=l,this.renderer=n,this.hostService=u,this.variant="neutral",this.iconPosition="left",this.renderer.addClass(this.el.nativeElement,"slds-button")}return l.prototype.ngOnInit=function(){this.setHostClass()},l.prototype.ngOnChanges=function(l){l.variant&&this.setHostClass()},l.prototype.hasLeftIcon=function(){return this.iconName&&(!this.iconPosition||"left"===this.iconPosition)},l.prototype.hasRightIcon=function(){return this.iconName&&"right"===this.iconPosition},l.prototype.setHostClass=function(){var l;this.hostService.updateClass(this.el,((l={})["slds-button_"+this.variant]=this.variant&&"base"!==this.variant,l))},l}()},jsLU:function(l,n,u){"use strict";u.d(n,"a",(function(){return e})),u.d(n,"b",(function(){return s}));var t=u("8Y7J"),e=(u("AxYp"),u("SlX+"),t.pb({encapsulation:2,styles:[],data:{}}));function s(l){return t.Mb(2,[(l()(),t.rb(0,0,null,null,0,":svg:use",[],[[1,":xlink:href",0],[1,"x",0]],null,null,null,null))],null,(function(l,n){var u=n.component;l(n,0,0,u.iconPath,u.xPos)}))}},q4jQ:function(l,n,u){"use strict";u.d(n,"c",(function(){return t})),u.d(n,"b",(function(){return e})),u.d(n,"a",(function(){return s}));var t=function(){function l(l,n){this.el=l,this.renderer=n,this.renderer.addClass(this.el.nativeElement,this.getHostClass())}return l.prototype.getHostClass=function(){return"slds-text-selected"},l}(),e=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return __extends(n,l),n.prototype.getHostClass=function(){return"slds-text-not-selected"},n}(t),s=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return __extends(n,l),n.prototype.getHostClass=function(){return"slds-text-selected-focus"},n}(t)},"tC/h":function(l,n,u){"use strict";u.d(n,"a",(function(){return o}));var t=u("mrSG"),e=u("wvRR"),s=u("xYf+"),a=u("bijG"),o=function(){var l=function(){function l(l,n){this.el=l,this.hostService=n,this.variant="default"}return Object.defineProperty(l.prototype,"iconName",{get:function(){return this._iconName},set:function(l){this._iconName=Object(a.a)(l)},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){this.setHostClass()},l.prototype.ngOnChanges=function(){this.setHostClass()},l.prototype.svgClasses=function(){var l,n="utility"===this.iconName.split(":")[0],u="default"===this.variant||"inverse"===this.variant,t=((l={})["slds-icon_"+this.size]=!!this.size&&"medium"!==this.size,l["slds-icon-text-"+(u?"default":this.variant)]=u?"default"===this.variant?n:!n:!!this.variant,l);return Object(s.e)(this.svgClass,t)},l.prototype.setHostClass=function(){var l,n=this.iconName.split(":"),u=n[0],t=n[1].replace(/_/g,"-");this.hostService.updateClass(this.el,((l={"slds-icon_container":"utility"!==u,"slds-icon_container_circle":"action"===u})["slds-icon-"+u+"-"+t]="utility"!==u&&"doctype"!==u,l))},l}();return t.a([e.a,t.b("design:type",String),t.b("design:paramtypes",[String])],l.prototype,"iconName",null),l}()},ttgq:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));var t=function(){function l(l){this.classMap={},this.styleMap={},this.renderer=l.createRenderer(null,null)}return l.prototype.updateClass=function(l,n){var u=this,t=l.nativeElement,e={},s=Object.assign({},this.classMap);Object.keys(n).filter((function(l){return n[l]})).forEach((function(l){e[l]=!0,u.classMap[l]||u.renderer.addClass(t,l),s[l]&&(s[l]=!1)})),Object.keys(s).filter((function(l){return s[l]})).forEach((function(l){return u.renderer.removeClass(t,l)})),this.classMap=e},l.prototype.updateStyle=function(l,n){var u=this,t=l.nativeElement,e=Object.assign({},this.styleMap);Object.keys(n).filter((function(l){return n[l]})).forEach((function(l){!1!==n[l]&&u.renderer.setStyle(t,l,n[l]),e[l]&&delete e[l]})),Object.keys(e).forEach((function(l){return u.renderer.removeStyle(t,l)})),this.styleMap=n},l}()},uhgx:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));var t=function(){}},wvRR:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var t=function(){};function e(l,n){var u=l.ngOnInit;Object.defineProperty(l,"ngOnInit",{value:function(){if(!(n in this))throw Error("[ng-lightning] "+l.constructor.name+": "+n+" is required, but was not provided");(u||t).call(this)}})}}}]);