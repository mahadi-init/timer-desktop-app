export default function CounterView({
  value,
  timeLeft,
}: {
  value: number;
  timeLeft: number;
}) {
  return (
    <>
      {value === 0 ? (
        <p className="font-medium mb-1">Countdown is not running</p>
      ) : (
        <p className="font-medium mb-1">
          Countdown Started for {value} minutes
        </p>
      )}

      <div className="flex items-center justify-center gap-3 mt-10 p-3 rounded-full border-2 border-red-400 shadow-red-400 shadow-lg">
        <p className="h-32 w-32 ps-1 flex items-center justify-center bg-orange-400 rounded-full shadow-orange-900 shadow-inner text-4xl tracking-widest font-extrabold">{timeLeft}</p>
        <p className="text-4xl tracking-widest me-2 mb-1">minutes left</p>
      </div>
    </>
  );
}
