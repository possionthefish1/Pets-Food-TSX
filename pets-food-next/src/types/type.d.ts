export type ProductT = {
  id: number;
  src: string;
  type: 'dog' | 'cat';
  price: number;
  title: string;
  content?: string;
};

export enum AllowedCategories {
  All = 'all',
  Dog = 'dog',
  Cat = 'cat',
}
