import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldText extends FieldType {
    service: any;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
}
