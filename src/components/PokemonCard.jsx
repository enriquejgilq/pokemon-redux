import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name }) => {
  return (
    <div>
      <Card
        title={name}
        extra={<StarOutlined />}
        cover={
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt="dito"
          />
        }
      >
        <Meta description="hola,  hola1" />
      </Card>
    </div>
  );
};

export default PokemonCard;
