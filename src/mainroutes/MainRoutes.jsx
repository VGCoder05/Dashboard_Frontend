import { Route, Routes } from "react-router-dom";
import DashboardPages from "../pages/DashboardPages";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import PremiumRoute from "../components/routes/PremiumRoute/PremiumRoute";
import PremiumPage from "../pages/PremiumPage";
import UpgradePrompt from '../components/common/UpgradePrompt/UpgradePromptLogic';
import PremiumFeatureCard from '../components/common/PremiumPg/PremiumFeatureCard';


const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPages />
          </ProtectedRoute> 
        }
      />
      <Route
        path="/product"
        element={
          <ProtectedRoute>
            <DashboardPages />
          </ProtectedRoute> 
        }
      />

      {/* Premium Protected Route */}
      <Route 
        path="/premium" 
        element={
          <PremiumRoute>
            <PremiumPage />
          </PremiumRoute>
        } 
      />
      <Route 
        path="/premium-features" 
        element={
          <>
            <UpgradePrompt />
          </>
        } 
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
