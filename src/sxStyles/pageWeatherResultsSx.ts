export const pageWeatherResultsSx = {
    container: {
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: "10px",
        border: "2px solid rgba(255,255,255,0.4)",
        width: "80%",
        // minHeight: "70%",
        // maxHeight: "75%",
        height: "60%",
        position: "relative",
    },
    scrollContainer: {
        height: "100%",
    },
    weatherDataWrapper: {
        padding: "30px 50px",
        width: { lg: "80%", md: "100%" },
        margin: "0 auto",
        "@media screen and (max-width: 990px)": {
            padding: "20px 20px",
        }
    },
    timezone: {
        fontSize: { xs: "1.8rem", md: "2rem", lg: "3rem" }
    },
    dialogWrapper: {
        displayOn: {
            "@media screen and (min-width: 650px)": {
                display: "none"
            }
        },
        displayOff: {
            "@media screen and (max-width: 650px)": {
                display: "none"
            }
        },
        main: {
            marginBottom: "30px",
            marginTop: 0,
            "@media screen and (max-width: 650px )": {
                marginTop: "30px"
            }
        }
    },
    lonLat: {
        position: "absolute",
        top: {xs: "-30px", md: "-35px" },
        right: {xs: "-30px", md: "0" },
        minWidth: "250px",
        color: "rgba(0,0,0,0.6)",
        padding: "5px",
        borderRadius: "6px",
        "& p": {
            fontSize: { xs: "0.8rem", md: "1rem" }
        }
    },
    tempText: {
        fontSize: { xs: "2rem", md: "3rem", lg: "3.75rem" }
    },
    blackBoard: {
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px 0",
        borderRadius: "4px",
        position: "relative",
        "& h5": {
            textAlign: "left",
            color: "#fff",
            fontWeight: "bolder",
            fontSize: { xs: "1rem", md: "1.4rem" },
            marginTop: "15px"
        },
        "& h6": {
            textAlign: "left",
            color: "lightgray",
            fontSize: { xs: "0.8rem", md: "1rem" },
            marginBottom: "15px"
        },
        "& > div": {
            padding: "20px 0",
            height: "50%"
        },
    },
    detailsWrapper: {
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContent: "center",
        //     // alignItems: "center"
    }
}