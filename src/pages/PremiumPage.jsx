import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../util/api';

const PremiumPage = () => {
  const { user, isPremium } = useAuth();
  const [premiumContent, setPremiumContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPremiumContent();
  }, []);

  const fetchPremiumContent = async () => {
    try {
      const res = await api.get('/premium/content');
      setPremiumContent(res.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary font-display">
          Loading premium content...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-surface rounded-xl shadow-custom-light p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-text mb-2">
                Premium Dashboard
              </h1>
              <p className="text-subtle font-display">
                Welcome back, {user?.email?.split('@')[0]}
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary to-subtle text-white px-6 py-3 rounded-full font-display font-semibold shadow-custom-light">
              ✨ PREMIUM MEMBER
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Days Active", value: "30", icon: "📅" },
              { label: "Features Unlocked", value: "12", icon: "🔓" },
              { label: "Priority Level", value: "MAX", icon: "⚡" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-background to-border rounded-lg p-4 border border-border"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-subtle text-sm font-display">{stat.label}</p>
                    <p className="text-2xl font-bold font-display text-text mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumContent?.data?.features?.map((feature, index) => (
            <div
              key={index}
              className="group bg-surface rounded-xl p-6 shadow-custom-light hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-subtle rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-text mb-2">
                {feature}
              </h3>
              <p className="text-subtle font-display text-sm">
                Exclusive premium feature now available for your account
              </p>
              <div className="mt-4 flex items-center text-primary font-display text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>Explore</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;