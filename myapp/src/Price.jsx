export default function Price({oldPrice , newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
        height:"30px",
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        display:"flex",
        justifyContent: "center",
        alignItems:"center"
    };
    
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}