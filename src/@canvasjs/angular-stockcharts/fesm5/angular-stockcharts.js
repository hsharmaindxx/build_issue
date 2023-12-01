import stockcharts from '../canvasjs.stock.min';
export { default as CanvasJS } from '../canvasjs.stock.min';
import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        this.chart = new stockcharts.Chart(this.chartContainerId, this.options);
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
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/

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
        this.stockChart = new stockcharts.StockChart(this.stockChartContainerId, this.options);
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
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/

var CanvasJSAngularStockChartsModule = /** @class */ (function () {
    function CanvasJSAngularStockChartsModule() {
    }
    CanvasJSAngularStockChartsModule = __decorate([
        NgModule({
            declarations: [
                CanvasJSChart,
                CanvasJSStockChart
            ],
            imports: [
                CommonModule
            ],
            exports: [
                CanvasJSChart,
                CanvasJSStockChart
            ]
        })
    ], CanvasJSAngularStockChartsModule);
    return CanvasJSAngularStockChartsModule;
}());

/*
 * Public API Surface of angular-stockcharts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CanvasJSAngularStockChartsModule, CanvasJSChart, CanvasJSStockChart };
//# sourceMappingURL=angular-stockcharts.js.map
