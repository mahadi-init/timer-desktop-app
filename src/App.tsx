import {
  CounterView,
  InputGroup,
  ButtonGroup,
  HistoryModal,
} from "./components/get-components";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState<string>();
  const [timer, setTimer] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setIsActive(false);
          clearInterval(interval);
          console.log(minutes);
        } else {
          if (seconds === 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          } else {
            setSeconds((prev) => prev - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const handleStart = (initialTitle: string, initialTimer: number) => {
    if (initialTimer <= 0) return;

    setTitle(initialTitle);
    setTimer(initialTimer);
    setMinutes(initialTimer);
    setSeconds(0);

    setIsActive(true);
  };

  const handlePause = () => {
    if (minutes == 0) return;

    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);

    setTitle(undefined);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {timer === 0 ? (
        <p className="font-medium mb-4">Countdown is not running</p>
      ) : (
        <p className="font-medium mb-4">
          {title ? (
            <span className="font-bold text-amber-400">
              {title.toUpperCase()}
            </span>
          ) : (
            "Countdown"
          )}{" "}
          Started for {timer} minutes
        </p>
      )}
      <CounterView minutes={minutes} seconds={seconds} />
      <div className="mt-12 border-2 p-12 rounded-lg border-pink-400 shadow-pink-400 shadow-lg">
        <div className="px-12 flex flex-col items-center gap-8">
          <InputGroup handleStart={handleStart} isActive={isActive} />
          <ButtonGroup
            isActive={isActive}
            minutes={minutes}
            setMinutes={setMinutes}
            handlePause={handlePause}
            handleReset={handleReset}
          />
        </div>
      </div>
      <div className="mt-12">
        <HistoryModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          // timerStores={timerStores}
        />
      </div>
    </div>
  );
}

export default App;
