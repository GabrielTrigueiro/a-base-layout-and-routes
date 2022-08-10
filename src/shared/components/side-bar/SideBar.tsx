import { Box } from "@mui/material";
import React from "react";
import { useSideBarContext } from "../../context/SideBarContext";import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import {
  Button,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const drawerWidth = 200;

const useStyles = makeStyles({
  togglebutton:{

  }
})

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  //icon effect
  return (
    <ListItemButton
      selected={!!match}
      sx={{
        height: 60,
        "&.Mui-selected": {
          borderRight: "6px solid #E4DB00",
        },
      }}
      onClick={handleClick}
    >
      <ListItemIcon>
        <Icon sx={{ fontSize: "2rem", color: match ? "#E4DB00" : "black" }}>
          {icon}
        </Icon>
      </ListItemIcon>
      <ListItemText className="TextIcon" primary={label} />
    </ListItemButton>
  );
};

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  borderColor: "transparent",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const SideBar: React.FC = ({ children }) => {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const {sideBarOption, toggleSideBar} = useSideBarContext();
  const handleDrawerOpenOrClose = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box
      sx={{ display: "flex", bgcolor: "#459", width: "100%", height: "100%" }}
    >
      <Drawer
        variant={smDown ? "temporary" : "permanent"}
        open={open}
        onClose={toggleSideBar}
      >
        <Box flex={1} sx={{ mt: theme.spacing(20) }}>
          <List component="nav">
            {sideBarOption.map((drawerOption) => (
              <ListItemLink
                to={drawerOption.path}
                key={drawerOption.path}
                icon={drawerOption.icon}
                label={drawerOption.label}
                onClick={smDown ? toggleSideBar : undefined}
              />
            ))}
          </List>
        </Box>
        <Box>
          <Button
            onClick={handleDrawerOpenOrClose}
            sx={{
              padding: 2,
              color: "#000",
              width: "100%",
              background: "#fff",
              minHeight: 48,
              px: 2.5,
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContens: "center",
                alignItems: "center",
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "#000",
              }}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </Box>
          </Button>
        </Box>
      </Drawer>
      <Box sx={{ bgcolor: "#393", flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};
