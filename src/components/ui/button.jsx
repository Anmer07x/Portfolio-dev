export function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md ${className}`}
      >
        {children}
      </button>
    );
  }
 