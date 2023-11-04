import { FaCalendar, FaCloud } from "react-icons/fa";

const start = 1;
const end = 9;
const numbersArray = Array.from(
  { length: end - start + 1 },
  (_, i) => start + i
);

export const DailyForecast = () => {
  return (
    <div className="px-4 py-3 rounded-lg bg-night max-w-[18rem]">
      <div className="text-xs flex items-center text-nightText">
        <FaCalendar className="mr-2" /> DAILY FORECAST
      </div>
      <hr className="mt-3 mb-2 border-t-nightText" />
      <div className="space-y-2">
        {numbersArray.map((number) => (
          <>
            <div key={number} className="flex items-center py-1">
              <p className="w-16">Today</p>
              <div className="w-10">
                <FaCloud />
              </div>
              <div className="w-36">
                <span className="text-nightText">16°</span> bar{" "}
                <span className="font-medium">16°</span>
              </div>
            </div>
            <hr className="my-2 border-t-nightText" />
          </>
        ))}
      </div>
    </div>
  );
};
