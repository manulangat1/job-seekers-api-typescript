export interface subscriptionType {
  id?: number;
  name: string;
  type: string;
  validity: number;
  price: number;
}

export interface subscription {
  id?: number;
  user: any;
  subscription: any;
  validity: number;
  createdAt?: Date;
  updatedAt?: Date;
}
