"use client";
import { addFavorite, deleteFavorite } from "@/lib/actions/acj";
import { Heart } from "lucide-react";
import React from "react";

const FavButton = ({
  userId,
  acjId,
  isFavorited,
}: {
  userId: string;
  acjId: string;
  isFavorited: boolean;
}) => {
  return (
    <div className="flex items-center">
      {isFavorited ? (
        <form action={deleteFavorite}>
          <input type="hidden" name="acjId" value={acjId} />
          <input type="hidden" name="userId" value={userId} />
          <button
            type="submit"
            className="bg-transparent border-none text-primary cursor-pointer hover:text-primary hover:scale-110 transition duration-300"
          >
            <Heart className="w-6 h-6 fill-primary" />
          </button>
        </form>
      ) : (
        <form action={addFavorite}>
          <input type="hidden" name="acjId" value={acjId} />
          <input type="hidden" name="userId" value={userId} />
          <button
            type="submit"
            className="bg-transparent border-none text-primary cursor-pointer hover:text-primary hover:scale-110 transition duration-300"
          >
            <Heart className="w-6 h-6 fill-none" />
          </button>
        </form>
      )}
    </div>
  );
};

export default FavButton;
