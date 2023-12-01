import { __decorate } from "tslib";
/*
CanvasJS Angular StockCharts - https://canvasjs.com/
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
var CanvasJSStockChart = /** @class */ (function () {
    function CanvasJSStockChart() {
        this.shouldUpdateChart = false;
        this.stockChartInstance = new EventEmitter();
        this.options = this.options ? this.options : {};
        this.styles = this.styles ? this.styles : { width: "100%", position: "relative" };
        this.styles.height = this.options.height ? this.options.height + "px" : "400px";
        this.stockChartContainerId = 'canvasjs-angular-stockchart-container-' + CanvasJSStockChart_1._cjsStockChartContainerId++;
    }
    CanvasJSStockChart_1 = CanvasJSStockChart;
    CanvasJSStockChart.prototype.ngDoCheck = function () {
        if (this.prevStockChartOptions != this.options) {
            this.shouldUpdateChart = true;
        }
    };
    CanvasJSStockChart.prototype.ngOnChanges = function () {
        //Update Chart Options & Render
        if (this.shouldUpdateChart && this.stockChart) {
            this.stockChart.options = this.options;
            this.stockChart.render();
            this.shouldUpdateChart = false;
            this.prevStockChartOptions = this.options;
        }
    };
    CanvasJSStockChart.prototype.ngAfterViewInit = function () {
        this.stockChart = new CanvasJS.StockChart(this.stockChartContainerId, this.options);
        this.stockChart.render();
        this.prevStockChartOptions = this.options;
        this.stockChartInstance.emit(this.stockChart);
    };
    CanvasJSStockChart.prototype.ngOnDestroy = function () {
        if (this.stockChart)
            this.stockChart.destroy();
    };
    var CanvasJSStockChart_1;
    CanvasJSStockChart._cjsStockChartContainerId = 0;
    __decorate([
        Input()
    ], CanvasJSStockChart.prototype, "options", void 0);
    __decorate([
        Input()
    ], CanvasJSStockChart.prototype, "styles", void 0);
    __decorate([
        Output()
    ], CanvasJSStockChart.prototype, "stockChartInstance", void 0);
    CanvasJSStockChart = CanvasJSStockChart_1 = __decorate([
        Component({
            selector: 'canvasjs-stockchart',
            template: '<div id="{{stockChartContainerId}}" [ngStyle]="styles"></div>'
        })
    ], CanvasJSStockChart);
    return CanvasJSStockChart;
}());
export { CanvasJSStockChart, CanvasJS };
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zdG9ja2NoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN0b2NrY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItc3RvY2tjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7RUFRRTtBQUNGLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQXVDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBUWhEO0lBZUM7UUFWQSxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFRekIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRWhGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx3Q0FBd0MsR0FBRyxvQkFBa0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3hILENBQUM7MkJBckJJLGtCQUFrQjtJQXVCdkIsc0NBQVMsR0FBVDtRQUNDLElBQUcsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0MsK0JBQStCO1FBQy9CLElBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUM7SUFDRixDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNDLElBQUcsSUFBSSxDQUFDLFVBQVU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDOztJQWhETSw0Q0FBeUIsR0FBRyxDQUFDLENBQUM7SUFPcEM7UUFEQSxLQUFLLEVBQUU7dURBQ007SUFFYjtRQURBLEtBQUssRUFBRTtzREFDSztJQUdaO1FBREEsTUFBTSxFQUFFO2tFQUN3QztJQWI1QyxrQkFBa0I7UUFMdkIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsK0RBQStEO1NBQzFFLENBQUM7T0FFSSxrQkFBa0IsQ0FrRHZCO0lBQUQseUJBQUM7Q0FBQSxBQWxERCxJQWtEQztBQUVELE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLENBQUM7QUFDRixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkNhbnZhc0pTIEFuZ3VsYXIgU3RvY2tDaGFydHMgLSBodHRwczovL2NhbnZhc2pzLmNvbS9cclxuQ29weXJpZ2h0IDIwMjMgZmVub3BpeFxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExpY2Vuc2UgSW5mb3JtYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQ2FudmFzSlMgaXMgYSBjb21tZXJjaWFsIHByb2R1Y3Qgd2hpY2ggcmVxdWlyZXMgcHVyY2hhc2Ugb2YgbGljZW5zZS4gV2l0aG91dCBhIGNvbW1lcmNpYWwgbGljZW5zZSB5b3UgY2FuIHVzZSBpdCBmb3IgZXZhbHVhdGlvbiBwdXJwb3NlcyBmb3IgdXB0byAzMCBkYXlzLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGZvbGxvd2luZyBsaW5rIGZvciBmdXJ0aGVyIGRldGFpbHMuXHJcbmh0dHBzOi8vY2FudmFzanMuY29tL2xpY2Vuc2UvXHJcblxyXG4qL1xyXG4vKnRzbGludDpkaXNhYmxlKi9cclxuLyplc2xpbnQtZGlzYWJsZSovXHJcbi8qanNoaW50IGlnbm9yZTpzdGFydCovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcbnZhciBDYW52YXNKUyA9IHJlcXVpcmUoJ0BjYW52YXNqcy9zdG9ja2NoYXJ0cycpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FudmFzanMtc3RvY2tjaGFydCcsXHJcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwie3tzdG9ja0NoYXJ0Q29udGFpbmVySWR9fVwiIFtuZ1N0eWxlXT1cInN0eWxlc1wiPjwvZGl2PidcclxufSlcclxuXHJcbmNsYXNzIENhbnZhc0pTU3RvY2tDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHRzdGF0aWMgX2Nqc1N0b2NrQ2hhcnRDb250YWluZXJJZCA9IDA7XHJcblx0c3RvY2tDaGFydDogYW55O1xyXG5cdHN0b2NrQ2hhcnRDb250YWluZXJJZDogYW55O1xyXG5cdHByZXZTdG9ja0NoYXJ0T3B0aW9uczogYW55O1xyXG5cdHNob3VsZFVwZGF0ZUNoYXJ0ID0gZmFsc2U7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0XHRvcHRpb25zOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRcdHN0eWxlczogYW55O1xyXG5cdFx0XHJcblx0QE91dHB1dCgpXHJcblx0XHRzdG9ja0NoYXJ0SW5zdGFuY2UgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuXHRcdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zIDoge307XHJcblx0XHR0aGlzLnN0eWxlcyA9IHRoaXMuc3R5bGVzID8gdGhpcy5zdHlsZXMgOiB7IHdpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9O1xyXG5cdFx0dGhpcy5zdHlsZXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRoaXMub3B0aW9ucy5oZWlnaHQgKyBcInB4XCIgOiBcIjQwMHB4XCI7XHJcblx0XHRcclxuXHRcdHRoaXMuc3RvY2tDaGFydENvbnRhaW5lcklkID0gJ2NhbnZhc2pzLWFuZ3VsYXItc3RvY2tjaGFydC1jb250YWluZXItJyArIENhbnZhc0pTU3RvY2tDaGFydC5fY2pzU3RvY2tDaGFydENvbnRhaW5lcklkKys7XHJcblx0fVxyXG5cclxuXHRuZ0RvQ2hlY2soKSB7XHJcblx0XHRpZih0aGlzLnByZXZTdG9ja0NoYXJ0T3B0aW9ucyAhPSB0aGlzLm9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy5zaG91bGRVcGRhdGVDaGFydCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5nT25DaGFuZ2VzKCkge1x0XHRcclxuXHRcdC8vVXBkYXRlIENoYXJ0IE9wdGlvbnMgJiBSZW5kZXJcclxuXHRcdGlmKHRoaXMuc2hvdWxkVXBkYXRlQ2hhcnQgJiYgdGhpcy5zdG9ja0NoYXJ0KSB7XHJcblx0XHRcdHRoaXMuc3RvY2tDaGFydC5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0XHR0aGlzLnN0b2NrQ2hhcnQucmVuZGVyKCk7XHJcblx0XHRcdHRoaXMuc2hvdWxkVXBkYXRlQ2hhcnQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcmV2U3RvY2tDaGFydE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcdFx0XHJcblx0ICB0aGlzLnN0b2NrQ2hhcnQgPSBuZXcgQ2FudmFzSlMuU3RvY2tDaGFydCh0aGlzLnN0b2NrQ2hhcnRDb250YWluZXJJZCwgdGhpcy5vcHRpb25zKTtcclxuXHQgIHRoaXMuc3RvY2tDaGFydC5yZW5kZXIoKTtcclxuXHQgIHRoaXMucHJldlN0b2NrQ2hhcnRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdCAgdGhpcy5zdG9ja0NoYXJ0SW5zdGFuY2UuZW1pdCh0aGlzLnN0b2NrQ2hhcnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZih0aGlzLnN0b2NrQ2hhcnQpXHJcblx0XHRcdHRoaXMuc3RvY2tDaGFydC5kZXN0cm95KCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdENhbnZhc0pTU3RvY2tDaGFydCxcclxuXHRDYW52YXNKU1xyXG59O1xyXG4vKnRzbGludDplbmFibGUqL1xyXG4vKmVzbGludC1lbmFibGUqL1xyXG4vKmpzaGludCBpZ25vcmU6ZW5kKi8iXX0=