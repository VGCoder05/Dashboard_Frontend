const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        <p className="mt-4 text-text font-display">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;