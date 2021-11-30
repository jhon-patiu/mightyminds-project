import { List, ListItemButton, ListItemText } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    list: {
        fontSize: "4px",
        "& span": {
            color: "#666e7a",
        },
    },
}));

const HelpLinks = ({ links }) => {
    const styles = useStyles();
    return (
        <div>
            <List disablePadding dense className={styles.list}>
                {links.map((link) => (
                    <ListItemButton>
                        <ArrowRightAltIcon sx={{ color: "#666e7a" }} />

                        <ListItemText primary={link} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

export default HelpLinks;
