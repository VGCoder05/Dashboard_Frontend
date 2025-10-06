const PremiumBadge = ({ size = "small", text = "PRO" }) => {
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2"
  };

  return (
      <div class={`flex items-center gap-1 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-600 dark:text-yellow-400  ${sizeClasses[size]}`}>
        <span class="material-symbols-outlined text-base">star</span>
        <span>{text}</span>
      </div>
  );
};


export default PremiumBadge;