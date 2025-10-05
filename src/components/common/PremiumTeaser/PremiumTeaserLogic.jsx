import { useAuth } from '../../../context/AuthContext';
import PremiumTeaserUI from './PremiumTeaserUI';

const PremiumTeaserContainer = () => {
  const { isFreeTier } = useAuth();

  if (!isFreeTier) return null;

  const teaserData = {
    title: "Unlock Premium Features",
    description: "Get unlimited access to exclusive content and advanced features",
    highlights: [
      "Ad-free experience",
      "Priority support",
      "Advanced analytics",
      "Exclusive content",
      "Early access"
    ],
    price: {
      amount: "9.99",
      period: "month"
    },
    ctaText: "Explore Premium",
    ctaLink: "/premium"
  };

  return <PremiumTeaserUI {...teaserData} />;
};

export default PremiumTeaserContainer;