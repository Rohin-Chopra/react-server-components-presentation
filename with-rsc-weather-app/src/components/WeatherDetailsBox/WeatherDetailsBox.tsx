import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

type Props = PropsWithChildren & {
  title: string;
  icon: IconType;
  metric: string;
  metricText?: string;
  description: string;
};

export const WeatherDetailsBox = ({
  title,
  description,
  icon: Icon,
  metric,
  metricText,
  children,
}: Props) => {
  return (
    <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex flex-col justify-between">
      <div>
        <header className="text-xs flex items-center text-nightText">
          <Icon className="mr-2" />
          <span>{title}</span>
        </header>
        <div className="text-2xl mt-2">
          {metric}
          {metricText && (
            <>
              <br />
              <p className="text-xs font-medium">{metricText}</p>
            </>
          )}
          {children}
        </div>
      </div>
      <div className="text-xs">{description}</div>
    </div>
  );
};
