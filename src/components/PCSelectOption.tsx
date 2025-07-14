import React from "react";
import Button from "@mui/material/Button";

type Props = {
  onCustomBuildClick: () => void;
  onRecommendedBuildClick: () => void;
};

const pcselectOption: React.FC<Props> = ({
  onCustomBuildClick,
  onRecommendedBuildClick,
}) => {
  return (
    <div>
      <div>
        <Button onClick={onCustomBuildClick}> Custom Build</Button>
      </div>
      <div>
        <Button onClick={onRecommendedBuildClick}> Recommended Build</Button>
      </div>
    </div>
  );
};

export default pcselectOption;
