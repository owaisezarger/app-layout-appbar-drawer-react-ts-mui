import React from "react";
import { Typography, Link } from "@mui/material";

const RepositoryLink: React.FC = () => {
  return (
    <Typography variant="body1" paragraph>
      To access the repository, visit:{" "}
      <Link
        href="https://github.com/owaisezarger/app-layout-appbar-drawer-react-ts-mui"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </Link>
    </Typography>
  );
};

export default RepositoryLink;
