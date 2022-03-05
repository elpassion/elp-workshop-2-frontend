export const customInputSx: any = {
    formContainer: {
        inputWrapper: { width: 0.4, margin: '26px 0 26px' },
        paperWrapper: (error: any) => ({
            height: '45px',
            p: '0 15px',
            display: 'flex',
            backgroundColor: error ? 'rgba(246, 229, 141,0.6)' : '#fff',
            boxShadow: '0 3px 6px rgb(0 0 0 / 28%)',
            borderRadius: '3px'
        }),
        input: {
            ml: 1,
            flex: 1,
            color: '#747474',
            '& input::placeholder': { opacity: 1 },
            '& textarea::placeholder': { opacity: 1 }
        }
    }
}