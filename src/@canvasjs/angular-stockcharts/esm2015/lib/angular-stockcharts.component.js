/*
CanvasJS Angular StockChart- https://canvasjs.com/
Copyright 2023 fenopix

--------------------- License Information --------------------
The software in CanvasJS Angular StockChart is free and open-source. But, CanvasJS Angular StockChart relies on CanvasJS StockChart which requires a valid CanvasJS StockChart license for commercial use. Please refer to the following link for further details https://canvasjs.com/license/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the �Software�), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED �AS IS�, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var CanvasJS = require('../../../stockcharts');
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
export { CanvasJSStockChart, CanvasJS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zdG9ja2NoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXN0b2NrY2hhcnRzL3NyYy9saWIvYW5ndWxhci1zdG9ja2NoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhRTtBQUVGLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQXVDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHNUcsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFaEQsTUFLTSxrQkFBa0I7SUFldkI7UUFWQSxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFRekIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRWhGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx3Q0FBd0MsR0FBRyxrQkFBa0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3hILENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBRyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDViwrQkFBK0I7UUFDL0IsSUFBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMxQztJQUNGLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBRyxJQUFJLENBQUMsVUFBVTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7O0FBaERNLDRDQUF5QixHQUFHLENBQUMsQ0FBQztnSEFEaEMsa0JBQWtCO29HQUFsQixrQkFBa0IseUxBSFosK0RBQStEOzRGQUdyRSxrQkFBa0I7a0JBTHZCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLCtEQUErRDtpQkFDMUU7MEVBVUMsT0FBTztzQkFEUCxLQUFLO2dCQUdMLE1BQU07c0JBRE4sS0FBSztnQkFJTCxrQkFBa0I7c0JBRGxCLE1BQU07O0FBd0NSLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQ2FudmFzSlMgQW5ndWxhciBTdG9ja0NoYXJ0LSBodHRwczovL2NhbnZhc2pzLmNvbS9cbkNvcHlyaWdodCAyMDIzIGZlbm9waXhcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExpY2Vuc2UgSW5mb3JtYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblRoZSBzb2Z0d2FyZSBpbiBDYW52YXNKUyBBbmd1bGFyIFN0b2NrQ2hhcnQgaXMgZnJlZSBhbmQgb3Blbi1zb3VyY2UuIEJ1dCwgQ2FudmFzSlMgQW5ndWxhciBTdG9ja0NoYXJ0IHJlbGllcyBvbiBDYW52YXNKUyBTdG9ja0NoYXJ0IHdoaWNoIHJlcXVpcmVzIGEgdmFsaWQgQ2FudmFzSlMgU3RvY2tDaGFydCBsaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGluayBmb3IgZnVydGhlciBkZXRhaWxzIGh0dHBzOi8vY2FudmFzanMuY29tL2xpY2Vuc2UvXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUg77+9U29mdHdhcmXvv70pLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCDvv71BUyBJU++/vSwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbi8qdHNsaW50OmRpc2FibGUqL1xuLyplc2xpbnQtZGlzYWJsZSovXG4vKmpzaGludCBpZ25vcmU6c3RhcnQqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL0B0cy1pZ25vcmVcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcbnZhciBDYW52YXNKUyA9IHJlcXVpcmUoJ0BjYW52YXNqcy9zdG9ja2NoYXJ0cycpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYW52YXNqcy1zdG9ja2NoYXJ0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwie3tzdG9ja0NoYXJ0Q29udGFpbmVySWR9fVwiIFtuZ1N0eWxlXT1cInN0eWxlc1wiPjwvZGl2Pidcbn0pXG5cbmNsYXNzIENhbnZhc0pTU3RvY2tDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblx0c3RhdGljIF9janNTdG9ja0NoYXJ0Q29udGFpbmVySWQgPSAwO1xuXHRzdG9ja0NoYXJ0OiBhbnk7XG5cdHN0b2NrQ2hhcnRDb250YWluZXJJZDogYW55O1xuXHRwcmV2U3RvY2tDaGFydE9wdGlvbnM6IGFueTtcblx0c2hvdWxkVXBkYXRlQ2hhcnQgPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRcdG9wdGlvbnM6IGFueTtcblx0QElucHV0KClcblx0XHRzdHlsZXM6IGFueTtcblx0XHRcblx0QE91dHB1dCgpXG5cdFx0c3RvY2tDaGFydEluc3RhbmNlID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cdFx0XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucyA6IHt9O1xuXHRcdHRoaXMuc3R5bGVzID0gdGhpcy5zdHlsZXMgPyB0aGlzLnN0eWxlcyA6IHsgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH07XG5cdFx0dGhpcy5zdHlsZXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRoaXMub3B0aW9ucy5oZWlnaHQgKyBcInB4XCIgOiBcIjQwMHB4XCI7XG5cdFx0XG5cdFx0dGhpcy5zdG9ja0NoYXJ0Q29udGFpbmVySWQgPSAnY2FudmFzanMtYW5ndWxhci1zdG9ja2NoYXJ0LWNvbnRhaW5lci0nICsgQ2FudmFzSlNTdG9ja0NoYXJ0Ll9janNTdG9ja0NoYXJ0Q29udGFpbmVySWQrKztcblx0fVxuXG5cdG5nRG9DaGVjaygpIHtcblx0XHRpZih0aGlzLnByZXZTdG9ja0NoYXJ0T3B0aW9ucyAhPSB0aGlzLm9wdGlvbnMpIHtcblx0XHRcdHRoaXMuc2hvdWxkVXBkYXRlQ2hhcnQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRcblx0bmdPbkNoYW5nZXMoKSB7XHRcdFxuXHRcdC8vVXBkYXRlIENoYXJ0IE9wdGlvbnMgJiBSZW5kZXJcblx0XHRpZih0aGlzLnNob3VsZFVwZGF0ZUNoYXJ0ICYmIHRoaXMuc3RvY2tDaGFydCkge1xuXHRcdFx0dGhpcy5zdG9ja0NoYXJ0Lm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0XHR0aGlzLnN0b2NrQ2hhcnQucmVuZGVyKCk7XG5cdFx0XHR0aGlzLnNob3VsZFVwZGF0ZUNoYXJ0ID0gZmFsc2U7XG5cdFx0XHR0aGlzLnByZXZTdG9ja0NoYXJ0T3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHR9XG5cdH1cblx0XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcdFx0XG5cdCAgdGhpcy5zdG9ja0NoYXJ0ID0gbmV3IENhbnZhc0pTLlN0b2NrQ2hhcnQodGhpcy5zdG9ja0NoYXJ0Q29udGFpbmVySWQsIHRoaXMub3B0aW9ucyk7XG5cdCAgdGhpcy5zdG9ja0NoYXJ0LnJlbmRlcigpO1xuXHQgIHRoaXMucHJldlN0b2NrQ2hhcnRPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHQgIHRoaXMuc3RvY2tDaGFydEluc3RhbmNlLmVtaXQodGhpcy5zdG9ja0NoYXJ0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmKHRoaXMuc3RvY2tDaGFydClcblx0XHRcdHRoaXMuc3RvY2tDaGFydC5kZXN0cm95KCk7XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0Q2FudmFzSlNTdG9ja0NoYXJ0LFxuXHRDYW52YXNKU1xufTtcbi8qdHNsaW50OmVuYWJsZSovXG4vKmVzbGludC1lbmFibGUqL1xuLypqc2hpbnQgaWdub3JlOmVuZCovIl19