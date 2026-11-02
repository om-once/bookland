export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
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
  price: 899.1,
  quantity: 4,
  discount: 10, // відсотки, 10 = 10%
};
