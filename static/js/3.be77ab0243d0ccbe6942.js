webpackJsonp([3],{KR8f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Carousel",{attrs:{loop:"",id:"home"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.loopList,function(t,e){return a("CarouselItem",{key:e,staticStyle:{"min-height":"300px","max-height":"600px"}},[a("img",{staticStyle:{"object-fit":"cover",width:"100%","min-height":"300px","max-height":"600px"},attrs:{src:t,alt:""}})])})),t._v(" "),a("Row",{staticStyle:{"text-align":"center",padding:"50px 0"},attrs:{type:"flex",justify:"center",align:"center"}},[a("Col",{attrs:{span:"24",id:"product"}},[a("h1",[t._v("产品介绍")]),t._v(" "),a("p",[t._v("—造型丰富、色彩多样—")])])],1),t._v(" "),a("div",{staticStyle:{"max-width":"1065px",margin:"0 auto"}},[a("Row",{staticStyle:{"text-align":"center"},attrs:{type:"flex",justify:"center",align:"center"}},t._l(t.productList,function(e,n){return a("Col",{key:n,staticStyle:{padding:"5px"},attrs:{xs:{span:24},sm:{span:11},md:{span:7},lg:{span:7}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!(t.active===n),expression:"!(active===index)"}],staticStyle:{"object-fit":"cover","background-size":"60% 60%"},attrs:{src:e.pic,alt:""},on:{mouseenter:function(e){t.enter(n)}}}),t._v(" "),a("Card",{directives:[{name:"show",rawName:"v-show",value:t.active===n,expression:"active===index"}],on:{mouseleave:function(e){t.leave(n)}}},[a("Row",t._l(e.child,function(t,e){return a("Col",{key:e,attrs:{xs:{span:24},sm:{span:11},md:{span:11},lg:{span:11}}},[a("img",{staticStyle:{"object-fit":"cover","max-width":"100px","max-height":"100px"},attrs:{src:t,alt:""}})])}))],1)],1)}))],1),t._v(" "),a("Row",{staticStyle:{"text-align":"center",padding:"50px 0"},attrs:{type:"flex",justify:"center",align:"center"}},[a("Col",{attrs:{span:"24"}},[a("h1",[t._v("产品适应场景")]),t._v(" "),a("p",[t._v("—扫码即用、实时定位—")])])],1),t._v(" "),a("div",{staticStyle:{"max-width":"1065px",margin:"0 auto"}},[a("Row",{staticStyle:{"text-align":"center"},attrs:{type:"flex",justify:"center",align:"center"}},t._l(t.sceneList,function(t,e){return a("Col",{key:e,staticStyle:{padding:"5px"},attrs:{xs:{span:24},sm:{span:11},md:{span:7},lg:{span:7}}},[a("img",{staticStyle:{"object-fit":"cover","background-size":"100% 100%",width:"200px",height:"200px"},attrs:{src:t,alt:""}})])}))],1),t._v(" "),a("div",{staticStyle:{"max-width":"1065px",margin:"100px auto"}},[a("Row",{staticStyle:{"text-align":"center"},attrs:{type:"flex",justify:"start",align:"center"}},[a("Col",{attrs:{xs:{span:24},sm:{span:10},md:{span:10},lg:{span:10}}},[a("img",{staticStyle:{"object-fit":"cover","background-size":"100% 100%",width:"300px",height:"200px","max-width":"400px"},attrs:{src:t.introduce,alt:""}})]),t._v(" "),a("Col",{attrs:{xs:{span:24},sm:{span:12},md:{span:12},lg:{span:12}}},[a("h1",{staticStyle:{color:"#1c2438"}},[t._v("公司介绍")]),t._v(" "),a("h3",{staticStyle:{"text-align":"left","text-indent":"25px","margin-top":"25px","line-height":"35px",color:"#495060"}},[t._v("\n        小司机,坐落于杭州,成立之初即获得数百万天使轮融资。通过自主研发的商用级智能玩具车,\n        重新定义儿童玩具车市场;打造全新的供应链模式,改变玩具车消费方式。旨在成为最具影响\n        力的儿童智能车供应链服务平台。")])])],1)],1),t._v(" "),a("Row",{staticStyle:{"text-align":"center",padding:"0 0 50px"},attrs:{type:"flex",justify:"center",align:"center"}},[a("Col",{attrs:{span:"24"}},[a("h1",[t._v("团队核心成员")]),t._v(" "),a("p",[t._v("—配合默契、执行力强—")])])],1),t._v(" "),a("div",{staticStyle:{"max-width":"1065px",margin:"0 auto"}},[a("Row",{staticStyle:{"text-align":"center"},attrs:{type:"flex",justify:"center",align:"center"}},t._l(t.people,function(e,n){return a("Col",{key:n,attrs:{xs:{span:24},sm:{span:11},md:{span:5,offset:1},lg:{span:5,offset:1}}},[a("img",{staticStyle:{"Object-fit":"cover","background-size":"100% 100%",width:"100px",height:"100px"},attrs:{src:e.pic,alt:""}}),t._v(" "),a("p",{staticStyle:{padding:"25px 0 0"}},[a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.position))])]),t._v(" "),e.duty?a("p",[t._v("("+t._s(e.duty)+")")]):t._e(),t._v(" "),e.introduce?a("p",{style:{textAlign:"left",textIndent:"25px",marginTop:25+(""===e.duty?18:0)+"px"}},[t._v("\n        "+t._s(e.introduce))]):t._e()])}))],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"home",data:function(){return{value:0,loopList:[],productList:[{pic:"../static/car/carA.png",child:["../static/car/carA1.jpg","../static/car/carA2.jpg","../static/car/carA3.jpg"]},{pic:"../static/car/carB.png",child:["../static/car/carB1.png","../static/car/carB2.png","../static/car/carB3.png"]},{pic:"../static/car/carC.png",child:["../static/car/carC1.jpg","../static/car/carC2.jpg","../static/car/carC3.jpg"]}],sceneList:["../static/scene/sceneA.png","../static/scene/sceneB.png","../static/scene/sceneC.png"],introduce:"../static/introduce/introduce.jpg",people:[{pic:"../static/people/peopleA.png",name:"何繁荣",position:"创始人&CEO",duty:"",college:"杭州电子科技⼤大学",introduce:"曾就职通用安吉星，原车音网（估值\n26亿）总裁助理，车小米创始人，连\n续创业者，擅长企业管理，有快速学\n习能力，很强的带队能力和执行力，\n10多年车联网从业经历，对儿童电动\n玩具车的优化及升级有深刻认识。"},{pic:"../static/people/peopleB.png",name:"华威",position:"联合创始人&CTO",duty:"硬件负责人",college:"浙江大学",introduce:"杭州信雅达系统工程股份有限公司\n项⽬经理，UT斯达康手机部高级工\n程师，上海鹏盾电子商务股份有限\n公司集团公司副总。\n浙江⼤学控制理论与控制工程研究\n生，精通软硬件开发及工业⾃动化,\n物联网技术。"},{pic:"../static/people/peopleC.png",name:"张辉",position:"联合创始⼈人&CTO",duty:"软件负责人",college:"天津大学",introduce:"⽀付宝事业部高级工程师，淘宝\n开放平台技术部主管，返利网技\n术副总，10多年互联网平台和产\n品设计及开发经验富有创业激\n情。"},{pic:"../static/people/peopleD.png",name:"顾伊力",position:"联合创始⼈人&COO",duty:"",college:"浙江传媒学院",introduce:"杭州牟双⼲⼴广告有限公司创始⼈，7年\n传媒公司经营，擅长各类活动策划\n和执行，年销售额突破千万，曾多\n次参与政府组织的⼤型公益活动，\n渠道开拓能⼒，商务谈判能⼒强，\n社会资源丰富。"}],active:null}},mounted:function(){this.loopList=["../static/loop/loopA.jpg"]},methods:{enter:function(t){this.active=t},leave:function(t){this.active=null}}},n,!1,function(t){a("XiPZ")},"data-v-0ffec931",null);e.default=i.exports},XiPZ:function(t,e){}});
//# sourceMappingURL=3.be77ab0243d0ccbe6942.js.map