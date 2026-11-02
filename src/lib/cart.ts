export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number; // відсотки, 10 = 10%
};

export const item: CartItem = {
  id: '574653',
  title:
    'Як Расмус і Тіммі пекли кексики. Малюки-динозаврики – Мелє Ларс, Рудеб’єр Ларс',
  price: 320,
  quantity: 20,
};

export const itemDiscount: CartItem = {
  id: '576142',
  title: 'Алхімізовані – СенЛінЮ',
  price: 900,
  quantity: 4,
  discount: 10,
};

export function getItemTotal(item: CartItem): number {
  const discount = item.discount ?? 0;
  return (item.price - item.price * (discount / 100)) * item.quantity;
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, cartItem) => sum + getItemTotal(cartItem), 0);
}
