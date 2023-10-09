import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import JournalApp from "../JournalApp";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* login y registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* Journal App */}
        <Route path="/*" element={<JournalApp />} />
        <Route />
      </Routes>
    </>
  );
};

export default AppRouter;
