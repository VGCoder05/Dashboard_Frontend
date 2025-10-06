// component - Shown to free users
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const PremiumTeaser = () => {
  const { isFreeTier } = useAuth();

  if (!isFreeTier) return null;

  return (
    <div className="m-3 bg-gradient-to-br from-blue-300 to-pink-200 rounded-lg p-6 text-white mb-6">
      <h3 className="text-xl font-bold mb-2">🌟 Unlock Premium Features</h3>
      <p className="mb-4">
        Get access to exclusive content and advanced features
      </p>
      <Link
        to="/premium-features"
        className="inline-block bg-white text-pink-400 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Explore Premium →
      </Link>
    </div>
  );
};

export default PremiumTeaser;