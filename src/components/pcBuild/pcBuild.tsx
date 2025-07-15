"use client";

import React, { act, useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PCSelectOption from "../PCSelectOption";

const pcParts = {};

const pcBuild = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;
  const [buildType, setBuildType] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleCustomBuildClick = () => {
    setBuildType("custom");
    handleNext();
  };

  return (
    <div className="rounded border border-black h-[550px] w-[800px]">
      <div className="flex justify-center items-center pt-[60px]">
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
              boxShadow: "none",
              color: "primary.main",
              fontWeight: theme.typography.fontWeightMedium,
            }}
          >
            <Typography>
              {activeStep === 0 && "Step 1: Choose Option"}
              {activeStep === 1 && "Step 2: Customize"}
              {activeStep === 2 && "Step 3: Finalize"}
            </Typography>
          </Paper>

          <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
            {activeStep === 0 && (
              <div>
                choose option
                <div>
                  <PCSelectOption />
                </div>
              </div>
            )}

            {activeStep === 1 && <div>select parts</div>}

            {activeStep === 2 && <div>finalize</div>}
          </Box>

          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx={{ color: "#dc2626" }}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
    </div>
  );
};

export default pcBuild;
