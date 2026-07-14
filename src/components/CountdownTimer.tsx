import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

interface CountdownTimerProps {
  endDate: string;
}

export default function CountdownTimer({
  endDate,
}: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference =
      new Date(endDate).getTime() - Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (!timeLeft) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-center">
        <p className="text-sm font-semibold text-red-200">
          Offer Expired
        </p>
      </div>
    );
  }

  const TimeBox = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex min-w-[64px] flex-col items-center rounded-2xl border border-yellow-300/20 bg-white/5 px-3 py-3 backdrop-blur-sm">

      <span className="bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent">

        {String(value).padStart(2, "0")}

      </span>

      <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">

        {label}

      </span>

    </div>
  );

  return (
    <div>

      <div className="mb-4 flex items-center justify-center gap-2">

        <Clock3
          size={16}
          className="text-yellow-300"
        />

        <span className="text-xs uppercase tracking-[0.3em] text-yellow-200">

          Offer Ends In

        </span>

      </div>

      <div className="flex justify-center gap-3">

        <TimeBox
          value={timeLeft.days}
          label="Days"
        />

        <TimeBox
          value={timeLeft.hours}
          label="Hours"
        />

        <TimeBox
          value={timeLeft.minutes}
          label="Minutes"
        />

        <TimeBox
          value={timeLeft.seconds}
          label="Seconds"
        />

      </div>

    </div>
  );
}