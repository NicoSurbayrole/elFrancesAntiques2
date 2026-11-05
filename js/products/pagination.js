import { renderProducts } from "./renderProducts.js";

export const pagination = (products) => {
    let startIndex = 0;
    let endIndex = 8;
    let currentPage = 1;

    const changePage = (page) => {

        let totalPages = Math.ceil(products.length / 8);

        if (page < 1 || page > totalPages) return;

        startIndex = (page - 1) * 8;
        endIndex = page * 8;
        currentPage = page;

        let productsToRender = products.slice(startIndex, endIndex);
        renderProducts(productsToRender);

        const buttons = document.querySelectorAll("[data-page]");

        buttons.forEach(btn => {
            btn.classList.remove("is-active");
        });

        document.querySelector(`[data-page="${page}"]`).classList.add("is-active");
    }

    createPagination(products, (page => {
        changePage(page)
    }))


    const prevButton = document.getElementById("prev")
    const nextButton = document.getElementById("next")

    prevButton.addEventListener("click", () => changePage(currentPage - 1))
    nextButton.addEventListener("click", () => changePage(currentPage + 1))

    changePage(currentPage)
}


const createPagination = (products, callback) => {
    const paginationContainer = document.getElementById("number__pagination")
    let pages = Math.ceil(products.length / 8);

    for (let i = 1; i <= pages; i++) {
        if (i === 1) {
            paginationContainer.innerHTML += `<button class="btn__number-pagination is-active" data-page="1">${i}</button>`
        } else {
            paginationContainer.innerHTML += `<button class="btn__number-pagination" data-page=${i}>${i}</button>`
        }
    }

    handlePageClick(paginationContainer, callback)
}

const handlePageClick = (paginationContainer, callback) => {
    const paginationButtons = paginationContainer.querySelectorAll("[data-page]");

    paginationButtons.forEach(button => button.addEventListener("click", (event) => {
        const page = Number(event.currentTarget.dataset.page);
        callback(page);
    }))
}
