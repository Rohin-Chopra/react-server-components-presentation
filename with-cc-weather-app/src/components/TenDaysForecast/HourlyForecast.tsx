import { FaCloud } from "react-icons/fa";

const start = 1;
const end = 9;
const numbersArray = Array.from(
  { length: end - start + 1 },
  (_, i) => start + i
);

export const HourlyForecast = () => {
  return (
    <div className="px-4 py-3 rounded-lg bg-night mb-4">
      <div className="text-xs">Cloudy conditions expected around 3AM</div>
      <hr className="my-2" />
      <div className="flex space-x-8">
        {numbersArray.map((number) => (
          <div className="space-y-4" key={number}>
            <div className="text-xs">Now</div>
            <div className="flex justify-center">
              <FaCloud />
            </div>
            <div className="text-sm">16°</div>
          </div>
        ))}
      </div>
    </div>
  );
};
