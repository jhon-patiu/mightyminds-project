import { Grid, Hidden } from "@mui/material";
import Welcome from "./Welcome";
import Buttons from "./controls/Buttons";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1365,
            xxl: 1536,
        },
    },
    container: {
        backgroundColor: "rgba(15,37,81,255)",
        color: theme.palette.secondary.main,
        minHeight: "260px",
        height: "auto",
        width: "100%",
        [theme.breakpoints.down("xl")]: {
            height: "40vh",
        },
        [theme.breakpoints.down("md")]: {
            height: "50vh",
        },
        [theme.breakpoints.down("sm")]: {
            height: "60vh",
            padding: "1em",
        },
    },
    image: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(3),
    },
    welcome: {
        alignItems: "center",
        display: "flex",
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down("lg")]: {
            width: "100%",
            justifyContent: "center",
        },
    },
    btns: {
        alignItems: "center",
        display: "flex",
        [theme.breakpoints.down("lg")]: {
            width: "100%",
            justifyContent: "center",
        },
    },
}));

const Header = () => {
    const styles = useStyles();

    return (
        <Grid container className={styles.container}>
            <Hidden lgDown>
                <Grid item xs={12} lg={2}>
                    <img
                        src="/images/books.png"
                        alt="books"
                        className={styles.image}
                    />
                </Grid>
            </Hidden>
            <Grid item xs={12} md={12} lg={5} className={styles.welcome}>
                <Welcome />
            </Grid>
            <Grid item xs={12} md={12} lg={5} className={styles.btns}>
                <Buttons />
            </Grid>
        </Grid>
    );
};

export default Header;
