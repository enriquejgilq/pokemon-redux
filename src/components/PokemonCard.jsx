import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavotite } from "../actions";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((item) => item.type.name).join(", ");
  const handleFavorite = () => {
    dispatch(setFavotite({ pokemonId: id }));
  };

  return (
    <div>
      <Card
        title={name}
        extra={<StarButton isFavorite={favorite} onClick={handleFavorite} />}
        cover={<img src={image} alt={name} />}
      >
        <Meta description={typeString} />
      </Card>
    </div>
  );
};

export default PokemonCard;
