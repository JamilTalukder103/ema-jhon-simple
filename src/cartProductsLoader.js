import { getShoppingCart } from "./utilities/fakedb"

const carProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()
    console.log(products)
    const saveCart = [];
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }
    console.log(storedCart)
    return saveCart;
}
export default carProductsLoader;