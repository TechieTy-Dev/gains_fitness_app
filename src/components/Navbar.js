import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "123px", xs: "40px" },

        justifyContent: "none",
      }}
      px="20px"
      pt="40px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "120px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Roboto"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            borderBottom: "3px solid #8299e6 ",
          }}
          className="nav-link"
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#fff" }}
          className="nav-link"
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
