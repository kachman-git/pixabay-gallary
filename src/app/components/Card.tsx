"use client";
import { Images } from "@/types/Search";
import Image from "next/image";

const Card = (props: Images) => {
  return (
    <div className="rounded">
      <Image src={props.webformatURL} alt={props.user} />
      <h1>{`Photo by ${props.user}`}</h1>
      <p>{`views: ${props.views}`}</p>
      <p>{`Downloads : ${props.download}`}</p>
      <p>{`Likes: ${props.likes}`}</p>

      <div className="flex flex-row justify-between items-center">
        {props.tags.split(" ").join(" ")}
      </div>
    </div>
  );
};

export default Card;
