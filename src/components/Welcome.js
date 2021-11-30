import { Typography, List, ListItem, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    list: {
        display: "flex",
        minWidth: "480px",

        [theme.breakpoints.between("xs", "sm")]: {
            flexDirection: "column",
            justifyContent: "center",
            width: "auto",
            minWidth: "auto",
        },
    },

    listItem: {
        display: "flex",
        alignItems: "center",

        // resize circle icon and text
        "& svg, & span": {
            fontSize: "14px",
        },
        "& span": {
            marginLeft: "7px",
        },
    },
}));

const Welcome = () => {
    const styles = useStyles();
    return (
        <div>
            <Typography variant="h4" gutterBottom m={{ xs: 2 }}>
                Welcome back, Jasmine
            </Typography>
            <Typography variant="caption" m={{ xs: 2 }}>
                WEEK 4 ACTIVITY SUMMARY
            </Typography>
            <List
                aria-label="weekly activity summary stats"
                className={styles.list}>
                <ListItem
                    disablePadding
                    className={styles.listItem}
                    component="div">
                    <CircleIcon
                        fontSize="small"
                        color="info"
                        className={styles.icon}
                    />

                    <ListItemText
                        primary="Due this week: 330"
                        className={styles.txt}
                    />
                </ListItem>
                <ListItem
                    disablePadding
                    className={styles.listItem}
                    component="div">
                    <CircleIcon fontSize="small" color="success" />

                    <ListItemText primary="Completed: 240" />
                </ListItem>
                <ListItem
                    disablePadding
                    className={styles.listItem}
                    component="div">
                    <CircleIcon fontSize="small" color="error" />

                    <ListItemText primary="Overdue: 33" />
                </ListItem>
            </List>
        </div>
    );
};

export default Welcome;
