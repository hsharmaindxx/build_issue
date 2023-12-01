(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-stockcharts', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["angular-stockcharts"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /*
    CanvasJS Angular StockChart- https://canvasjs.com/
    Copyright 2023 fenopix

    --------------------- License Information --------------------
    The software in CanvasJS Angular StockChart is free and open-source. But, CanvasJS Angular StockChart relies on CanvasJS StockChart which requires a valid CanvasJS StockChart license for commercial use. Please refer to the following link for further details https://canvasjs.com/license/

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the �Software�), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED �AS IS�, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    */
    var CanvasJS = require('../../stockcharts');
    var CanvasJSStockChart = /** @class */ (function () {
        function CanvasJSStockChart() {
            this.shouldUpdateChart = false;
            this.stockChartInstance = new i0.EventEmitter();
            this.options = this.options ? this.options : {};
            this.styles = this.styles ? this.styles : { width: "100%", position: "relative" };
            this.styles.height = this.options.height ? this.options.height + "px" : "400px";
            this.stockChartContainerId = 'canvasjs-angular-stockchart-container-' + CanvasJSStockChart._cjsStockChartContainerId++;
        }
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
        return CanvasJSStockChart;
    }());
    CanvasJSStockChart._cjsStockChartContainerId = 0;
    CanvasJSStockChart.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CanvasJSStockChart, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CanvasJSStockChart.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CanvasJSStockChart, selector: "canvasjs-stockchart", inputs: { options: "options", styles: "styles" }, outputs: { stockChartInstance: "stockChartInstance" }, usesOnChanges: true, ngImport: i0__namespace, template: '<div id="{{stockChartContainerId}}" [ngStyle]="styles"></div>', isInline: true, directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CanvasJSStockChart, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'canvasjs-stockchart',
                        template: '<div id="{{stockChartContainerId}}" [ngStyle]="styles"></div>'
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { options: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }], stockChartInstance: [{
                    type: i0.Output
                }] } });

    var CanvasJSAngularStockChartsModule = /** @class */ (function () {
        function CanvasJSAngularStockChartsModule() {
        }
        return CanvasJSAngularStockChartsModule;
    }());
    CanvasJSAngularStockChartsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CanvasJSAngularStockChartsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CanvasJSAngularStockChartsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CanvasJSAngularStockChartsModule, declarations: [CanvasJSStockChart], imports: [i1.CommonModule], exports: [CanvasJSStockChart] });
    CanvasJSAngularStockChartsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CanvasJSAngularStockChartsModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CanvasJSAngularStockChartsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [CanvasJSStockChart],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [CanvasJSStockChart]
                    }]
            }] });

    /*
     * Public API Surface of angular-stockcharts
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CanvasJS = CanvasJS;
    exports.CanvasJSAngularStockChartsModule = CanvasJSAngularStockChartsModule;
    exports.CanvasJSStockChart = CanvasJSStockChart;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-stockcharts.umd.js.map
