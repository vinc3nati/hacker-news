export default function CardLoader({
  numberOfCards,
}: {
  numberOfCards: number;
}) {
  const cardsArray = Array(numberOfCards).fill("");

  return (
    <>
      {cardsArray.map((_, idx) => (
        <LoaderCard key={idx} />
      ))}
    </>
  );
}

const LoaderCard = () => {
  return (
    <div className="w-full">
      <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="bg-gray-300 animate-pulse h-4 w-1/4 mb-2"></h2>
          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-400"></h1>
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-300"></p>
        </div>
      </div>
    </div>
  );
};
