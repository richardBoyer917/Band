import Publist from "./components/Publist";
import { AdminPageWrapper } from "./components/AdminSection";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminPage = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/adminLogin");
    }
  }, [token]);
  return <AdminPageWrapper content={<Publist />} />;
};

export default AdminPage;
