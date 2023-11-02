import { Input } from "@nextui-org/react";

export default function InputGroup({
  isActive,
  setTitle,
  setTimer,
  handleStart,
}: {
  isActive: boolean;
  setTitle: (arg0: string) => void;
  setTimer: (arg0: number) => void;
  handleStart: (arg0: any) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <p className="text-xl font-medium">Enter a title</p>
        <Input
          className="w-fit"
          size="lg"
          placeholder="Leetcode Problem 1001"
          onChange={(e) => setTitle(e.target.value)}
          disabled={isActive}
        />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl font-medium">Enter The time</p>
        <Input
          className="w-fit"
          size="lg"
          placeholder="Ex: 10 minutes"
          onChange={(e) => {
            if (!isNaN(Number(e.target.value)))
              setTimer(Number(e.target.value));
          }}
          onKeyDown={handleStart}
          disabled={isActive}
        />
      </div>
    </div>
  );
}
