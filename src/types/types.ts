export interface Order {
  date: string;
  description: string;
  status: string;
  restaurant: {
    id: number;
    name: string;
    address: string;
    phone: string;
  };
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
