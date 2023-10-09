import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { HomePages } from "../pages/HomePages";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
