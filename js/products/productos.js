import { pagincaion } from "./pagination.js"
import { getProducts } from "./getProducts.js";

export async function initProducts() {
    const products = await getProducts();
    pagincaion(products)
}