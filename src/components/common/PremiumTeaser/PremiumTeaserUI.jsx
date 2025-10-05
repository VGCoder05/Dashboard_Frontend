import { Link } from 'react-router-dom';

const PremiumTeaserUI = ({ 
  title, 
  description, 
  highlights, 
  price, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-subtle rounded-xl p-6 text-white mb-6 shadow-custom-light">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-display font-bold mb-2 flex items-center">
              <span className="text-2xl mr-2">✨</span>
              {title}
            </h3>
            <p className="mb-4 text-white/90 font-display">
              {description}
            </p>
            <ul className="space-y-1 mb-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-white/80 font-display">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              to={ctaLink}
              className="inline-flex items-center bg-white text-primary px-6 py-2.5 rounded-lg font-display font-semibold hover:bg-surface hover:shadow-lg transition-all duration-300 group"
            >
              <span>{ctaText}</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>
          {price && (
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <span className="text-3xl font-display font-bold">${price.amount}</span>
                <p className="text-xs text-white/70 font-display">/{price.period}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default PremiumTeaserUI;