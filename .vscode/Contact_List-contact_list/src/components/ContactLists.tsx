import { Button, Input, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { contactsProps } from "../type/Type";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactLists = (props: contactsProps) => {
  return (
    <Box
      sx={{
        margin: "15px",
        borderRight: "1px solid grey",
        background: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          borderBlockEnd: "1px solid grey",
        }}
      >
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search"
        />
        <Box sx={{ padding: "5px" }}>
          <Button
            variant="contained"
            sx={{ background: "white", color: "blue" }}
          >
            New
          </Button>
        </Box>
      </Box>
      <Box>
      <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                // paddingBottom: "10px",
              }}
            >
              <Link to="/contactCard">maidenName</Link>
              <DeleteIcon />
            </Box>
        {props.contacts.map((item:any) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                // paddingBottom: "10px",
              }}
            >
              <Link to="">{item.maidenName}</Link>
              <DeleteIcon />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ContactLists;
