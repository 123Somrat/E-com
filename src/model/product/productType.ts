type Variants = { type: string; value: string }[];
type Inventory = { quantity: number; inStock: boolean };
type Category = { type: string; tags: string[] };

interface Product {
  name: string;
  description: string;
  price: number;
  category: Category;
  variants: Variants;
  inventory: Inventory;
}

export default Product;