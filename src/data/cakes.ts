export interface Cake {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  ingredients: string[];
}

export const cakes: Cake[] = [
  {
    id: "1",
    name: "Classic Velvet Dream",
    description:
      "A rich, cocoa-infused red velvet cake with silky cream cheese frosting.",
    longDescription:
      "Our signature Red Velvet cake is a masterpiece of balance. The moist, tender sponge is infused with premium cocoa and natural buttermilk, finished with a generous layer of Madagascar vanilla cream cheese frosting. Perfect for celebrations that demand elegance.",
    price: 88,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "Classic",
    rating: 4.9,
    ingredients: ["Buttermilk", "Dutch Cocoa", "Cream Cheese", "Vanilla Bean"],
  },
  {
    id: "2",
    name: "Midnight Truffle",
    description:
      "Decadent dark chocolate layers filled with smooth Ganache and edible gold leaf.",
    longDescription:
      "For the true chocolate connoisseur. This cake features 70% dark Belgian chocolate ganache between layers of flourless chocolate sponge. Adorned with 24k edible gold leaf, it's the ultimate expression of luxury.",
    price: 128,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
    category: "Gourmet",
    rating: 5.0,
    ingredients: ["70% Belgian Chocolate", "Heavy Cream", "Gold Leaf", "Espresso"],
  },
  {
    id: "3",
    name: "Matcha Zen Symphony",
    description: "Premium Uji matcha layers with a light, airy white chocolate mousse.",
    longDescription:
      "Experience the tranquility of Japanese tea culture. We use ceremonial grade Uji matcha to create a delicate green tea sponge, balanced with a whisper-light white chocolate and mascarpone mousse.",
    price: 95,
    image: "https://images.unsplash.com/photo-1616030846238-c39f7363403d?q=80&w=1000",
    category: "Artisan",
    rating: 4.8,
    ingredients: ["Uji Matcha", "Mascarpone", "White Chocolate", "Strawberries"],
  },
  {
    id: "4",
    name: "Golden Mango Breeze",
    description:
      "Fresh Alphonso mango slices atop a sea of tropical chiffon and coconut cream.",
    longDescription:
      "A sun-kissed delight featuring the 'King of Mangoes'. Layers of light chiffon are separated by fresh Alphonso mango coulis and coconut-infused whipped cream. A refreshing tropical escape.",
    price: 78,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000",
    category: "Seasonal",
    rating: 4.7,
    ingredients: ["Alphonso Mango", "Coconut Milk", "Chiffon Sponge", "Passion Fruit"],
  },
  {
    id: "5",
    name: "Lavender Honey Mist",
    description:
      "Subtle lavender-infused sponge with organic wildflower honey drizzle.",
    longDescription:
      "An ethereal flavor profile that dances on the palate. Our sponge is infused with culinary lavender buds and soaked in organic wildflower honey. Finished with a light honey-buttercream frosting.",
    price: 110,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000",
    category: "Artisan",
    rating: 4.9,
    ingredients: [
      "Culinary Lavender",
      "Wildflower Honey",
      "Organic Flour",
      "Lemon Zest",
    ],
  },
  {
    id: "6",
    name: "Parisian Raspberry Blush",
    description:
      "Sweet and tart raspberry coulis between delicate layers of almond dacquoise.",
    longDescription:
      "Inspired by the patisseries of Rue du Bac. Delicate almond dacquoise nuttiness meets the sharp brightness of fresh raspberry gelee and white chocolate Chantilly cream.",
    price: 105,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000",
    category: "Gourmet",
    rating: 4.8,
    ingredients: ["Fresh Raspberries", "Almond Flour", "Egg Whites", "Chantilly Cream"],
  },
];
