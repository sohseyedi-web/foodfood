import ChizBurger from "../Components/Assets/products/product_01.1.jpg";
import ChillBurger from "../Components/Assets/products/product_01.3.jpg";
import TwoBurger from "../Components/Assets/products/product_01.jpg";
import FullBurger from "../Components/Assets/products/product_04.jpg";
import MiniBurger from "../Components/Assets/products/product_08.jpg";
import PotatoBurger from "../Components/Assets/products/product_09.jpg";
import Sirpizaa from "../Components/Assets/products/product_2.1.jpg";
import AsianPizza from "../Components/Assets/products/product_2.2.jpg";
import UsaPizza from "../Components/Assets/products/product_2.3.jpg";
import Peperoni from "../Components/Assets/products/product_3.1.jpg";
import AllPizza from "../Components/Assets/products/product_3.2.jpg";
import FunPizza from "../Components/Assets/products/product_3.3.jpg";
import IranPizza from "../Components/Assets/products/product_4.1.jpg";
import NapliPizza from "../Components/Assets/products/product_4.2.jpg";
import PizzaHot from "../Components/Assets/products/product_4.3.png";
import ChickenOne from "../Components/Assets/products/products09_08.png";
import Fanta from "../Components/Assets/products/fanta.png";
import Pepsi from "../Components/Assets/products/pepsi.png";
import Coca from "../Components/Assets/products/koka.png";

const products = [
  {
    id: "1",
    title: "چیز برگر",
    price: 60000,
    quantity: 0,
    category: "burger",
    image: ChizBurger,
  },
  {
    id: "2",
    title: "همبرگر تند",
    price: 70000,
    quantity: 0,
    category: "burger",
    image: ChillBurger,
  },
  {
    id: "3",
    title: "پیتزا پپرونی",
    price: 110000,
    quantity: 0,
    category: "pizza",
    image: Peperoni,
  },
  {
    id: "4",
    title: "دبل برگر",
    price: 115000,
    quantity: 0,
    category: "burger",
    image: TwoBurger,
  },
  {
    id: "5",
    title: "پیتزا آمریکایی",
    price: 115000,
    quantity: 0,
    category: "pizza",
    image: UsaPizza,
  },
  {
    id: "6",
    title: "پیتزا ایرانی",
    price: 105000,
    quantity: 0,
    category: "pizza",
    image: IranPizza,
  },
  {
    id: "7",
    title: "مینی برگر",
    price: 40000,
    quantity: 0,
    category: "burger",
    image: MiniBurger,
  },
  {
    id: "8",
    title: "پیتزا آسیایی",
    price: 120000,
    quantity: 0,
    category: "pizza",
    image: AsianPizza,
  },
  {
    id: "9",
    title: "پیتزا سیر",
    price: 50000,
    quantity: 0,
    category: "pizza",
    image: Sirpizaa,
  },
  {
    id: "10",
    title: "پیتزا مخلوط",
    price: 120000,
    quantity: 0,
    category: "pizza",
    image: AllPizza,
  },
  {
    id: "19",
    title: "همبرگر مخصوص",
    price: 100000,
    quantity: 0,
    category: "burger",
    image: FullBurger,
  },
  {
    id: "12",
    title: "پیتزا قاطی",
    price: 0,
    quantity: 0,
    category: "pizza",
    image: FunPizza,
  },
  {
    id: "13",
    title: "پیتزا ناپلی",
    price: 120000,
    quantity: 0,
    category: "pizza",
    image: NapliPizza,
  },

  {
    id: "14",
    title: "پیتزا مخصوص",
    price: 125000,
    quantity: 0,
    category: "pizza",
    image: PizzaHot,
  },
  {
    id: "15",
    title: "سیب برگر",
    price: 70000,
    quantity: 0,
    category: "burger",
    image: PotatoBurger,
  },
  {
    id: "16",
    title: "نوشابه پپسی",
    price: 10000,
    quantity: 0,
    category: "drink",
    image: Pepsi,
  },
  {
    id: "17",
    title: "نوشابه فانتا",
    price: 10000,
    quantity: 0,
    category: "drink",
    image: Fanta,
  },
  {
    id: "18",
    title: "کوکا کولا",
    price: 10000,
    quantity: 0,
    category: "drink",
    image: Coca,
  },
  {
    id: "11",
    title: "مرغ سوخاری",
    price: 140000,
    quantity: 0,
    category: "chicken",
    image: ChickenOne,
  },
];

export default products;
