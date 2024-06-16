import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage";
import PageNotFound from "pages/404";

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
