import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  CounterView,
  HistoryModal,
  InputGroup,
  ButtonGroup,
} from "./components/get-components";

function App() {
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState<string>();
  const [counter, setCounter] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

      console.log(title);
      //TODO: Add title in history
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
      <CounterView value={value} timeLeft={timeLeft} />
      <div className="mt-12 border-2 p-12 rounded-lg border-pink-400 shadow-pink-400 shadow-lg">
        <div className="px-12 flex flex-col items-center gap-8">
          <InputGroup
            setTitle={setTitle}
            setCounter={setCounter}
            handleEnter={handleEnter}
          />
          <ButtonGroup
            isPaused={isPaused}
            handlePause={handlePause}
            handleReset={handleReset}
          />
        </div>
      </div>
      <HistoryModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default App;
