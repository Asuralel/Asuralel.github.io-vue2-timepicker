webpackJsonp([0],{490:function(t,e,n){n(494);var i=n(63)(n(492),n(496),"data-v-c8805f1a",null);t.exports=i.exports},491:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"clocker",props:{showTimeString:{type:Boolean,default:!0},doStart:{type:Boolean,default:!1},format:{type:String,default:"hh:mm:ss"}},watch:{doStart:function(t){t&&this.startTime()}},data:function(){return{timeString:"",startDate:"",finalDate:""}},methods:{startTime:function(){if(this.doStart){this.startDate=new Date,null!==this.interval&&clearInterval(this.interval);var t=this;return this.update(),this.interval=setInterval(function(){t.update()},100),this}},finishTime:function(){return null!==this.interval&&clearInterval(this.interval),this.timeString},getOffset:function(){return this.totalSecsLeft=(new Date).getTime()-this.startDate.getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,{seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)}},splitNumber:function(t){return t=t<10?"0"+t:t},update:function(){var t=this.getOffset();return this.timeString=this.format.replace(/yy/,this.splitNumber(t.years)).replace(/MM/,this.splitNumber(t.months)).replace(/dd/,this.splitNumber(t.days)).replace(/hh/,this.splitNumber(t.hours)).replace(/mm/,this.splitNumber(t.minutes)).replace(/ss/,this.splitNumber(t.seconds)),this}}}},492:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(121),s=(n.n(i),n(185)),a=n.n(s),r=n(48),o=(n.n(r),n(497)),l=n.n(o);e.default={mixins:[a.a],data:function(){return{titleName:"vue-timepiece demo",headerOptions:{preventGoBack:!0},time:"",orgName:"",invOrgId:"",carNumber:"",unloadArea:"",unloadId:"",carPortCode:"",carPortId:"",showOrgNameMenus:!1,showCarNumberMenus:!1,isStartUnloading:!1,doFinishUnloading:!1,hasAppointment:!0,isMatch:!1,isFinishUnloading:!1,orgNameMenus:[],carNumberMenus:[]}},components:{Clocker:l.a},created:function(){},methods:{startUnloading:function(){this.doFinishUnloading=!0},finishUnloading:function(){this.doFinishUnloading=!1,this.time=this.$refs.clocker.finishTime()}}}},493:function(t,e,n){e=t.exports=n(488)(),e.push([t.i,"\n.com-button[data-v-c8805f1a] {\n  width: 92%;\n  margin: 60px auto;\n  margin-bottom: 0;\n  text-align: center;\n  z-index: 4;\n  height: 38px;\n  color: #fff;\n  line-height: 38px;\n  border-radius: 8px;\n  background-color: #1897F2;\n}\n.tip-icon[data-v-c8805f1a] {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.failed-tip[data-v-c8805f1a] {\n  height: 30px;\n  line-height: 30px;\n  margin: 0 12px;\n  font-size: 14px;\n  text-align: right;\n  color: #F25555;\n}\n.clocker-tip[data-v-c8805f1a] {\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px;\n  text-align: center;\n  color: #6C7880;\n}\n",""])},494:function(t,e,n){var i=n(493);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(489)("4be3f1fa",i,!0)},495:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showTimeString?n("span",[t._v(t._s(t.timeString))]):t._e()},staticRenderFns:[]}},496:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"com-button",on:{click:t.startUnloading}},[t._v("开始计时")]),t._v(" "),n("div",{staticClass:"com-button",staticStyle:{"background-color":"#F25555"},on:{click:t.finishUnloading}},[t._v("结束计时")]),t._v(" "),n("div",{staticClass:"clocker-tip"},[n("span",[t._v("当前用时：")]),t._v(" "),n("clocker",{ref:"clocker",attrs:{format:"hh:mm:ss",doStart:t.doFinishUnloading}})],1),t._v(" "),n("div",{staticClass:"clocker-tip"},[n("span",[t._v("总时长："+t._s(t.time))])])])},staticRenderFns:[]}},497:function(t,e,n){var i=n(63)(n(491),n(495),null,null);t.exports=i.exports}});
