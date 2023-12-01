import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

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
class CanvasJSStockChart {
    constructor() {
        this.shouldUpdateChart = false;
        this.stockChartInstance = new EventEmitter();
        this.options = this.options ? this.options : {};
        this.styles = this.styles ? this.styles : { width: "100%", position: "relative" };
        this.styles.height = this.options.height ? this.options.height + "px" : "400px";
        this.stockChartContainerId = 'canvasjs-angular-stockchart-container-' + CanvasJSStockChart._cjsStockChartContainerId++;
    }
    ngDoCheck() {
        if (this.prevStockChartOptions != this.options) {
            this.shouldUpdateChart = true;
        }
    }
    ngOnChanges() {
        //Update Chart Options & Render
        if (this.shouldUpdateChart && this.stockChart) {
            this.stockChart.options = this.options;
            this.stockChart.render();
            this.shouldUpdateChart = false;
            this.prevStockChartOptions = this.options;
        }
    }
    ngAfterViewInit() {
        this.stockChart = new CanvasJS.StockChart(this.stockChartContainerId, this.options);
        this.stockChart.render();
        this.prevStockChartOptions = this.options;
        this.stockChartInstance.emit(this.stockChart);
    }
    ngOnDestroy() {
        if (this.stockChart)
            this.stockChart.destroy();
    }
}
CanvasJSStockChart._cjsStockChartContainerId = 0;
CanvasJSStockChart.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CanvasJSStockChart, deps: [], target: i0.ɵɵFactoryTarget.Component });
CanvasJSStockChart.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CanvasJSStockChart, selector: "canvasjs-stockchart", inputs: { options: "options", styles: "styles" }, outputs: { stockChartInstance: "stockChartInstance" }, usesOnChanges: true, ngImport: i0, template: '<div id="{{stockChartContainerId}}" [ngStyle]="styles"></div>', isInline: true, directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CanvasJSStockChart, decorators: [{
            type: Component,
            args: [{
                    selector: 'canvasjs-stockchart',
                    template: '<div id="{{stockChartContainerId}}" [ngStyle]="styles"></div>'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { options: [{
                type: Input
            }], styles: [{
                type: Input
            }], stockChartInstance: [{
                type: Output
            }] } });

class CanvasJSAngularStockChartsModule {
}
CanvasJSAngularStockChartsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CanvasJSAngularStockChartsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CanvasJSAngularStockChartsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CanvasJSAngularStockChartsModule, declarations: [CanvasJSStockChart], imports: [CommonModule], exports: [CanvasJSStockChart] });
CanvasJSAngularStockChartsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CanvasJSAngularStockChartsModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CanvasJSAngularStockChartsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CanvasJSStockChart],
                    imports: [
                        CommonModule
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

export { CanvasJS, CanvasJSAngularStockChartsModule, CanvasJSStockChart };
//# sourceMappingURL=angular-stockcharts.js.map
