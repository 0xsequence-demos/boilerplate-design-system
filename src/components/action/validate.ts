// import lodash from "lodash";

import { ZodSchema } from "zod";

// const { set } = lodash;

function keyIsArray(key: string) {
  return key.includes("[]");
}
// function keyOfArray(key: string) {
//   return key.replace("[]", "");
// }

// export const validateFormdata = (formdata: FormData, _: any): any => {
//   try {
//     const userData = Array.from(formdata.entries());
//     return userData.reduce(
//       (acc, [key, value]: [string, FormDataEntryValue]) => {
//         set(acc, key, !value ? null : value);
//         return acc;
//       },
//       Object.create(null)
//     );
//   } catch (e) {
//     throw new Error("No request and/or form data was provided");
//   }
// };

export function validateAndCreateFormObjectOrThrow(
  formdata: FormData,
  validationSchema: ZodSchema<any>
) {
  // https://github.com/colinhacks/zod/discussions/2134#discussioncomment-9668926
  const allowedValues = validationSchema.keyof().options;

  const values = allowedValues.reduce(
    (data: Record<string, unknown>, key: string) => {
      if (formdata.has(key)) {
        const value = formdata.getAll(key);
        data[key] = value.length > 1 && keyIsArray(key) ? value : value[0];
      }

      return data;
    },
    Object.create(null)
  );

  return validationSchema.parse(values);
}

export function createFormObjectWithoutValidation(formdata: FormData) {
  const keys = Array.from(formdata.keys());

  return keys.reduce((data: Record<string, unknown>, key: string) => {
    if (formdata.has(key)) {
      const value = formdata.getAll(key);
      data[key] = value.length > 1 && keyIsArray(key) ? value : value[0];
    }

    return data;
  }, Object.create(null));
}
