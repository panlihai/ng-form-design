import { DoCheck, OnChanges, SimpleChanges, EventEmitter, OnDestroy, ElementRef } from "@angular/core";
import { FormGroup, FormArray, FormGroupDirective } from "@angular/forms";
import { VXFormFieldConfig, VXFormOptions } from "./vxform.field.config";
import { VXFormBuilder } from "../services/vxform.builder";
import { VXFormConfig } from "../services/vxform.config";
import { TestBaseUtils } from '../tools/test';
export declare class VXForm implements DoCheck, OnChanges, OnDestroy {
    private vxFormBuilder;
    private vxFormConfig;
    private test;
    private parentFormGroup;
    form: FormGroup | FormArray;
    model: any;
    fields: VXFormFieldConfig[];
    options: VXFormOptions;
    class: string;
    modelChange: EventEmitter<any>;
    content: ElementRef<HTMLElement>;
    status: number;
    private immutable;
    private _model;
    private _fields;
    private _options;
    private initialModel;
    private modelChangeSubs;
    private gogo;
    private enableCheckExprDebounce;
    private checkExpressionChange$;
    constructor(vxFormBuilder: VXFormBuilder, vxFormConfig: VXFormConfig, test: TestBaseUtils, immutable: any, parentFormGroup: FormGroupDirective);
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    changeModel(event: {
        key: string;
        value: any;
    }): void;
    setOptions(): void;
    private checkExpressionChange;
    private trackModelChanges;
    private clearModelSubscriptions;
    checkFieldShow(field: VXFormFieldConfig): boolean;
    checkTest: boolean;
}
