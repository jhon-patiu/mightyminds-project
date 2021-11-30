import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import ChargingStationIcon from "@mui/icons-material/ChargingStation";
import { Paper, Button, Divider, Grid, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "280px",
        height: "265px",
        padding: "1em",
    },
    blank: {
        width: "280px",
        height: "265px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px dashed lightgray",
        cursor: "pointer",
        "& svg": {
            fontSize: "50px",
        },
    },
    col: {
        display: "flex",
        flexDirection: "column",
    },
    rowOne: {
        display: "flex",
    },
    rowTwo: {
        display: "flex",
        marginBottom: theme.spacing(2),
        "& > *": {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1),
        },
    },
}));

const Cards = ({ classes }) => {
    const styles = useStyles();
    return (
        <Grid container spacing={2}>
            {classes.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                    <Paper
                        className={styles.paper}
                        elevation={3}
                        sx={{
                            borderTop: `8px solid ${item.color}`,
                            background: `linear-gradient(180deg, ${item.gradient} 0%, white 26% )`,
                        }}>
                        <div className={styles.rowOne}>
                            <ChargingStationIcon
                                fontSize="large"
                                sx={{ color: `${item.color}` }}
                            />
                            <Typography
                                variant="h5"
                                mx={1}
                                sx={{ fontWeight: 600 }}>
                                {item.heading}
                            </Typography>
                        </div>
                        <div className={styles.rowTwo}>
                            <StarIcon
                                fontSize="small"
                                sx={{ color: "#3972f5" }}
                            />

                            <span>|</span>
                            <Typography variant="subtitle1">
                                {item.year}
                            </Typography>
                            <span>|</span>
                            <Typography variant="subtitle1">
                                {item.subject}
                            </Typography>
                        </div>
                        <div>
                            <Typography px={1} py={0.5} gutterBottom>
                                Activities due this week
                                <Chip
                                    label={item.due}
                                    size="small"
                                    sx={{
                                        borderRadius: "3px",
                                        marginLeft: "2em",
                                        width: "auto",
                                        padding: "0 5px",
                                        background: "lightgray",
                                        color: "#000",
                                    }}
                                />
                            </Typography>
                        </div>
                        <div>
                            <Typography px={1} py={0.5} gutterBottom>
                                Assign activities
                            </Typography>
                        </div>
                        <div>
                            <Typography px={1} py={0.5} gutterBottom>
                                Class calendar
                            </Typography>
                        </div>
                        <Divider variant="middle" />
                        <div>
                            <Button
                                size="small"
                                sx={{
                                    marginTop: "2px",
                                    color: "gray",
                                }}>
                                + Add Student
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            ))}

            <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                <Paper className={styles.blank} elevation={0}>
                    <AddIcon sx={{ color: "lightgray" }} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Cards;
