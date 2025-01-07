import { ZodSchema } from 'zod';
export declare function validateAndCreateFormObjectOrThrow(formdata: FormData, validationSchema: ZodSchema<any>): any;
export declare function createFormObjectWithoutValidation(formdata: FormData): any;
