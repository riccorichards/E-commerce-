import summerSale from ".././assets/summerSale.png";
import forMen from ".././assets/forMen.png";
import forSnow from ".././assets/forSnow.png";
import forWomen from ".././assets/forWomen.png";

import jacket from ".././assets/category/jacket.jpg";
import lounge from ".././assets/category/lounge.jpg";
import shirt from ".././assets/category/shirt.jpg";

export const SlideData = [
  {
    id: 0,
    imgUrl: forMen,
    title: "FOR MEN",
    desc: "UP TO 50% OFF ON A WIDE RANGE OF PRODUCTS",
		bg: "#a67c6c",
  },
  {
    id: 1,
    imgUrl: forWomen,
    title: "SUMMER SALES",
    desc: "UP TO 50% OFF ON A WIDE RANGE OF PRODUCTS",
    bg: "#e9c0c7",
  },
  {
    id: 2,
    imgUrl: summerSale,
    title: "FOR WOMEN",
    desc: "UP TO 50% OFF ON A WIDE RANGE OF PRODUCTS",
    bg: "#d3c3d6",
  },
  {
    id: 3,
    imgUrl: forSnow,
    title: "FOR SNOW",
    desc: "UP TO 50% OFF ON A WIDE RANGE OF PRODUCTS",
    bg: "#0fbf9d",
  },
];

export const category = [
  {
    id: 0,
    title: "Light Jacket",
    imgUrl: jacket,
    category: ["light-jacket"],
  },
  {
    id: 1,
    title: "Loungewear",
    imgUrl: lounge,
    category: "loungewear",
  },
  {
    id: 2,
    title: "For women",
    imgUrl: shirt,
    category: "women",
  },
];
