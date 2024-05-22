import { z }   from 'zod';

// Define VarientSchema with Zod
const VarientValidationSchema = z.object({
  type: z.string({ required_error: "Type is required" }).min(1,{message:"Type is required"}),
  value: z.string({ required_error: "Value is required" }).min(1,{message:"Value is required"}),
});

// Define InventorySchema with Zod
const InventoryValidationSchema = z.object({
  quantity: z.number({ required_error: "quantity is required" }).nonnegative("Quantity must be a non-negative number"),
  inStock: z.boolean({ required_error: "Stock is required" }),
});

// Define ProductSchema with Zod
const ProductValidationSchema = z.object({
name:z.string({ required_error: "Name is required" }).min(5,{message:'Must be 5 or more cherecters long'}),
description: z.string({ required_error: "Description is required" }).min(20,{message:"Description minimum 20 Cherecter"}).max(150,{message:"Description can be maximum 150 cherecter"}),
price: z.number({ required_error: "Price is required" }).positive("Price must be a positive number"),
category: z.string({ required_error: "Category is required" }).min(5,{message:"Category is required"}),
tags: z.enum(['smartphone', 'Apple', 'iOS']),
variants: z.array(VarientValidationSchema).nonempty({message:"At least one variant is required"}),
inventory: InventoryValidationSchema.required(),
});
export default ProductValidationSchema;

