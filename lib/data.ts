import { Product } from "./types";

export const products: Product[] = [
    {
      id: 1,
      name: "Signature Dark Chocolate Box",
      price: 24.99,
      description: "Our signature collection featuring hand-crafted dark chocolate truffles with 72% cocoa content. Perfect blend of rich flavors and smooth textures.",
      imageUrl: "/product1.jpeg",
      category: "gift boxes",
      ingredients: ["Dark chocolate", "Cocoa butter", "Vanilla", "Sea salt"],
      weight: "250g"
    },
    {
      id: 2,
      name: "Milk Chocolate Assortment",
      price: 29.99,
      description: "A delightful selection of our finest milk chocolate pralines, filled with premium nuts and caramel.",
      imageUrl: "/product2.jpeg",
      category: "assortment",
      ingredients: ["Milk chocolate", "Hazelnuts", "Caramel", "Cream"],
      weight: "300g"
    },
    {
      id: 3,
      name: "Praline Collection",
      price: 34.99,
      description: "Luxurious pralines featuring a blend of milk and dark chocolate with various nutty fillings.",
      imageUrl: "/product3.jpeg",
      category: "pralines",
      ingredients: ["Chocolate", "Almonds", "Hazelnuts", "Pistachios"],
      weight: "280g"
    },
    {
      id: 4,
      name: "Seasonal Special Box",
      price: 39.99,
      description: "Limited edition chocolates featuring seasonal flavors and decorative designs.",
      imageUrl: "/product4.jpeg",
      category: "seasonal",
      ingredients: ["White chocolate", "Dark chocolate", "Seasonal fruits", "Spices"],
      weight: "320g"
    }
  ];