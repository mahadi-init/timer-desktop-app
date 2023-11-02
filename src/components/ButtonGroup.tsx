import { Button } from "@nextui-org/react";
import { LuTimerReset } from "react-icons/lu";
import { AiOutlinePause } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function ButtonGroup({
  isActive,
  minutes,
  setMinutes,
  handlePause,
  handleReset,
}: {
  isActive: boolean;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  handlePause: () => void;
  handleReset: () => void;
}) {
  const addMinutes = () => {
    if (minutes == 0) return;
    setMinutes((prev) => prev + 5);
  };

  const removeMinutes = () => {
    if (minutes == 0) return;
    if (minutes - 5 < 0) return 0;

    setMinutes((prev) => prev - 5);
  };

  return (
    <div className="flex gap-8">
      <Button
        startContent={<LuPlus size={18} />}
        onClick={addMinutes}
        variant="solid"
        color="primary"
      >
        Add 5
      </Button>
      <Button
        startContent={<LuMinus size={18} />}
        onClick={removeMinutes}
        variant="solid"
        color="danger"
      >
        Remove 5
      </Button>
      <Button
        startContent={
          isActive ? <AiOutlinePause size={18} /> : <BsPlay size={18} />
        }
        onClick={handlePause}
        variant="solid"
        color="secondary"
      >
        {isActive ? "Pause" : "Play"}
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
  );
}
