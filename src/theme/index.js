import { createMuiTheme } from '@material-ui/core/styles';
import {palette} from './palette';
import {typography} from './typography';


// A custom theme for this app
export const theme = createMuiTheme({
    typography: typography,
    palette: palette,
    overrides: {
        MuiTypography: {
            root: {
                color: palette.secondary.main,
                "&.small": {
                    fontSize: "0.75rem"
                },
                "&.uppercase": {
                    textTransform: "uppercase"
                },
                "&.font-weight-light": {
                    fontWeight: 300
                },
                "&.font-weight-regular": {
                    fontWeight: 400
                },
                "&.font-weight-semi-bold": {
                    fontWeight: 600
                },
                "&.font-weight-bold": {
                    fontWeight: 700
                },
                "&.font-weight-extra-bold": {
                    fontWeight: 800
                },
                "&.no-padding": {
                    padding: "0"
                },
                "&.no-margin": {
                    margin: "0"
                }
            },
           
        },
        MuiCard: {
            root: {
                padding: "0.5rem 1rem",
                height: "100%"
            }
        },
        MuiButtonGroup: {
            root: {
                "& .MuiButton-root": {
                    margin: "0"
                }
            }
        },
        MuiButton: {
            contained: {
                textTransform: "none",
                padding: "0.875rem 2rem",
                border: "solid 1px transparent"
            },
            outlined: {
                textTransform: "none",
                padding: "0.875rem 2rem"
            },
            sizeLarge: {
                padding: '1rem 2.25rem'
            },
            sizeSmall: {
                padding: '0.375rem 1.25rem'
            }
        },
        MuiInputBase: {
            root: {
                fontWeight: "400",
                fontSize: "1rem",
                marginBottom: "0"
            },
            input: {
                "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active": {
                    color: palette.primary.main,
                    fontSize: "1rem",
                    fontFamily: "Assistant, Arial, sans-serif !important",
                    background: "transparent !important",
                    "-webkit-box-shadow": `0 0 0 30px #e4e7e9 inset !important`
                }
            }
        },
       MuiOutlinedInput: {
           root: {
            backgroundColor: "#ffffff"
           },
           input: {
               padding: "18px 14px"
           }
       } 
    }
});

export default theme;