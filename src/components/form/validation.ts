import { z } from "zod";

export const validationFormSchema = z.object({
  fullName: z
  .string()
  .refine(data => {
    const names = data.split(" ");
    return names.length >= 2 && names.every(name => name.length > 0);
  }, {
    message: "Digite um Nome e ao menos um Sobrenome",
  }),
});
