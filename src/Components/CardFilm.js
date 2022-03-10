import React from "react";
function CardFilm({ Title, Poster }) {
  return (
    <div class="hover:opacity-25 cursor-pointer overflow-hidden shadow-2xl rounded-lg">
      <img
        src={Poster}
        className="object-cover h-[250px] w-full "
        alt={Title}
      />

      <div class="px-6 py-4 h-full bg-gray-200">
        <div class="font-bold text-xl mb-2 text-center">{Title}</div>
      </div>
    </div>
  );
}

export default CardFilm;
