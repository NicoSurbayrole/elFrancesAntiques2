import { pagination } from "./pagination.js"
import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderProducts.js";

export async function initProducts() {
    const products = await getProducts();
    pagination(products, renderProducts)
}