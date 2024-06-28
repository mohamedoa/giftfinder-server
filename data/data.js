export let products = [
  {
    id: 1,
    product_name: "Belle's Storytime Horse Carriage",
    price: 12.99,
    pieces: 62,
    age: 5,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt50cb095ed9e37cdb/43233_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
  {
    id: 2,
    product_name: "Ariel’s Music Stage",
    price: 12.99,
    pieces: 60,
    age: 4,
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltd4099d1d7be7a8d9/43235.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
  {
    id: 3,
    product_name: "Elsa’s Ice Palace",
    price: 89.99,
    pieces: 289,
    age: 7,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt5e1aa14456deac01/43244.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 2,
      name: "Buildings",
      image: "http://localhost:8081/buildings.avif",
    },
  },
  {
    id: 4,
    product_name: "Ariel’s Magical Underwater Palace",
    price: 79.99,
    pieces: 116,
    age: 2,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt363b99d99a7689bd/10435.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
  {
    id: 5,
    product_name: "Mini Disney Sleeping Beauty Castle",
    price: 34.99,
    pieces: 528,
    age: 12,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt69bd16b45d4ce4ba/40720.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
  {
    id: 6,
    product_name: "Snow White’s Jewelry Box",
    price: 39.99,
    pieces: 358,
    age: 6,
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltaf283110661915c3/43276.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
  {
    id: 7,
    product_name: "Ariel’s Crystal Cavern",
    price: 24.99,
    pieces: 141,
    age: 4,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt1dbb72d19bb44321/43254.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
  {
    id: 8,
    product_name: "Antonio’s Animal Sanctuary",
    price: 34.99,
    pieces: 310,
    age: 6,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt1dbb72d19bb44321/43254.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    skill: "Creativity",
    category: {
      id: 1,
      name: "Disney",
      image: "http://localhost:8081/disney.svg",
    },
  },
];

export let categories = [
  {
    id: 1,
    name: "Disney",
    image: "http://localhost:8081/disney.svg",
  },
  {
    id: 2,
    name: "Buildings",
    image: "http://localhost:8081/buildings.avif",
  },
];

export let ages = ["newborn", 3, 4, 5, 6, 7];

export let skills = ["Creativity", "Maths", "Problem-solving", "Interactive"];
