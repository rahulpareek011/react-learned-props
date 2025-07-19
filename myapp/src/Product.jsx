import "./Product.css"
function Product({ title, price, feature }) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor: isDiscount ? "blue":"red"};
    return (
        <div className="Product" style = {styles}>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>feature:
                {feature.map((e) => (
                    <li>{e}</li>
                ))}
            </p>
            <p>{isDiscount && <p>5% discount</p>}</p>
        </div>
    )
}

export default Product