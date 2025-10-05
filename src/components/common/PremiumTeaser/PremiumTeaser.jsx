// component - Shown to free users
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const PremiumTeaser = () => {
  const { isFreeTier } = useAuth();

  if (!isFreeTier) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white mb-6">
      <h3 className="text-xl font-bold mb-2">🌟 Unlock Premium Features</h3>
      <p className="mb-4">Get access to exclusive content and advanced features</p>
      <Link 
        to="/premium-features"
        className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Explore Premium →
      </Link>
    </div>
  );
};

export default PremiumTeaser;