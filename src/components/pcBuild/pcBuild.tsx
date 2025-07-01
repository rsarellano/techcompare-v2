"use client";

import React, { useState } from "react";

const pcParts = {};

const pcBuild = () => {
  const [clicked, isClicked] = useState(0);

  return (
    <div className="rounded border border-black h-[550px] w-[800px]">
      <div className="flex justify-center mt-[80px]">
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-700 rounded cursor-pointer m-5"
        >
          Create Build
        </button>
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-700 rounded cursor-pointer m-5"
        >
          Recommended Builds
        </button>
      </div>
    </div>
  );
};

export default pcBuild;
