type Variants = { type: string; value: string }[];
type Inventory = { quantity: number; inStock: boolean };


interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string;
  variants: Variants;
  inventory: Inventory;
}

export default Product;
