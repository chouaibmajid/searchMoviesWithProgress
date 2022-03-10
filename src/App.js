import "./App.css";
import React from "react";
import Loading from "./Components/Loading";
function App() {
  const [etat, setEtat] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const getData = async (search) => {
    if (search) {
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=d075e0a&s=${search}`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  };
  console.log(data);
  return (
    <div className="h-screen bg-gray-50">
      <div className="flex justify-center px-11">
        <input
          type="text"
          onChange={(e) => {
            setEtat(false);
            setData([]);
            setSearch(e.target.value);
          }}
          value={search}
          className="text-2xl font-bold bg-gray-200 w-full outline-none px-2"
        />
        <button
          onClick={() => {
            if (search) {
              getData(search);
              setEtat(true);
            }
          }}
          className={`mx-auto bg-green-400 px-3 py-2 uppercase text-white font-bold hover:shadow-2xl hover:text-green-400 hover:bg-white transition duration-500 ease-in-out `}
        >
          chercher un film
        </button>
      </div>
      {etat && <Loading data={data} />}
    </div>
  );
}

export default App;
