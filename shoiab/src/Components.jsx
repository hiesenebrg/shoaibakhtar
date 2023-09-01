import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Components = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "black",
            height: "60vh",
            marginTop: "20vh",
            padding: "40px",
          }}
        >
          <Box sx={{ bgcolor: "grey", height: "60vh" }}>
            <Box sx={{ padding: "2vh" }}>
              <Typography sx={{ color: "white" }} variant="h6" color="initial">
                #WFHWFDW#$@
              </Typography>
            </Box>
            <Box sx={{ padding: "2vh" }}>
              <Typography
                sx={{ color: "white" }}
                variant="subtitle1"
                color="initial"
              >
                Character Length{" "}
              </Typography>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
            <Box sx={{ padding: "2vh", color: "whitesmoke" }}>
              <FormGroup sx={{ color: "whitesmoke" }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Include Upper case Letters"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Include Lower case Letters"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Include Numbers"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Include Symbols"
                />
              </FormGroup>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Components;
