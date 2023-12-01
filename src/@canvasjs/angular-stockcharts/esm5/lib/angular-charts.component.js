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
var CanvasJSChart = /** @class */ (function () {
    function CanvasJSChart() {
        this.shouldUpdateChart = false;
        this.chartInstance = new EventEmitter();
        this.options = this.options ? this.options : {};
        this.styles = this.styles ? this.styles : { width: "100%", position: "relative" };
        this.styles.height = this.options.height ? this.options.height + "px" : "400px";
        this.chartContainerId = 'canvasjs-angular-chart-container-' + CanvasJSChart_1._cjsChartContainerId++;
    }
    CanvasJSChart_1 = CanvasJSChart;
    CanvasJSChart.prototype.ngDoCheck = function () {
        if (this.prevChartOptions != this.options) {
            this.shouldUpdateChart = true;
        }
    };
    CanvasJSChart.prototype.ngOnChanges = function () {
        //Update Chart Options & Render
        if (this.shouldUpdateChart && this.chart) {
            this.chart.options = this.options;
            this.chart.render();
            this.shouldUpdateChart = false;
            this.prevChartOptions = this.options;
        }
    };
    CanvasJSChart.prototype.ngAfterViewInit = function () {
        this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
        this.chart.render();
        this.prevChartOptions = this.options;
        this.chartInstance.emit(this.chart);
    };
    CanvasJSChart.prototype.ngOnDestroy = function () {
        if (this.chart)
            this.chart.destroy();
    };
    var CanvasJSChart_1;
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
    return CanvasJSChart;
}());
export { CanvasJSChart };
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdG9ja2NoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWNoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztFQVFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBdUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUcsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFPaEQ7SUFlQztRQVZBLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQVF6QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUVoRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsbUNBQW1DLEdBQUcsZUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDcEcsQ0FBQztzQkFyQkksYUFBYTtJQXVCbEIsaUNBQVMsR0FBVDtRQUNDLElBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0MsK0JBQStCO1FBQy9CLElBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckM7SUFDRixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyxJQUFHLElBQUksQ0FBQyxLQUFLO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDOztJQWhETSxrQ0FBb0IsR0FBRyxDQUFDLENBQUM7SUFPL0I7UUFEQSxLQUFLLEVBQUU7a0RBQ007SUFFYjtRQURBLEtBQUssRUFBRTtpREFDSztJQUdaO1FBREEsTUFBTSxFQUFFO3dEQUNtQztJQWJ2QyxhQUFhO1FBTGxCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLDBEQUEwRDtTQUNyRSxDQUFDO09BRUksYUFBYSxDQWtEbEI7SUFBRCxvQkFBQztDQUFBLEFBbERELElBa0RDO0FBRUQsT0FBTyxFQUNOLGFBQWEsRUFDYixDQUFDO0FBQ0YsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5DYW52YXNKUyBBbmd1bGFyIENoYXJ0cyAtIGh0dHBzOi8vY2FudmFzanMuY29tL1xyXG5Db3B5cmlnaHQgMjAyMyBmZW5vcGl4XHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTGljZW5zZSBJbmZvcm1hdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5DYW52YXNKUyBpcyBhIGNvbW1lcmNpYWwgcHJvZHVjdCB3aGljaCByZXF1aXJlcyBwdXJjaGFzZSBvZiBsaWNlbnNlLiBXaXRob3V0IGEgY29tbWVyY2lhbCBsaWNlbnNlIHlvdSBjYW4gdXNlIGl0IGZvciBldmFsdWF0aW9uIHB1cnBvc2VzIGZvciB1cHRvIDMwIGRheXMuIFBsZWFzZSByZWZlciB0byB0aGUgZm9sbG93aW5nIGxpbmsgZm9yIGZ1cnRoZXIgZGV0YWlscy5cclxuaHR0cHM6Ly9jYW52YXNqcy5jb20vbGljZW5zZS9cclxuXHJcbiovXHJcbi8qdHNsaW50OmRpc2FibGUqL1xyXG4vKmVzbGludC1kaXNhYmxlKi9cclxuLypqc2hpbnQgaWdub3JlOnN0YXJ0Ki9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxudmFyIENhbnZhc0pTID0gcmVxdWlyZSgnQGNhbnZhc2pzL3N0b2NrY2hhcnRzJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NhbnZhc2pzLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJ7e2NoYXJ0Q29udGFpbmVySWR9fVwiIFtuZ1N0eWxlXT1cInN0eWxlc1wiPjwvZGl2PidcclxufSlcclxuXHJcbmNsYXNzIENhbnZhc0pTQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblx0c3RhdGljIF9janNDaGFydENvbnRhaW5lcklkID0gMDtcclxuXHRjaGFydDogYW55O1xyXG5cdGNoYXJ0Q29udGFpbmVySWQ6IGFueTtcclxuXHRwcmV2Q2hhcnRPcHRpb25zOiBhbnk7XHJcblx0c2hvdWxkVXBkYXRlQ2hhcnQgPSBmYWxzZTtcclxuXHJcblx0QElucHV0KClcclxuXHRcdG9wdGlvbnM6IGFueTtcclxuXHRASW5wdXQoKVxyXG5cdFx0c3R5bGVzOiBhbnk7XHJcblx0XHRcclxuXHRAT3V0cHV0KClcclxuXHRcdGNoYXJ0SW5zdGFuY2UgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuXHRcdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zIDoge307XHJcblx0XHR0aGlzLnN0eWxlcyA9IHRoaXMuc3R5bGVzID8gdGhpcy5zdHlsZXMgOiB7IHdpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9O1xyXG5cdFx0dGhpcy5zdHlsZXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRoaXMub3B0aW9ucy5oZWlnaHQgKyBcInB4XCIgOiBcIjQwMHB4XCI7XHJcblx0XHRcclxuXHRcdHRoaXMuY2hhcnRDb250YWluZXJJZCA9ICdjYW52YXNqcy1hbmd1bGFyLWNoYXJ0LWNvbnRhaW5lci0nICsgQ2FudmFzSlNDaGFydC5fY2pzQ2hhcnRDb250YWluZXJJZCsrO1xyXG5cdH1cclxuXHJcblx0bmdEb0NoZWNrKCkge1xyXG5cdFx0aWYodGhpcy5wcmV2Q2hhcnRPcHRpb25zICE9IHRoaXMub3B0aW9ucykge1xyXG5cdFx0XHR0aGlzLnNob3VsZFVwZGF0ZUNoYXJ0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0bmdPbkNoYW5nZXMoKSB7XHRcdFx0XHRcclxuXHRcdC8vVXBkYXRlIENoYXJ0IE9wdGlvbnMgJiBSZW5kZXJcclxuXHRcdGlmKHRoaXMuc2hvdWxkVXBkYXRlQ2hhcnQgJiYgdGhpcy5jaGFydCkge1xyXG5cdFx0XHR0aGlzLmNoYXJ0Lm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRcdHRoaXMuY2hhcnQucmVuZGVyKCk7XHJcblx0XHRcdHRoaXMuc2hvdWxkVXBkYXRlQ2hhcnQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcmV2Q2hhcnRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHRcdFxyXG5cdCAgdGhpcy5jaGFydCA9IG5ldyBDYW52YXNKUy5DaGFydCh0aGlzLmNoYXJ0Q29udGFpbmVySWQsIHRoaXMub3B0aW9ucyk7XHJcblx0ICB0aGlzLmNoYXJ0LnJlbmRlcigpO1xyXG5cdCAgdGhpcy5wcmV2Q2hhcnRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdCAgdGhpcy5jaGFydEluc3RhbmNlLmVtaXQodGhpcy5jaGFydCk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmKHRoaXMuY2hhcnQpXHJcblx0XHRcdHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRDYW52YXNKU0NoYXJ0XHJcbn07XHJcbi8qdHNsaW50OmVuYWJsZSovXHJcbi8qZXNsaW50LWVuYWJsZSovXHJcbi8qanNoaW50IGlnbm9yZTplbmQqLyJdfQ==