import { z } from 'zod';

// Definindo o esquema de validação para uma unidade de medida
const Unidade = z.enum(['un', 'l', 'kg']); // Ajuste os valores conforme as opções possíveis de unidades

// Esquema para a lista, incluindo um array de unidades de medida
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
  unidade_medida: z.enum(['Un', 'Kg', 'L'], {
    invalid_type_error: 'A unidade deve ser "Un", "Kg" ou "L"',
    required_error: 'A unidade de medida é obrigatória',
  }),
  createdAt: z.date().optional(),
});

// Esquema para atualização, onde todos os campos são opcionais
export const UpdateList = List.partial();
