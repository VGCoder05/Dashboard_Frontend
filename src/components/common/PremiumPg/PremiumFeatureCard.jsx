// const PremiumFeatureCard = ({ title, description, icon, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="group bg-surface rounded-xl p-6 shadow-custom-light hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 cursor-pointer"
//     >
//       <div className="w-12 h-12 bg-gradient-to-br from-primary to-subtle rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//         {icon || (
//           <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//           </svg>
//         )}
//       </div>
//       <h3 className="text-lg font-display font-semibold text-text mb-2">
//         {title}
//       </h3>
//       <p className="text-subtle font-display text-sm">
//         {description}
//       </p>
//       <div className="mt-4 flex items-center text-primary font-display text-sm font-medium group-hover:translate-x-1 transition-transform">
//         <span>Explore</span>
//         <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
//         </svg>
//       </div>
//     </div>
//   );
// };



const PremiumFeatureCard = ({ premiumContent }) => {
  return (
    <div className="p-2 md:min-h-[50%] min-h-screen max-w-2xl m-auto rounded-xl border border-primary/20 bg-background-light p-6 dark:border-primary/30 dark:bg-background-dark/50">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center size-12 rounded-full bg-yellow-400/20 text-yellow-600 dark:text-yellow-400">
            <span className="material-symbols-outlined text-3xl">star</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Premium Plan
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Unlock advanced features
            </p>
          </div>
        </div>
        <div className="flex-grow space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
              check_circle
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Advanced Analytics
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
              check_circle
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Priority Support
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
              check_circle
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Customizable Reports
            </p>
          </div>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-4">
          <button className="flex h-10 w-full items-center justify-center gap-x-2 rounded-lg bg-primary px-4 text-sm font-medium text-white hover:bg-primary/90">
            Upgrade
          </button>
          <button className="flex h-10 w-full items-center justify-center gap-x-2 rounded-lg bg-primary/10 px-4 text-sm font-medium text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatureCard;
