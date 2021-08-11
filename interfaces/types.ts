export interface Client {
    id:              String;
    nameContact:     String;
    RS:              String;
    email:           String;
    bussines:        String;
    phone:           number;
    permission:      String;
    regAFIP:         String;
    PC:              Number;
    deliveryAddress: String;
    // employees:       Employees[];
    // shoppingCart?:   ShoppingCart;
    // orderSale:       OrderSale[];
  }
  
export interface Employees {
    id:         String;
    userName:   String;
    firstName:  String;
    lastName:   String
    DNI:        number;
    phone:      number;
    permission: String;
    type:       String;
    clients:    Client[];
    clientID:   String;
    employees?: Truck;
    truckID?:   String;
  }
  
export interface Truck {
    id:            String;
    type?:         String;
    capacity?:      number;
    high?:         number;
    large:         number;
    width?:        number;
    employees:     Employees[];
    deliveryOrder: DeliveryOrder[];
  }
  
export interface Product {
    id:             String;
    name:           String;
    price:          number;
    iva:            number;
    discount:       number;
    brand:          String;
    availability:   Boolean;
    description?:   String;
    stock:          number;
    images:         String[];
    weight?:        number;
    high?:          number;
    large?:         number;
    width?:         number;
    category:       Category[];
    purchaseDetail: PurchaseDetail[];
    cartDetail:     CartDetail[];
    saleDetail:     SaleDetail[];
  }
  
export interface Category {
    id:      String;
    product: Product[];
  }
  
export interface Provider {
    id:            String;
    RS:            String;
    nameContact:   String;
    email:         String;
    business:      String;
    phone:         number;
    regAFIP:       String;
    adress:        String;
    CP:            number;
    purchaseOrder: PurchaseOrder[];
  }
  
export interface PurchaseOrder {
    id:             String;
    provider:       Provider;
    providerID:     String;
    purchaseDetail: PurchaseDetail[];
    paymentType?:   String;
    state:          String;
    date:           String;
    received:       Boolean;
    invoice:        String[];
    amount:         number;
  
  }
  
export interface PurchaseDetail {
    id:              String;
    purchaseOrder:   PurchaseOrder;
    purchaseOrderID: String;
    product:         Product;
    productID:       String;
    quantities:      number;
  }
  
export interface OrderSale {
    id:                String;
    saleDetail:        SaleDetail[];
    client:            Client;
    clientID:          String;
    state:             Boolean;
    amount:            number;
    date:              String;
    paymentType?:      String;
    withdrawalProduct: Boolean;
    invoice:           String[];
    deliveryOrder:     DeliveryOrder;
  }
  
export interface SaleDetail {
    id:          String;
    orderSale:   OrderSale;
    orderSaleID: String;
    product:     Product;
    productID:   String;
    quantities:  number;
  }
  
export interface DeliveryOrder {
    id:          String;
    orderSale:   {};
    orderSaleID: String;
    date:        String;
    truck:       Truck;
    truckID:     String;
    state:       String;
  }
  
export interface ShoppingCart {
    id:         String;
    cartDetail: CartDetail[];
    client:     Client;
    clientID:   String;
    amount:     number;
    newDate:    String;
    state:      Boolean;
  }
  
export interface CartDetail {
    id:             String;
    shoppingCart:   ShoppingCart;
    shoppingCartID: String;
    product:        Product;
    productID:      String;
    quantities:     number;
  }
  