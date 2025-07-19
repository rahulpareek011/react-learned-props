import Product from "./Product"
function ProductTabs(){
    let options = ["HighTech","Smooth Expirence","Fast"]
    return (
        <>
        <Product title = "Phone" price = {70000} feature={options}/>
        <Product title = "Laptop" price = {130000} feature={options}/>
        <Product title = "Pen" price = {100} feature={options}/>
        </>
    )
}

export default ProductTabs