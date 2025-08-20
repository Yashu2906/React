import "./product.css"
import Price from "./Price";
export default function Product({title , idx}) {
    let oldPrice = ["15000","50000","2000"];
    let newPrice = ["10000","40000","1200"];
    let Description = [
        "Fast-charging",
        "Ryzen 5",
        "Water Resistance"
    ]
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{Description[idx]}</p>
      <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
    </div>
  );
}
