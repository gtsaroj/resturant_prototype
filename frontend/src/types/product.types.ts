export interface ProductTypes {
  id: string;
  name: string;
  price: number;
  category?: string;
  image: string;
}

export interface MenuTypes {
  id: string;
  name: string;
  image: string;
}

export interface MenuProps {
  menu: MenuTypes[];
  action: (id: string) => void;
}


