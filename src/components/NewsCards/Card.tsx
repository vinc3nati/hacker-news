type TCard = {
  title: string;
  author: string;
  created_at: string;
  id: string;
  onClick: (id: string) => void;
};

export default function Card({
  title,
  author,
  created_at,
  onClick,
  id,
}: TCard) {
  const dateObject = new Date(created_at);
  const dateToDisplay = dateObject.toLocaleString().split(",")[0];

  return (
    <div
      className="w-full mx-auto cursor-pointer"
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="p-6 overflow-hidden whitespace-nowrap text-ellipsis flex flex-col">
          <h2
            className="w-[90%] mb-2 overflow-hidden whitespace-nowrap text-ellipsis"
            title={author}
          >
            By: {author}
          </h2>
          <h1
            className="w-[90%] mb-auto font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis"
            title={title}
          >
            {title}
          </h1>
          <p className="leading-relaxed mt-3 w-1/2 text-sm font-light">
            {dateToDisplay}
          </p>
        </div>
      </div>
    </div>
  );
}
