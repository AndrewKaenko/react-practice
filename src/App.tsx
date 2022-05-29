import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Task1FormPage from "./pages/Task1FormPage";
import Task2FormPage from "./pages/Task2FormPage";
import Task3FormPage from "./pages/Task3FormPage";

const App: React.FunctionComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="forms/task-1" element={<Task1FormPage />} />
      <Route path="forms/task-2" element={<Task2FormPage />} />
      <Route path="forms/task-3" element={<Task3FormPage />} />
    </Routes>
  </Router>
);

export default App;
