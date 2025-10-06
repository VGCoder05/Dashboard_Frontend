
const UpgradePromptUI = ({ 
  features, 
  pricing, 
  onUpgrade, 
  onGoBack, 
  isLoading 
}) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl bg-surface rounded-xl shadow-custom-light overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-display font-bold text-center mb-2">
            Premium Access Required
          </h1>
          <p className="text-center font-display">
            Unlock exclusive features with Premium
          </p>
        </div>

        {/* Content */}
        <div className="p-8 shadow-2xs shadow-black">
          {/* Features List */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-text">
              Premium Features
            </h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-50 to-blue-400 text-[#363636] shadow-2xs rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform ">
                    <svg
                      className="w-3 h-3 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-text font-display">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-background to-border rounded-lg p-6 mb-6 border border-border">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-display font-semibold text-text">
                  {pricing.name}
                </h3>
                <p className="text-subtle font-display text-sm">
                  {pricing.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-display font-bold bg-gradient-to-r  from-blue-400 to-pink-400 bg-clip-text text-shadow-2xs text-transparent">
                  ${pricing.price}
                </p>
                <p className="text-subtle font-display text-sm">
                  /{pricing.period}
                </p>
              </div>
            </div>

            <button
              onClick={onUpgrade}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-3 rounded-lg font-display font-semibold shadow-custom-light hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Upgrade to Premium"}
            </button>
          </div>

          {/* Back button */}
          <button
            onClick={onGoBack}
            className="w-full py-3 border-2 border-border rounded-lg text-text hover:bg-background font-display font-medium transition duration-300"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePromptUI;