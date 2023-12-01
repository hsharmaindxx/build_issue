(function(r,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("../../stockcharts"),require("vue")):typeof define=="function"&&define.amd?define(["../../stockcharts","vue"],s):(r=typeof globalThis<"u"?globalThis:r||self,r["canvasjs-stockcharts"]=s(r.CJS,r.vue))})(this,function(r,s){"use strict";function c(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const n in t)if(n!=="default"){const i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}return e.default=t,Object.freeze(e)}const o=c(r),h=(t,e)=>{const n=t.__vccOpts||t;for(const[i,a]of e)n[i]=a;return n};var d="Chart"in o?o:window.CanvasJS;const l={props:{styles:{type:Object,default:()=>({})},options:{type:Object,default:()=>({})}},emits:["chart-ref"],data(){return{chart:null,updateChart:!0,containerStyle:{width:this.styles&&this.styles.width?this.styles.width:"100%",height:this.styles&&this.styles.height?this.styles.height:"360px",...this.styles}}},watch:{options:{handler(t,e){this.updateChart=t!==e}}},updated(){this.chart&&this.updateChart&&(this.chart.options=this.options,this.chart.render())},mounted(){this.chart=new d.Chart(this.$refs.chartContainer,this.options),this.chart.render(),this.$emit("chart-ref",this.chart)},unmounted(){this.chart&&this.chart.destroy()}};function p(t,e,n,i,a,m){return s.openBlock(),s.createElementBlock("div",{ref:"chartContainer",style:s.normalizeStyle(a.containerStyle)},null,4)}const u=h(l,[["render",p]]);var f="Chart"in o&&"StockChart"in o?o:window.CanvasJS;const C={props:{styles:{type:Object,default:()=>({})},options:{type:Object,default:()=>({})}},emits:["stockchart-ref"],data(){return{stockChart:null,updateStockChart:!0,containerStyle:{width:this.styles&&this.styles.width?this.styles.width:"100%",height:this.styles&&this.styles.height?this.styles.height:"400px",...this.styles}}},watch:{options:{handler(t,e){this.updateStockChart=t!==e}}},updated(){this.stockChart&&this.updateStockChart&&(this.stockChart.options=this.options,this.stockChart.render())},mounted(){this.stockChart=new f.StockChart(this.$refs.stockChartContainer,this.options),this.stockChart.render(),this.$emit("stockchart-ref",this.stockChart)},unmounted(){this.stockChart&&this.stockChart.destroy()}};function y(t,e,n,i,a,m){return s.openBlock(),s.createElementBlock("div",{ref:"stockChartContainer",style:s.normalizeStyle(a.containerStyle)},null,4)}const k=h(C,[["render",y]]);return{install:(t,e)=>{t.component("CanvasJSChart",u).component("CanvasJSStockChart",k)}}});