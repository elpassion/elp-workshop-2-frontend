export const dialogComponentSx = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    btn: {
        width: "fit-content",
        maxWidth: "400px",
        backgroundColor: "#f7f1e3",
        color: "black",
        padding: "10px 20px",
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: { xs: "0.6rem", sm: "0.85rem" },
        "&:hover": {
            backgroundColor: "#aaa69d"
        },
        "& p, span": {
            fontFamily: "Quicksand",
            fontWeight: "bold",
            fontSize: {xs: "0.5rem", sm: "0.6rem", md: "0.8rem"}
        }
    }
}