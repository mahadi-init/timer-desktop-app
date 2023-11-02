export default function CounterView({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) {
  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-2 p-3 rounded-full border-2 border-red-400 shadow-red-400 shadow-lg">
        <p className="h-32 w-32 ps-1 flex items-center justify-center bg-red-700 rounded-full text-4xl tracking-widest font-bold">
          {minutes <= 9 ? `0${minutes}` : minutes}:
          {seconds <= 9 ? `0${seconds}` : seconds}
        </p>
        <p className="text-4xl tracking-widest me-2 mb-1">minutes left</p>
      </div>
    </>
  );
}
