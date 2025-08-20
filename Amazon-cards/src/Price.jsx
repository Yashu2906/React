export default function Price({oldPrice,newPrice}) {
    let oldStyle = {
        textDecorationLine : "line-through"
    }
    let newstyle = {
        fontWeight : "bold"
    }
    let styles = {
        backgroundColor : "#FFBF00",
        height : "40px",
        width : "250px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px"
    }
  return( 
    <div style = {styles}>
  <span style = {oldStyle}>{oldPrice}</span>
  &nbsp; &nbsp;
  <span style = {newstyle}>{newPrice}</span>
  </div>
)
}
