const API = "http://localhost:3000"

// const data = [
//     {id: "A1", name: "Vacum Cleaner", rrp: "99.99", info: "The most powerful vacuum in ther world."},
//     {id: "A2", name: "Leaf Blower", rrp: "303.33", info: "This product will blow your socks off."},
//     {id: "B1", name: "Chocolate Bar", rrp: "22.40", info: "Deliciously overpriced chocolate."},
// ]
const populateProducts = async (category) => {
    const products = document.querySelector("#products")
    products.innerHTML = ""

    const res = await fetch(`${API}/${category}`)
    console.log(res);
    const data = await res.json()

    for (const product of data) {
        const item = document.createElement("product-item")
        for (const key of ["name", "rrp", "info"]) {
            const span = document.createElement("span")
            span.slot = key
            span.textContent = product[key]
            item.appendChild(span)
        }
        products.appendChild(item)
    }
}

const category = document.querySelector("#category")

category.addEventListener('input', async ({ target }) => {
    await populateProducts(target.value)
})

// document.querySelector("#fetch").addEventListener("click", async () => {
//     await populateProducts()
// })

customElements.define("product-item", class Item extends HTMLElement {
    constructor() {
        super()
        const itemTmpl = document.querySelector("#item").content.cloneNode(true)
        this.attachShadow({mode: "open"}).appendChild(itemTmpl)
    }
}) 