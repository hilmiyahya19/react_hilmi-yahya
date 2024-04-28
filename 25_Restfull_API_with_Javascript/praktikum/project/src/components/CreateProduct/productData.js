import { v4 as uuidv4 } from 'uuid';

const productData = [
  {
    id: uuidv4(),
    productName: "Kaos",
    productCategory: "Clothing and Accessories",
    productImage: "/img/erigo.jpeg",
    productFreshness: "brand-new",
    additionalDescription: "erigo",
    productPrice: 120000,
  },
  {
    id: uuidv4(),
    productName: "Laptop",
    productCategory: "Electronics and Technology",
    productImage: "/img/acer.jpg",
    productFreshness: "brand-new",
    additionalDescription: "acer nitro 5",
    productPrice: 14000000,
  },
  {
    id: uuidv4(),
    productName: "Snack",
    productCategory: "Food and Beverages",
    productImage: "/img/panchos.jpeg",
    productFreshness: "brand-new",
    additionalDescription: "panchos",
    productPrice: 11000,
  },
  {
    id: uuidv4(),
    productName: "Tas Carrier",
    productCategory: "Sports and Outdoors",
    productImage: "/img/rei.jpg",
    productFreshness: "brand-new",
    additionalDescription: "rei",
    productPrice: 745000,
  },
];

export default productData;
