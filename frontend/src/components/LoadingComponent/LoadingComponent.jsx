import React from "react";
import { CircularProgress } from "@mui/material";
import "./LoadingComponent.css";

export const LoadingComponent = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <CircularProgress flex />
      </div>
    </div>
  );
};
