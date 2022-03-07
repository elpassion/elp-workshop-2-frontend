export const pageWeatherSx = {
    container: {
        // backgroundColor: "rgba(255,255,0,0.25)",
        // backgroundColor: "rgba(0,0,0,0.3)",
        // border: "3px solid rgba(255,255,255,0.5)",
        borderRadius: "4px",
        padding: "0 20px",
        // margin: "0 auto",
        width: "100%",
        maxWidth: "700px",
        // minHeight: "350px",
        // maxHeight: "100vh",
    },
    heading: {
        color: "whitesmoke",
        textShadow: "#2c3e50 1px 0 10px",
        fontSize: { xs: "1.1rem", sm: "2.2rem", md: "2.6rem", lg: "3rem" },
    },
    formContainer: {
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 1,
        },
        inputWrapper: {
            display: 'flex',
            justifyContent: 'space-evenly',
        }
    },
    btn: {
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: { xs: "0.6rem", sm: "0.85rem" },
        "&.Mui-disabled": {
            backgroundColor: "#b2bec3",
            color: "gray"
        }
    }
}