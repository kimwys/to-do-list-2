type LoadingStateProps = {
  message: string;
};

export default function LoadingState({ message }: LoadingStateProps) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center rounded-xl border border-gray-300 bg-white px-15 py-7 shadow-xl">
          <h1 className="text-xl font-semibold text-green-600">LOADING...</h1>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
