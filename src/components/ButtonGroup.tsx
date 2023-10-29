import { Button } from "@nextui-org/react";
import { LuTimerReset } from "react-icons/lu";
import { AiOutlinePause } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

export default function ButtonGroup({
  isPaused,
  handlePause,
  handleReset,
}: {
  isPaused: boolean;
  handlePause: () => void;
  handleReset: () => void;
}) {
  return (
    <>
      <div className="flex gap-8">
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
    </>
  );
}
