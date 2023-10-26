import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { LuTimerReset } from "react-icons/lu";
import { AiOutlinePause } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

function App() {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (timeLeft !== 0 && !isPaused) {
      const timeout = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 60000);

      return () => clearTimeout(timeout);
    }
  }, [timeLeft, isPaused]);

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      if (counter <= 0) return;

      setValue(counter);
      setTimeLeft(counter);
      setCounter(0);
    }
  };

  const handlePause = () => {
    if (timeLeft === 0) return;

    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setTimeLeft(0);
    setCounter(0);
    setValue(0);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {value === 0 ? (
        <p className="font-medium mb-1">Countdown is not running</p>
      ) : (
        <p className="font-medium mb-1">
          Countdown Started for {value} minutes
        </p>
      )}
      <div className="border-2 p-12 rounded-lg border-red-400 shadow-red-400 shadow-lg">
        <p className="text-4xl tracking-widest font-extrabold">
          <span>{timeLeft}</span> minutes left
        </p>
      </div>

      <div className="mt-12 border-2 p-12 rounded-lg border-pink-400 shadow-pink-400 shadow-lg">
        <div className="flex items-center gap-5">
          <p className="text-2xl font-medium">Enter The time</p>
          <Input
            className="w-fit"
            size="lg"
            value={counter === 0 ? "" : counter.toString()}
            placeholder="Ex: 10 minutes"
            onChange={(e) => setCounter(Number(e.target.value))}
            onKeyDown={handleEnter}
          />
          <Button
            startContent={
              isPaused ? <BsPlay size={18} /> : <AiOutlinePause size={18} />
            }
            onClick={handlePause}
            variant="solid"
            color="secondary"
          >
            {isPaused ? "Play" : "Pause"}
          </Button>
          <Button
            startContent={<LuTimerReset size={18} />}
            onClick={handleReset}
            variant="solid"
            color="danger"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
