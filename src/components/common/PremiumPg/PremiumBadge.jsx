const PremiumBadge = ({ size = "small", text = "PRO" }) => {
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2"
  };

  return (
    <span className={`
      bg-gradient-to-r from-primary to-subtle 
      text-white font-display font-semibold 
      rounded-full shadow-custom-light
      ${sizeClasses[size]}
    `}>
      ⭐ {text}
    </span>
  );
};


export default PremiumBadge;