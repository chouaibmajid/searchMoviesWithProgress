import React from "react";
import CardFilm from "./CardFilm";

function Loading({ data }) {
  const [pourcentage, setPourcentage] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      pourcentage < 100 &&
        setPourcentage(
          (pourcentage) => pourcentage + Math.floor(Math.random() * 40)
        );
    }, 300);
    return () => clearInterval(interval);
  }, [pourcentage]);
  return (
    <div className="space-y-10">
      <div className="mx-auto mt-12 h-5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-5 rounded-full bg-green-600"
          style={{ width: pourcentage < 101 ? `${pourcentage}%` : "100%" }}
        ></div>
      </div>

      <div
        className={`text-center text-3xl font-bold ${
          pourcentage > 99 && "animate-ping"
        }`}
      >
        Loading {pourcentage < 101 ? pourcentage : "100"} %
      </div>

      <div className={` text-center text-3xl ${pourcentage < 100 && "hidden"}`}>
        {data.Response === "True" ? (
          <div class="p-10 mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {data.Search.map((mv) => (
              <CardFilm Title={mv.Title} Poster={mv.Poster} />
            ))}
          </div>
        ) : (
          <div>Aucun film trouvé</div>
        )}
      </div>
    </div>
  );
}
export default Loading;
