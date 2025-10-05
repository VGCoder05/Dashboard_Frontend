import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

import LoadingSpinner from '../../common/PremiumPg/LoadingSpinner';
import PremiumTeaser from '../../common/PremiumTeaser/PremiumTeaser';

const PremiumRoute = ({ children }) => {
  const { user, isPremium, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner message="Checking access..." />;
    // return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!isPremium) {
    // Show upgrade prompt instead of redirecting
    return       <PremiumTeaser/>
  }

  return children;
};

export default PremiumRoute;