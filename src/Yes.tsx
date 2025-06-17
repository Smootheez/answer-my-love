import hugging from "/dudu-hug-bubu-dudu-kiss.gif";

export function Yes() {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-2">
      <img src={hugging} alt="hug" />
      <h1 className="text-3xl font-bold">I Knew It!</h1>
    </div>
  );
}
