import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
const Components = () => {
  const [newValue, setCurrent] = useState(2);

  const onChange = (e, val) => {
    console.log(val);
    setCurrent(val);
    //if i use event.target.name the slider is stuck
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "black",
            height: "74vh",
            marginTop: "10vh",
            padding: "40px",
          }}
        >
          <Box sx={{ bgcolor: "#24232B", height: "72vh", padding: "14px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "1vh",
              }}
            >
              <Typography sx={{ color: "white" }} variant="h6" color="initial">
                #WFHWFDW#$@
              </Typography>
              <ContentCopyIcon sx={{ color: "white" }} />
            </Box>
            <Box
              sx={{
                paddingLeft: "3vw",
                paddingRight: "3vw",
                paddingTop: "1vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "white" }}
                  variant="subtitle1"
                  color="initial"
                >
                  Character Length{" "}
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: "20px" }}
                  variant="subtitle2"
                >
                  {newValue}
                </Typography>
              </Box>

              <Slider sx={{color: "#2A8B8B"}}
                defaultValue={20}
                value={newValue}
                aria-label="Default"
                onChange={onChange}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                justifyContent: "space-between",
                backgroundColor: "black",
                m: "10px",

                color: "whitesmoke",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "whitesmoke",
                  fontWeight: "bold",
                  paddingTop: "1vh",
                }}
                variant="h6"
              >
                STRENGTH
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ color: "#ffffff", paddingLeft: "3vh" }}
                  component="legend"
                >
                  Poor{" "}
                </Typography>
                <StyledRating
                  name="customized-color"
                  defaultValue={2}
                  precision={0.5}
                  icon={<HorizontalRuleIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </Box>
            </Box>
            <Box sx={{ padding: "10px", mt: "-10px" }}>
              <Button
                sx={{
                  width: "33vw",
                  height: "10vh",
                  borderRadius: "4px",
                  backgroundColor: "#2A8B8B",
                }}
                variant="contained"
              >
                GENERATE
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Components;
