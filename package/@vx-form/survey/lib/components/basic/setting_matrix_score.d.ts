import { OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXSurveySettingMatrixScore implements OnInit, OnChanges {
    questionField: any;
    field: VXFormFieldConfig;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
