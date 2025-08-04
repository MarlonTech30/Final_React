
export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  imgURL?: string; 
}

export interface ProductSectionProps {
  products: Product[];
  onAdd: (id: number) => void;
  onMinus: (id: number) => void;
}