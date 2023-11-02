import { Input } from "@nextui-org/react";
import { useState } from "react";

export default function InputGroup({
  isActive,
  handleStart,
}: {
  isActive: boolean;
  handleStart: (arg0: string, arg1: number) => void;
}) {
  const [initialTitle, setInitialTitle] = useState("");
  const [initialTimer, setInitialTimer] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <p className="text-xl font-medium">Enter a title</p>
        <Input
          className="w-fit"
          size="lg"
          value={initialTitle}
          placeholder="Leetcode Problem 1001"
          onChange={(e) => setInitialTitle(e.target.value)}
          disabled={isActive}
        />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl font-medium">Enter The time</p>
        <Input
          className="w-fit"
          size="lg"
          value={initialTimer}
          placeholder="Ex: 10 minutes"
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) setInitialTimer(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleStart(initialTitle, Number(initialTimer));
              setInitialTitle("");
              setInitialTimer("");
            }
          }}
          disabled={isActive}
        />
      </div>
    </div>
  );
}
