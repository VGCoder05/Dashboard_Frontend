// components/UpgradePrompt.js
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UpgradePrompt = () => {
  const { upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  const handleUpgrade = async () => {
    try {
      await upgradeToPremium();
      alert("Successfully upgraded to Premium!");
      window.location.reload(); // Refresh to update access
    } catch (error) {
      alert("Upgrade failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h-.5a1 1 0 000-2H8a2 2 0 012-2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-center mb-2">Premium Access Required</h1>
          <p className="text-center text-blue-100">Unlock exclusive features with Premium</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Premium Features</h2>
            <ul className="space-y-3">
              {[
                "Unlimited access to all premium content",
                "Advanced analytics and insights",
                "Priority customer support",
                "Ad-free experience",
                "Download content for offline access",
                "Early access to new features"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Monthly Plan</h3>
                <p className="text-gray-600">Billed monthly</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-800">$9.99</p>
                <p className="text-gray-600">/month</p>
              </div>
            </div>
            <button
              onClick={handleUpgrade}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition duration-300"
            >
              Upgrade to Premium
            </button>
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePrompt;