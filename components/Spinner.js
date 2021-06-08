export default function Spinner() {
  return (
    <div className="spinner border-gray-800 border-2 w-8 h-8  mx-auto block rounded-full animate-spin">
      <style>{`
                .spinner {
                    border-top-color: transparent;
                    border-right: none;
                }
            `}</style>
    </div>
  );
}
