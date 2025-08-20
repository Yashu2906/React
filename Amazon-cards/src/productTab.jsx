import Product from "./product";

export default function ProductTab() {
    let styles = {
        display : "flex",
        flex : "wrap",
        justifyContent : "center",
        alignItems : "center"

    }
  return (
    <div style = {styles}>
      <Product title = "One Plus Nord Phone" idx={0}/>
      <Product title = "HP Victus Gaming laptop" idx={1}/>
      <Product title = "Noise Earbuds N1" idx={2}/>
    </div>
  );
}
