import { Avatar, Button, Stack } from "@mui/material";
import { Link } from "react-router";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { currentUser } = useAuth();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
      zIndex={10}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={35} />
      </Link>
      <Stack direction="row" gap="15px">
        <SearchBar />

        {!currentUser ? (
          <Link to="/signup">
            {" "}
            <Button
              variant="contained"
              style={{ background: "#F31503", margin: "5px 0px" }}
            >
              Sign up
            </Button>
          </Link>
        ) : (
          <Link to={"/profile"}>
            <Avatar>{currentUser.email.toUpperCase().slice(0, 2)}</Avatar>
          </Link>
        )}
      </Stack>
    </Stack>
  );
}

export default NavBar;
