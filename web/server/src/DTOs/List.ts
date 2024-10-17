import { z } from 'zod';

export const List = z.object({
  name: z.string({
    invalid_type_error: 'O nome deve ser uma string',
    required_error: 'O nome é obrigatório',
  }),
  quantidade: z
    .number({
      invalid_type_error: 'A quantidade deve ser um número',
      required_error: 'A quantidade é obrigatória',
    })
    .nonnegative({ message: 'A quantidade não pode ser negativa' }),
  categoria: z.string({
    invalid_type_error: 'A categoria deve ser uma string',
    required_error: 'A categoria é obrigatória',
  }),
  createdAt: z.date().optional(),
});

export const UpdateList = List.partial();
