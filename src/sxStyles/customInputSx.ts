export const customInputSx: any = {
    formContainer: {
        inputWrapper: { width: 0.4, margin: '26px 0 26px' },
        paperWrapper: (error: any) => ({
            height: '45px',
            padding: '5px 5px 5px 15px',
            display: 'flex',
            backgroundColor: "#fff",
            border: error ? "1px solid red" : "1px solid transparent",
            boxShadow: '0 3px 6px rgb(0 0 0 / 28%)',
            borderRadius: '3px',
            opacity: 0.8
        }),
        input: {
            width: "100%",
            maxWidth: { xs: "90px", sm: "120px", md: "160px" },
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
            ml: 1,
            flex: 1,
            color: '#747474',
            '& .MuiInputBase-input': {
                padding: "0",
            },
            '& input::placeholder': { opacity: 1 },
            '& textarea::placeholder': { opacity: 1 }
        }
    }
}