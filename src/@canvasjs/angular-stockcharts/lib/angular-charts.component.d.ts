import { AfterViewInit, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
declare class CanvasJSChart implements AfterViewInit, OnChanges, OnDestroy {
    static _cjsChartContainerId: number;
    chart: any;
    chartContainerId: any;
    prevChartOptions: any;
    shouldUpdateChart: boolean;
    options: any;
    styles: any;
    chartInstance: EventEmitter<object>;
    constructor();
    ngDoCheck(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export { CanvasJSChart };
