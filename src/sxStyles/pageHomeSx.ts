export const pageHomeSx = {
    heading: {
        color: "whitesmoke",
        fontSize: { xs: "2.2rem", sm: "10vw", md: "5.5rem", lg: "6rem" },
        fontWeight: "700",
        fontFamily: 'League Spartan',
        textShadow: "#2c3e50 1px 0 10px",
        marginTop: "-100px",
        "@media screen and (max-height:500px)": {
            marginTop: "0px",
        }
    },
    subHeading: {
        color: "whitesmoke",
        fontSize: { xs: "0.6rem", sm: "0.9rem", md: "1.2rem", lg: "1.5rem" },
        fontWeight: "300",
        padding: {xs: 0, md: "0 20px"},
        width: "75%",
        margin: "0 auto",
        marginBottom: {xs: "0", sm: "0", md: "0"},
        fontFamily: 'Montserrat',
        textShadow: "#000 1px 0 10px"
    },
    btn: {
        marginTop: "40px",
        padding: "8px 20px",
        fontFamily: 'Quicksand',
        fontWeight: 'bold'
    }
}