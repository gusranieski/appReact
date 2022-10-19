const products = [
  {
    id: "1",
    name: "Below Zero",
    img: "/images/BelowZero.jpg",
    price: 500,
    stock: 10,
    category: "acción",
    description: "En una fría noche cerrada de invierno, en mitad de una carretera despoblada, un furgón policial blindado es asaltado durante un traslado de presos. Alguien busca a alguien de su interior. Martín, el policía conductor del furgón, consigue atrincherarse dentro del cubículo blindado con los reclusos. Obligado a entenderse con sus enemigos naturales, Martín tratará de sobrevivir y cumplir con su deber en una larga noche de pesadilla en el que se pondrán a prueba incluso sus principios."
  },
  {
    id: "2",
    name: "Godzilla vs. Kong",
    img: "/images/GodzillaVs.Kong.jpg",
    price: 500,
    stock: 10,
    category: "acción",
    description: "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra."
  },
  {
    id: "3",
    name: "Justice League",
    img: "/images/ZackSnyder'sJusticeLeague.jpg",
    price: 500,
    stock: 10,
    category: "aventura",
    description: "Bruce Wayne se une a Diana Prince, tras el sacrificio de Superman, para reclutar a un equipo de metahumanos que protejan el mundo de una amenaza inminente de proporciones catastróficas. La tarea es más difícil de lo que Bruce imaginaba, ya que cada uno de los reclutas deberá enfrentarse a sus propios demonios antes de unirse a esta liga."
  },
  {
    id: "4",
    name: "The Little Things",
    img: "/images/TheLittleThings.jpg",
    price: 500,
    stock: 10,
    category: "suspenso",
    description: "El alguacil adjunto del condado de Kern, Joe “Deke” Deacon (Washington), es enviado a Los Ángeles para lo que debería haber sido una tarea rápida de recopilación de pruebas. En cambio, se ve envuelto en la búsqueda de un asesino en serie que aterroriza a la ciudad."
  },
  {
    id: "5",
    name: "Black Water: Abyss",
    img: "/images/BlackWaterAbyss.jpg",
    price: 500,
    stock: 10,
    category: "terror",
    description: "Unos amigos exploran un sistema de cuevas en lo profundo de los bosques de Australia, pero de repente, una tormenta tropical golpea la zona y quedan atrapados entre las corrientes de agua crecientes que traen cocodrilos consigo."
  },
  {
    id: "6",
    name: "Jiu Jitsu",
    img: "/images/JiuJitsu.jpg",
    price: 500,
    stock: 10,
    category: "aventura",
    description: "Cada seis años, una antigua orden de expertos en jiu-jitsu se unen para pelear contra unos horripilantes invasores alienígenas. Sin embargo, Brad, el líder del grupo, sufre amnesia y no quiere pelear. Sin él, el planeta parece condenado."
  },
  {
    id: "7",
    name: "Cherry",
    img: "/images/Cherry.jpg",
    price: 500,
    stock: 10,
    category: "suspenso",
    description: "Un exmédico del ejército sufre un trastorno postraumático después de regresar de Irak. Al tratar de lidiar con la enfermedad, termina convirtiéndose en un ladrón de bancos para apoyar su adicción a las drogas."
  },
  {
    id: "8",
    name: "Breach",
    img: "/images/Breach.jpg",
    price: 500,
    stock: 10,
    category: "acción",
    description: "A punto de ser padre, un mecánico joven, a bordo de un arca interestelar a la Nueva Tierra, debe superar un terror cósmico malévolo que pretende utilizar la nave como arma."
  },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}
