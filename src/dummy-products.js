import { nanoid } from "nanoid";
import mochaOvercoat from "./assets/mocha-overcoat.jpg";
import flexSunset from "./assets/flex-sunset.jpg";
import italianSuit from "./assets/italian-suit.jpg";
import denimJacket from "./assets/denim-jacket.jpg";
import gridGirls from "./assets/grid-girls.jpg";
import businessAlways from "./assets/business-always.jpg";
import denimLeather from "./assets/denim-leather.jpg";
import htmlNSmart from "./assets/html-n-smart.jpg";
import bootstrapChocolate from "./assets/bootstrap-chocolate.jpg";

export const DUMMY_PRODUCTS = [
  {
    id: nanoid(),
    image: mochaOvercoat,
    title: "Majestic Vintage Mocha Overcoat",
    price: 129.99,
    description:
      "Channel timeless sophistication with this stunning mocha overcoat. Crafted for the discerning gentleman who appreciates the fine blend of vintage charm and modern elegance.",
  },
  {
    id: nanoid(),
    image: flexSunset,
    title: "Enchanting Cream White Gown",
    price: 189.99,
    description:
      "Bask in the glow of elegance with our Enchanting Cream White Gown. Embody the regality of a queen with a sweet touch of pink that whispers enchantment.",
  },

  {
    id: nanoid(),
    image: denimLeather,
    title: "Vintage Denim Bad Boy Jacket",
    price: 49.99,
    description:
      "Brace the streets in style! Our Vintage Denim Jacket ensures that you stand out, even in a croud. Crafted with the finest denim and leather, this jacket is a testament to the bold and the brave.",
  },
  {
    id: nanoid(),
    image: denimJacket,
    title: "Classic Merlot Business Suit",
    price: 249.99,
    description:
      "Step into the boardroom with unmatched confidence in our Classic Merlot Business Suit. Exuding an air of refined class and understated power.",
  },
  {
    id: nanoid(),
    image: gridGirls,
    title: "Grid Summer Afternoon Dress",
    price: 159.99,
    description:
      "Our Grid Summer Afternoon Dress is a celebration of the carefree spirit of summer. The perfect attire for a casual day out, it is designed to make you feel light, breezy, and beautiful.",
  },
  {
    id: nanoid(),
    image: businessAlways,
    title: "Smart Casual Business wear",
    price: 79.99,
    description:
      "Our Smart Casual Business wear is designed for the modern professional who values comfort and style. The perfect blend of form and function, ensuring best look and feel always.",
  },
  {
    id: nanoid(),
    image: italianSuit,
    title: "Italian Silk Suit",
    price: 299.99,
    description:
      "Our Italian Silk Business Suit is the epitome of luxury and sophistication. Crafted with the finest Italian silk, it is designed to make a statement and leave a lasting impression.",
  },
  {
    id: nanoid(),
    image: htmlNSmart,
    title: "HTML-N-Smart  Wear",
    price: 69.99,
    description:
      "Our HTML & Smart Casual Wear is the perfect choice for the modern professional who values comfort and style. It is designed to keep you looking and feeling your best, no matter the occasion.",
  },
  {
    id: nanoid(),
    image: bootstrapChocolate,
    title: "Bootstrap Chocolate Leather Outfit",
    price: 199.99,
    description:
      "Our Bootstrap Chocolate Leather Outfit is a testament to the bold and the brave. Crafted with the finest leather, it is designed to make a statement and leave a lasting impression.",
  },
];
