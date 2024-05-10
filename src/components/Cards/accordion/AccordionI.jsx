import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, )"
      : "rgba(255, 255, 255, )",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

export default function AccordionI() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className="min-w-[18px] min-h-[18px] cursor-pointer bg-[#ffffff] border-[2px]  border-black appearance-none rounded-lg flex justify-center items-center"
              type="checkbox"
              name="service"
              id="Страхование"
              value="Страхование"
            />
            <div className="flex flex-col gap-[2px]">
              <h4>Вода</h4>
              <small className="text-[12px] font-normal leading-5 text-left opacity-70">
                Выберите
              </small>
            </div>
          </div>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          ></AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography className="">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>2 кабины</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>2 кабины</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>2 кабины</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
