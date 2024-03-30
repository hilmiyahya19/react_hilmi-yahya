import { v4 as uuidv4 } from 'uuid';

const productData = [
  {
    id: uuidv4(),
    productName: "Kaos",
    productCategory: "Clothing and Accessories",
    productImage: "kaos.jpg",
    productFreshness: "brand-new",
    additionalDescription: "erigo",
    productPrice: 100000,
  },
  {
    id: uuidv4(),
    productName: "Laptop",
    productCategory: "Electronics and Technology",
    productImage: "laptop.jpg",
    productFreshness: "brand-new",
    additionalDescription: "acer nitro 5",
    productPrice: 10500000,
  },
];

export default productData;
