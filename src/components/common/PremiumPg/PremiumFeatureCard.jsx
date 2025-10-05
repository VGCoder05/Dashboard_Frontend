const PremiumFeatureCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-surface rounded-xl p-6 shadow-custom-light hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 cursor-pointer"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-subtle rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon || (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-display font-semibold text-text mb-2">
        {title}
      </h3>
      <p className="text-subtle font-display text-sm">
        {description}
      </p>
      <div className="mt-4 flex items-center text-primary font-display text-sm font-medium group-hover:translate-x-1 transition-transform">
        <span>Explore</span>
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};


export default PremiumFeatureCard;