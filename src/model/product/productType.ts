type Variants = { type: string; value: string }[];
type Inventory = { quantity: number; inStock: boolean };
type Tags = { tags: string[] };

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Tags;
  variants: Variants;
  inventory: Inventory;
}

export default Product;
