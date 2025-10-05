import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import UpgradePromptUI from './UpgradePromptUI';

const UpgradePromptContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  const features = [
    "Unlimited access to all premium content",
    "Advanced analytics and insights",
    "Priority customer support",
    "Ad-free experience",
    "Download content for offline access",
    "Early access to new features"
  ];

  const pricing = {
    name: "Monthly Premium",
    description: "Cancel anytime",
    price: 9.99,
    period: "month"
  };

  const handleUpgrade = async () => {
    setIsLoading(true);
    try {
      await upgradeToPremium();
      alert("Successfully upgraded to Premium!");
      navigate('/premium');
    } catch (error) {
      alert("Upgrade failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <UpgradePromptUI
      features={features}
      pricing={pricing}
      onUpgrade={handleUpgrade}
      onGoBack={handleGoBack}
      isLoading={isLoading}
    />
  );
};

export default UpgradePromptContainer;