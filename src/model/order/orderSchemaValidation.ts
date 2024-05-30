import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z
    .string({ required_error: 'email is required' })
    .email('This is not a valid email'),
  productId: z.string({ required_error: 'product id is required' }),
  price: z
    .number({ required_error: 'price is required' })
    .nonnegative('price can not be negative'),
  quantity: z
    .number({ required_error: 'quantity is required' })
    .nonnegative('quantity can not be negative'),
});

export default orderValidationSchema;
