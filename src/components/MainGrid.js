import { Container, Box, Typography, Hidden, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SideCards from "./SideCards";
import Cards from "./Cards";

const classes = [
    {
        heading: "12ENGA",
        year: "Year 12",
        subject: "English",
        due: 3,
        color: "#8dd555",
        gradient: "rgba(141,213,85,.4)",
    },
    {
        heading: "12ENGB",
        year: "Year 12",
        subject: "English",
        due: 0,
        color: "#739bf8",
        gradient: "rgba(115,155,248,.4)",
    },
    {
        heading: "08MATHS",
        year: "Year 8",
        subject: "Maths",
        due: 3,
        color: "#fac059",
        gradient: "rgba(250,192,89,.4)",
    },
    {
        heading: "09SCI",
        year: "Year 9",
        subject: "Science",
        due: 6,
        color: "#f4a7cb",
        gradient: "rgba(244,167,203,.4)",
    },
    {
        heading: "09HASS",
        year: "Year 9",
        subject: "Humanities",
        due: 1,
        color: "#baaaea",
        gradient: "rgba(186,170,234,.4)",
    },
];

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        width: "100%",
        height: "auto",
    },
    main: {
        margin: "0 auto 4em auto",
        display: "flex",
        "& > *": {
            [theme.breakpoints.down("sm")]: {
                justifyContent: "center",
                flex: 0,
            },
        },
    },
    side: {
        width: "100%",
        display: "flex",
        margin: "3em 0",
    },
}));
const MainGrid = () => {
    const styles = useStyles();
    return (
        <div>
            <Container fixed disableGutters>
                <Typography
                    variant="h5"
                    mt={6}
                    sx={{
                        "@media (max-width: 600px)": {
                            textAlign: "center",
                        },
                    }}>
                    Here are your classes
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        "@media (max-width: 600px)": {
                            textAlign: "center",
                        },
                    }}>
                    Select a class to view this week's assigned activites and
                    begin your lesson
                </Typography>
                <Grid
                    container
                    disableGutters
                    className={styles.wrapper}
                    mt={3}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={9}
                        className={styles.main}
                        sx={{
                            "@media (max-width: 600px)": {
                                display: "flex",
                                justifyContent: "center",
                            },
                        }}>
                        {/* GRID */}
                        <Cards classes={classes} />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        xl={3}
                        className={styles.side}>
                        <SideCards />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MainGrid;
