import { Button, Divider, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    btnGroup: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xl")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
        [theme.breakpoints.down("lg")]: {
            flexDirection: "row",
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    },

    btn: {
        height: "2.5em",
        minWidth: "200px",

        [theme.breakpoints.down("xl")]: {
            margin: ".25em 0",
        },
        [theme.breakpoints.down("md")]: {
            minWidth: "290px",
        },
    },

    splitBtn: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            minWidth: "330px",
        },
    },
}));

const Buttons = () => {
    const styles = useStyles();
    return (
        <div className={styles.btnGroup}>
            <span className={styles.btn}>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ height: "2.75em" }}
                    fullWidth>
                    My Calendar
                </Button>
            </span>
            <span className={styles.btn}>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ height: "2.75em" }}
                    fullWidth>
                    Weekly Report
                </Button>
            </span>
            <div className={styles.splitBtn}>
                <span className={styles.btn}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="warning"
                                    sx={{
                                        padding: ".5em 2em",
                                        margin: "0 .25em 0 1.5em",
                                        borderRadius: "5px 0 0 5px",
                                        background: "#3972f5",
                                    }}>
                                    <AddIcon />
                                    Assign Activity
                                </Button>
                                <Button
                                    color="warning"
                                    variant="contained"
                                    size="medium"
                                    sx={{
                                        padding: "7.5px 2em",
                                        borderRadius: " 0 5px 5px 0",
                                        background: "#3972f5",
                                    }}
                                    {...bindTrigger(popupState)}>
                                    <ExpandMoreIcon />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>
                                        Sample Activity #1
                                    </MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        Sample Activity #2
                                    </MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        Sample Activity #3
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </PopupState>
                </span>
            </div>
        </div>
    );
};
export default Buttons;
