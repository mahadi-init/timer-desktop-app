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
      <div className="border-2 p-12 rounded-lg border-red-400 shadow-red-400 shadow-lg">
        <p className="text-4xl tracking-widest font-extrabold">
          <span>{timeLeft}</span> minutes left
        </p>
      </div>
    </>
  );
}
