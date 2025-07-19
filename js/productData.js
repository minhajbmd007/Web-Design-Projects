const products = [
  // Laptops
  {
    id: 1,
    name: "HP Spectre x360",
    price: 1099,
    image: "images/laptop1.jpg",
    description: "Powerful 2-in-1 laptop with Intel i7, 16GB RAM, and 512GB SSD.",
    category: "laptops"
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 1249,
    image: "images/laptop2.jpg",
    description: "Compact powerhouse with Intel i7, InfinityEdge display, and 1TB SSD.",
    category: "laptops"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 1099,
    image: "images/laptop3.jpg",
    description: "Lightweight Apple M2 chip laptop with 256GB SSD and Retina display.",
    category: "laptops"
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus",
    price: 1499,
    image: "images/laptop4.jpg",
    description: "Gaming laptop with Ryzen 9, RTX 4070 GPU, 32GB RAM.",
    category: "laptops"
  },
  {
    id: 5,
    name: "Lenovo ThinkPad X1",
    price: 1299,
    image: "images/laptop5.jpg",
    description: "Business-class laptop with Intel i7, 16GB RAM, and ultra-durable chassis.",
    category: "laptops"
  },
  {
    id: 6,
    name: "Acer Swift 5",
    price: 899,
    image: "images/laptop6.jpg",
    description: "Slim ultrabook with 12th Gen Intel processor and great battery life.",
    category: "laptops"
  },

  // Smartphones
  {
    id: 7,
    name: "iPhone 15 Pro",
    price: 999,
    image: "images/phone1.jpg",
    description: "Apple's latest smartphone with A17 Bionic chip and 128GB storage.",
    category: "smartphones"
  },
  {
    id: 8,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "images/phone2.jpg",
    description: "Flagship Android with dynamic AMOLED and AI camera enhancements.",
    category: "smartphones"
  },
  {
    id: 9,
    name: "Google Pixel 8 Pro",
    price: 799,
    image: "images/phone3.jpg",
    description: "Pure Android experience with Tensor G3 chip and smart AI features.",
    category: "smartphones"
  },
  {
    id: 10,
    name: "OnePlus 12",
    price: 749,
    image: "images/phone4.jpg",
    description: "Fast charging and flagship specs at a competitive price.",
    category: "smartphones"
  },
  {
    id: 11,
    name: "Xiaomi 14 Pro",
    price: 699,
    image: "images/phone5.jpg",
    description: "High-end design with Leica camera and Snapdragon 8 Gen 3.",
    category: "smartphones"
  },
  {
    id: 12,
    name: "Nothing Phone 2",
    price: 599,
    image: "images/phone6.jpg",
    description: "Unique LED back design with a clean UI and solid performance.",
    category: "smartphones"
  },

  // Smartwatches
  {
    id: 13,
    name: "Apple Watch Series 9",
    price: 399,
    image: "images/watch1.jpg",
    description: "Advanced health tracking and seamless iPhone integration.",
    category: "smartwatches"
  },
  {
    id: 14,
    name: "Samsung Galaxy Watch 6",
    price: 349,
    image: "images/watch2.jpg",
    description: "Classic design with powerful fitness and health features.",
    category: "smartwatches"
  },
  {
    id: 15,
    name: "Garmin Venu 3",
    price: 379,
    image: "images/watch3.jpg",
    description: "High-end GPS watch with fitness coaching and AMOLED screen.",
    category: "smartwatches"
  },
  {
    id: 16,
    name: "Fitbit Versa 4",
    price: 229,
    image: "images/watch4.jpg",
    description: "Affordable smartwatch with fitness tracking and long battery life.",
    category: "smartwatches"
  },
  {
    id: 17,
    name: "Huawei Watch GT 4",
    price: 279,
    image: "images/watch5.jpg",
    description: "Stylish watch with excellent battery and accurate health tracking.",
    category: "smartwatches"
  },
  {
    id: 18,
    name: "Amazfit GTR 4",
    price: 199,
    image: "images/watch6.jpg",
    description: "Budget-friendly smartwatch with AMOLED and GPS.",
    category: "smartwatches"
  },

  // Headphones
  {
    id: 19,
    name: "Sony WH-1000XM5",
    price: 349,
    image: "images/headphone1.jpg",
    description: "Industry-leading noise cancellation and premium comfort.",
    category: "headphones"
  },
  {
    id: 20,
    name: "Bose QuietComfort 45",
    price: 329,
    image: "images/headphone2.jpg",
    description: "Legendary Bose sound with all-day battery life.",
    category: "headphones"
  },
  {
    id: 21,
    name: "Apple AirPods Pro 2",
    price: 249,
    image: "images/headphone3.jpg",
    description: "Spatial audio and ANC in a compact true wireless design.",
    category: "headphones"
  },
  {
    id: 22,
    name: "Sennheiser Momentum 4",
    price: 379,
    image: "images/headphone4.jpg",
    description: "High-fidelity headphones with advanced ANC and comfort.",
    category: "headphones"
  },
  {
    id: 23,
    name: "Jabra Elite 7 Pro",
    price: 199,
    image: "images/headphone5.jpg",
    description: "Compact earbuds with crystal-clear calls and waterproof design.",
    category: "headphones"
  },
  {
    id: 24,
    name: "Beats Studio3",
    price: 279,
    image: "images/headphone6.jpg",
    description: "Over-ear style with Apple's W1 chip and stylish design.",
    category: "headphones"
  },

  // Cameras
  {
    id: 25,
    name: "Canon EOS R10",
    price: 979,
    image: "images/camera1.jpg",
    description: "Mirrorless camera with 24MP sensor and 4K video recording.",
    category: "cameras"
  },
  {
    id: 26,
    name: "Sony Alpha a6400",
    price: 998,
    image: "images/camera2.jpg",
    description: "Compact APS-C camera with fast autofocus and vlog features.",
    category: "cameras"
  },
  {
    id: 27,
    name: "Nikon Z50",
    price: 949,
    image: "images/camera3.jpg",
    description: "APS-C mirrorless camera with flip screen and 20MP sensor.",
    category: "cameras"
  },
  {
    id: 28,
    name: "Fujifilm X-S10",
    price: 1099,
    image: "images/camera4.jpg",
    description: "Stylish body with great film simulations and in-body stabilization.",
    category: "cameras"
  },
  {
    id: 29,
    name: "Panasonic Lumix G100",
    price: 749,
    image: "images/camera5.jpg",
    description: "Vlogging camera with mic input and articulating screen.",
    category: "cameras"
  },
  {
    id: 30,
    name: "GoPro Hero 12 Black",
    price: 399,
    image: "images/camera6.jpg",
    description: "Action camera for sports, waterproof with 5.3K video recording.",
    category: "cameras"
  },

  // Tablets
  {
    id: 31,
    name: "Apple iPad Pro M4",
    price: 1199,
    image: "images/tablet1.jpg",
    description: "Apple M1 power in a thin, light, and powerful tablet.",
    category: "tablets"
  },
  {
    id: 32,
    name: "Samsung Galaxy Tab S9",
    price: 799,
    image: "images/tablet2.jpg",
    description: "Flagship Android tablet with S Pen and AMOLED display.",
    category: "tablets"
  },
  {
    id: 33,
    name: "Microsoft Surface Pro 9",
    price: 1099,
    image: "images/tablet3.jpg",
    description: "2-in-1 Windows tablet with keyboard support and Intel Core i5.",
    category: "tablets"
  },
  {
    id: 34,
    name: "Lenovo Tab P12 Pro",
    price: 649,
    image: "images/tablet4.jpg",
    description: "Premium Android tablet with OLED screen and stylus support.",
    category: "tablets"
  },
  {
    id: 35,
    name: "Amazon Fire Max 11",
    price: 229,
    image: "images/tablet5.jpg",
    description: "Affordable entertainment tablet with keyboard and stylus support.",
    category: "tablets"
  },
  {
    id: 36,
    name: "Xiaomi Pad 6",
    price: 499,
    image: "images/tablet6.jpg",
    description: "Great value with Snapdragon chip and 120Hz display.",
    category: "tablets"
  }
];
