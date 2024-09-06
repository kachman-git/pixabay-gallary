"use client";
import { Images } from "@/types/Search";

const Card = (props: Images) => {
  return (
    <div className="rounded border bg-white shadow-md">
      {props.isLoading ? (
        <h1 className="mt-20 mx-auto text-center animate-bounce animate text-green-500">
          Loading.....
        </h1>
      ) : (
        <img src={props.webformatURL} alt={props.user} className="w-full" />
      )}
      <div className="p-4 space-y-4 ">
        <h1 className="text-purple-500 md:text-xl text-lg font-semibold">{`Photo by ${props.user}`}</h1>
        <p>
          <span className="font-bold">Views: </span>
          {props.views}
        </p>
        <p>
          <span className="font-bold">Downloads: </span>
          {props.downloads}
        </p>
        <p>
          <span className="font-bold">Likes: </span>
          {props.likes}
        </p>
        <span className="flex flex-row justify-evenly items-center">
          {props.tags.split(", ").map((tag) => (
            <p
              className="px-5 py-3 mt-4 rounded-full  bg-slate-300 text-gray-800"
              key={tag}
            >
              #{tag}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Card;
