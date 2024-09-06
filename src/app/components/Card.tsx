"use client";
import { Images } from "@/types/Search";
import Image from "next/image";

const Card = (props: Images) => {
  return (
    <div className="rounded">
      <Image src={props.webformatURL} alt={props.user} />
      <div className="p-4">
        <h1 className="text-purple-500 font-semibold">{`Photo by ${props.user}`}</h1>
        <p>
          <span className="font-bold">views: </span>
          {props.views}
        </p>
        <p>
          <span className="font-bold">Downloads: </span>
          {props.download}
        </p>
        <p>
          <span className="font-bold">Likes: </span>
          {props.likes}
        </p>
        <span className="flex flex-row justify-between items-center">
          {props.tags.split(", ").map((tag) => (
            <p className="p-3 bg-slate-300 text-gray-800">{tag}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Card;
