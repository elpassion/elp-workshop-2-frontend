export const dialogComponentSx = {
    wrapper: {
        marginTop: {xs: "10px", md: "30px"},
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    btn: {
        width: "fit-content",
        maxWidth: "400px",
        backgroundColor: "rgba(255, 234, 167,0.8)",
        color: "black",
        padding: "10px 20px",
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: { xs: "0.6rem", sm: "0.85rem" },
        "&:hover": {
            backgroundColor: "orange"
        }
    }
}