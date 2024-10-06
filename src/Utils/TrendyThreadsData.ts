import homePage from "../Assets/Images/Projects/TrendyThreads/Home.png";
import checkout from "../Assets/Images/Projects/TrendyThreads/Checkout.png";
import cart from "../Assets/Images/Projects/TrendyThreads/Cart.png";
import productDetails from "../Assets/Images/Projects/TrendyThreads/ProductDetails.png";
import productList from "../Assets/Images/Projects/TrendyThreads/ProductList.png";
import { ImageCarouselProps } from "../Types/ImageCarousel";
import addProductController from "../Assets/Images/Projects/TrendyThreadsDetails/AddProduct.png";
import getProducts from "../Assets/Images/Projects/TrendyThreadsDetails/GetProducts.png";
import productModel1 from "../Assets/Images/Projects/TrendyThreadsDetails/ProductModel.png";
import productModel2 from "../Assets/Images/Projects/TrendyThreadsDetails/ProductModel2.png";
import productModelVirtuals from "../Assets/Images/Projects/TrendyThreadsDetails/ProductModelVirtuals.png";
import creditCardHashing from "../Assets/Images/Projects/TrendyThreadsDetails/CreditCardHashing.png";
import ordersService from "../Assets/Images/Projects/TrendyThreadsDetails/OrdersService.png";
import productRoutes from "../Assets/Images/Projects/TrendyThreadsDetails/ProductRoutes.png";
import productsService from "../Assets/Images/Projects/TrendyThreadsDetails/ProductService.png";
import productsService2 from "../Assets/Images/Projects/TrendyThreadsDetails/ProductService2.png";
import { ProjectDetailsProps } from "../Types/ProjectDetails";

export const trendyThreadsData: ImageCarouselProps[] = [
  {
    image: homePage,
    title: "Home Page",
  },
  {
    image: productList,
    title: "Product List",
  },
  {
    image: productDetails,
    title: "Product Details",
  },
  {
    image: cart,
    title: "Cart",
  },
  {
    image: checkout,
    title: "Checkout",
  },
];

export const trendyThreadsProjectDetails: ProjectDetailsProps[] = [
  {
    title:
      "Developed an E-Commerce platform using ReactJs Redux and Node.js with TypeScript. ",
  },
  {
    title: "Used MongoDB to achieve scalable and efficient data management.",
    images: [productModel1, productModel2, productModelVirtuals],
  },
  {
    title: "Designed RESTful API for reliable and scalable data interaction.",
    images: [productRoutes, getProducts, addProductController],
  },
  {
    title: "Designed and architecture scalable web application.",
    images: [productsService, productsService2],
  },
  {
    title:
      " Integrated encrypted payment processing with hashing to ensure secure transactions.",
    images: [creditCardHashing, ordersService],
  },
  {
    title:
      " Utilized OOP principles to create clean, maintainable and scalable code.",
  },
];
