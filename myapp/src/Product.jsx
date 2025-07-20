import "./Product.css"
import Price from './Price'

function Product({title,idx}) {

    let oldPrices = ["12,999","16,999","7000","1299"];
    let newPrices = ["9,999","11,999","3,999","699"];
    let description = [["8000 DPI","5 Programmble Buttons"],["Made for ipad","Designed for ipads"],["Super base","intutive"],["True wireless","optcal orientation"]]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product