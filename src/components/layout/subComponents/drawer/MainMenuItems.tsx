import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  CreditCardOutlined as CreditCardOutlinedIcon,
  DashboardCustomizeOutlined as DashboardCustomizeOutlinedIcon,
  MonitorHeartOutlined as MonitorHeartOutlinedIcon,
  ReceiptLongOutlined as ReceiptLongOutlinedIcon,
} from "@mui/icons-material";

interface MenuItem {
  text: string;
  icon: JSX.Element;
  subMenuItems?: MenuItem[];
}

const mainMenuItems: MenuItem[] = [
  { text: "Dashboard", icon: <DashboardCustomizeOutlinedIcon /> },
  {
    text: "My Wallet",
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
  {
    text: "Transactions",
    icon: <MonitorHeartOutlinedIcon />,
  },
  { text: "Invoices", icon: <ReceiptLongOutlinedIcon /> },
  { text: "Cards", icon: <CreditCardOutlinedIcon /> },
];

const MainMenuItems: React.FC = () => {
  return (
    <>
      <Typography
        variant="body2"
        sx={{ mt: 2, fontSize: "1rem", fontWeight: "bold" }}
      >
        Main Menu
      </Typography>
      <List>
        {mainMenuItems.map((item) => (
          <ListItem key={item.text}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">{item.text}</Typography>}
                />
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MainMenuItems;
