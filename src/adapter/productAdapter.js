export const createAdaptedProductFromFirestore = (doc) =>{
    const data = doc.data()

    const adaptedProduct = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        stock: data.stock,
        category: data.category,
        description: data.description
    }
    return adaptedProduct
}