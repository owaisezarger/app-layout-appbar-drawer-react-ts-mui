import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  CreditCardOutlined as CreditCardOutlinedIcon,
  DashboardCustomizeOutlined as DashboardCustomizeOutlinedIcon,
  MonitorHeartOutlined as MonitorHeartOutlinedIcon,
  ReceiptLongOutlined as ReceiptLongOutlinedIcon,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";

interface MenuItem {
  text: string;
  icon: JSX.Element;
  subMenuItems?: MenuItem[];
  route?: string;
}

const mainMenuItems: MenuItem[] = [
  {
    text: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
    route: "/",
  },
  {
    text: "Customer",
    icon: <PersonOutlineOutlinedIcon />,
    route: "/",
  },
  { text: "Item", icon: <CategoryIcon />, route: "/" },
  {
    text: "My Wallet",
    icon: <AccountBalanceWalletOutlinedIcon />,
    route: "/",
    subMenuItems: [
      { text: "Transactions", icon: <MonitorHeartOutlinedIcon /> },
      { text: "Invoices", icon: <ReceiptLongOutlinedIcon /> },
      { text: "Cards", icon: <CreditCardOutlinedIcon /> },
    ],
  },
  {
    text: "Transactions",
    icon: <MonitorHeartOutlinedIcon />,
    route: "/",
    subMenuItems: [
      { text: "Credit", icon: <ReceiptLongOutlinedIcon /> },
      { text: "Debit", icon: <MonitorHeartOutlinedIcon /> },
    ],
  },
];

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {item.subMenuItems ? (
        <Accordion
          expanded={expanded}
          onChange={handleClick}
          sx={{
            boxShadow: "none",
            color: "slategray",
            fontWeight: "bold",
          }}
          disableGutters
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon sx={{ color: "lightgray" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  style={{ fontWeight: "bold", color: "lightslategray" }}
                >
                  {item.text}
                </Typography>
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ mt: -3 }}>
              {item.subMenuItems.map((subItem, index) => (
                <ListItem
                  key={index}
                  component={Link}
                  to={subItem.route || "#"}
                  sx={{
                    paddingLeft: 0,
                    boxShadow: "none",
                    textDecoration: "none",
                    color: "slategray",
                    fontWeight: "bold",
                  }}
                >
                  <ListItemIcon sx={{ color: "lightgray" }}>
                    {subItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        style={{ fontWeight: "bold", color: "lightslategray" }}
                      >
                        {subItem.text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ) : (
        <ListItem
          component={Link}
          to={item.route || "#"}
          sx={{
            textDecoration: "none",
            color: "slategray",
            fontWeight: "bold",
          }}
        >
          <ListItemIcon sx={{ color: "lightgray" }}>{item.icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", color: "lightslategray" }}
              >
                {item.text}
              </Typography>
            }
          />
        </ListItem>
      )}
    </>
  );
};

const MainMenu: React.FC = () => {
  return (
    <List>
      {mainMenuItems.map((item, index) => (
        <MenuItemComponent key={index} item={item} />
      ))}
    </List>
  );
};

export default MainMenu;
