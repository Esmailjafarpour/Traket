import { useQuery } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage";
import PageNotFound from "pages/404";
import { getProfile } from "services/user";
import Loader from "components/modules/Loader"

const Router = () => {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  // console.log({ data, isLoading, error });

  if (isLoading) return <Loader/>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/"/>} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
