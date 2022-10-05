const products = [
  {
    id: "1",
    name: "Below Zero",
    img: "/images/BelowZero.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "2",
    name: "Godzilla vs. Kong",
    img: "/images/GodzillaVs.Kong.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "3",
    name: "Zack Snyder's Justice League",
    img: "/images/ZackSnyder'sJusticeLeague.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "4",
    name: "The Little Things",
    img: "/images/TheLittleThings.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "5",
    name: "Black Water: Abyss",
    img: "/images/BlackWaterAbyss.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "6",
    name: "Jiu Jitsu",
    img: "/images/JiuJitsu.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "7",
    name: "Cherry",
    img: "/images/Cherry.jpg",
    price: 500,
    stock: 10,
  },
  {
    id: "8",
    name: "Breach",
    img: "/images/Breach.jpg",
    price: 500,
    stock: 10,
  },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
