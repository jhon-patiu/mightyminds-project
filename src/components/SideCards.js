import { Button, Link, Divider, Paper } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { makeStyles } from "@mui/styles";
import HelpLinks from "./HelpLinks";

const helpLinks = [
    "Visit help centre",
    "Send us your feedback",
    "Make a request",
    "Report an issue",
    "Teacher support group",
    "Schedule a consultation",
];

const useStyles = makeStyles((theme) => ({
    sideCards: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",

        alignItems: "center",
        marginBottom: "5em",
        [theme.breakpoints.down("lg")]: {
            height: "auto",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "5em",
        },
    },
    getStartedCard: {
        width: "250px",
        height: "300px",
        background: "rgba(210,223,255,255)",
        position: "relative",
        borderRadius: "5px",
        padding: "1em 2px .25em 2px",
        "& img": {
            width: "200px",
            height: "160px",
            position: "absolute",
            top: "-35px",
            left: "25px",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        },
    },
    getStartedCardInfo: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 1em",
        "& p": {
            fontSize: "13px",
        },
        "& h4": {
            marginTop: "2em",
        },
    },

    helpCard: {
        width: "250px",
        height: "300px",
        background: "pink",
        padding: "0 1em",
        marginTop: "1em",
        "& div": {
            display: "flex",
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: 0,
        },
    },
    link: {
        "&:hover": {
            color: "hotpink",
        },
    },
    text: {
        paddingTop: "3em",
    },
}));

const SideCards = () => {
    const styles = useStyles();
    return (
        <div className={styles.sideCards}>
            <div className={styles.getStartedCard}>
                {/* Floating Illustration */}
                <img src="/images/img6.png" alt="illustration" />

                <div className={styles.getStartedCardInfo}>
                    <div>
                        <h4 className={styles.text}>Explore your new Portal</h4>
                        <p>
                            Improved class focus, unit plans, live lessons,
                            additional tracking features and much more.
                        </p>
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            color="warning"
                            size="small"
                            fullWidth
                            sx={{
                                textTransform: "capitalize",
                                background: "#3972f5",
                            }}>
                            See how it works
                        </Button>
                        <div>
                            <Link
                                className={styles.link}
                                href="/getting-started"
                                variant="caption"
                                underline="always">
                                Getting started guide
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Paper className={styles.helpCard} elevation={2}>
                <div
                    style={{
                        marginLeft: "2em",
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <ContactSupportIcon />
                    <h4 class>Help & Support</h4>
                </div>
                <Divider variant="middle" />
                <HelpLinks links={helpLinks} />
            </Paper>
        </div>
    );
};

export default SideCards;
