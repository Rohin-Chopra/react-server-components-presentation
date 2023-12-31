import { FaSpinner } from "react-icons/fa";

export const LoadingWetherDetailsBox = () => {
  return (
    <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
      <FaSpinner className="animate-spin text-2xl" />
    </div>
  );
};
