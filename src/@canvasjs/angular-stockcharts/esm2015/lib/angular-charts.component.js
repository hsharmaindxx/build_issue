var CanvasJSChart_1;
import { __decorate } from "tslib";
/*
CanvasJS Angular Charts - https://canvasjs.com/
Copyright 2023 fenopix

--------------------- License Information --------------------
CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
https://canvasjs.com/license/

*/
/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CanvasJS = require('../../canvasjs.stock.min');
let CanvasJSChart = CanvasJSChart_1 = class CanvasJSChart {
    constructor() {
        this.shouldUpdateChart = false;
        this.chartInstance = new EventEmitter();
        this.options = this.options ? this.options : {};
        this.styles = this.styles ? this.styles : { width: "100%", position: "relative" };
        this.styles.height = this.options.height ? this.options.height + "px" : "400px";
        this.chartContainerId = 'canvasjs-angular-chart-container-' + CanvasJSChart_1._cjsChartContainerId++;
    }
    ngDoCheck() {
        if (this.prevChartOptions != this.options) {
            this.shouldUpdateChart = true;
        }
    }
    ngOnChanges() {
        //Update Chart Options & Render
        if (this.shouldUpdateChart && this.chart) {
            this.chart.options = this.options;
            this.chart.render();
            this.shouldUpdateChart = false;
            this.prevChartOptions = this.options;
        }
    }
    ngAfterViewInit() {
        this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
        this.chart.render();
        this.prevChartOptions = this.options;
        this.chartInstance.emit(this.chart);
    }
    ngOnDestroy() {
        if (this.chart)
            this.chart.destroy();
    }
};
CanvasJSChart._cjsChartContainerId = 0;
__decorate([
    Input()
], CanvasJSChart.prototype, "options", void 0);
__decorate([
    Input()
], CanvasJSChart.prototype, "styles", void 0);
__decorate([
    Output()
], CanvasJSChart.prototype, "chartInstance", void 0);
CanvasJSChart = CanvasJSChart_1 = __decorate([
    Component({
        selector: 'canvasjs-chart',
        template: '<div id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    })
], CanvasJSChart);
export { CanvasJSChart };
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdG9ja2NoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWNoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7RUFRRTtBQUNGLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQXVDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBT2hELElBQU0sYUFBYSxxQkFBbkIsTUFBTSxhQUFhO0lBZWxCO1FBVkEsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBUXpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUczQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRWhGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQ0FBbUMsR0FBRyxlQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNwRyxDQUFDO0lBRUQsU0FBUztRQUNSLElBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsK0JBQStCO1FBQy9CLElBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckM7SUFDRixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFHLElBQUksQ0FBQyxLQUFLO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0QsQ0FBQTtBQWpETyxrQ0FBb0IsR0FBRyxDQUFDLENBQUM7QUFPL0I7SUFEQSxLQUFLLEVBQUU7OENBQ007QUFFYjtJQURBLEtBQUssRUFBRTs2Q0FDSztBQUdaO0lBREEsTUFBTSxFQUFFO29EQUNtQztBQWJ2QyxhQUFhO0lBTGxCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLDBEQUEwRDtLQUNyRSxDQUFDO0dBRUksYUFBYSxDQWtEbEI7QUFFRCxPQUFPLEVBQ04sYUFBYSxFQUNiLENBQUM7QUFDRixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkNhbnZhc0pTIEFuZ3VsYXIgQ2hhcnRzIC0gaHR0cHM6Ly9jYW52YXNqcy5jb20vXHJcbkNvcHlyaWdodCAyMDIzIGZlbm9waXhcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMaWNlbnNlIEluZm9ybWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkNhbnZhc0pTIGlzIGEgY29tbWVyY2lhbCBwcm9kdWN0IHdoaWNoIHJlcXVpcmVzIHB1cmNoYXNlIG9mIGxpY2Vuc2UuIFdpdGhvdXQgYSBjb21tZXJjaWFsIGxpY2Vuc2UgeW91IGNhbiB1c2UgaXQgZm9yIGV2YWx1YXRpb24gcHVycG9zZXMgZm9yIHVwdG8gMzAgZGF5cy4gUGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGluayBmb3IgZnVydGhlciBkZXRhaWxzLlxyXG5odHRwczovL2NhbnZhc2pzLmNvbS9saWNlbnNlL1xyXG5cclxuKi9cclxuLyp0c2xpbnQ6ZGlzYWJsZSovXHJcbi8qZXNsaW50LWRpc2FibGUqL1xyXG4vKmpzaGludCBpZ25vcmU6c3RhcnQqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG52YXIgQ2FudmFzSlMgPSByZXF1aXJlKCdAY2FudmFzanMvc3RvY2tjaGFydHMnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FudmFzanMtY2hhcnQnLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cInt7Y2hhcnRDb250YWluZXJJZH19XCIgW25nU3R5bGVdPVwic3R5bGVzXCI+PC9kaXY+J1xyXG59KVxyXG5cclxuY2xhc3MgQ2FudmFzSlNDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHRzdGF0aWMgX2Nqc0NoYXJ0Q29udGFpbmVySWQgPSAwO1xyXG5cdGNoYXJ0OiBhbnk7XHJcblx0Y2hhcnRDb250YWluZXJJZDogYW55O1xyXG5cdHByZXZDaGFydE9wdGlvbnM6IGFueTtcclxuXHRzaG91bGRVcGRhdGVDaGFydCA9IGZhbHNlO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdFx0b3B0aW9uczogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0XHRzdHlsZXM6IGFueTtcclxuXHRcdFxyXG5cdEBPdXRwdXQoKVxyXG5cdFx0Y2hhcnRJbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG5cdFx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPyB0aGlzLm9wdGlvbnMgOiB7fTtcclxuXHRcdHRoaXMuc3R5bGVzID0gdGhpcy5zdHlsZXMgPyB0aGlzLnN0eWxlcyA6IHsgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH07XHJcblx0XHR0aGlzLnN0eWxlcy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0ID8gdGhpcy5vcHRpb25zLmhlaWdodCArIFwicHhcIiA6IFwiNDAwcHhcIjtcclxuXHRcdFxyXG5cdFx0dGhpcy5jaGFydENvbnRhaW5lcklkID0gJ2NhbnZhc2pzLWFuZ3VsYXItY2hhcnQtY29udGFpbmVyLScgKyBDYW52YXNKU0NoYXJ0Ll9janNDaGFydENvbnRhaW5lcklkKys7XHJcblx0fVxyXG5cclxuXHRuZ0RvQ2hlY2soKSB7XHJcblx0XHRpZih0aGlzLnByZXZDaGFydE9wdGlvbnMgIT0gdGhpcy5vcHRpb25zKSB7XHJcblx0XHRcdHRoaXMuc2hvdWxkVXBkYXRlQ2hhcnQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRuZ09uQ2hhbmdlcygpIHtcdFx0XHRcdFxyXG5cdFx0Ly9VcGRhdGUgQ2hhcnQgT3B0aW9ucyAmIFJlbmRlclxyXG5cdFx0aWYodGhpcy5zaG91bGRVcGRhdGVDaGFydCAmJiB0aGlzLmNoYXJ0KSB7XHJcblx0XHRcdHRoaXMuY2hhcnQub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdFx0dGhpcy5jaGFydC5yZW5kZXIoKTtcclxuXHRcdFx0dGhpcy5zaG91bGRVcGRhdGVDaGFydCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnByZXZDaGFydE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcdFx0XHJcblx0ICB0aGlzLmNoYXJ0ID0gbmV3IENhbnZhc0pTLkNoYXJ0KHRoaXMuY2hhcnRDb250YWluZXJJZCwgdGhpcy5vcHRpb25zKTtcclxuXHQgIHRoaXMuY2hhcnQucmVuZGVyKCk7XHJcblx0ICB0aGlzLnByZXZDaGFydE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0ICB0aGlzLmNoYXJ0SW5zdGFuY2UuZW1pdCh0aGlzLmNoYXJ0KTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYodGhpcy5jaGFydClcclxuXHRcdFx0dGhpcy5jaGFydC5kZXN0cm95KCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdENhbnZhc0pTQ2hhcnRcclxufTtcclxuLyp0c2xpbnQ6ZW5hYmxlKi9cclxuLyplc2xpbnQtZW5hYmxlKi9cclxuLypqc2hpbnQgaWdub3JlOmVuZCovIl19