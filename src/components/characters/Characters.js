import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from './CharacterItem';

const Characters = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner/>
    ) : (
    <section className="cards">
    {items.map((item) => (
        <CharacterItem key = {item.char_id} item = {item} />
    ))}
  </section>
  );
};

export default Characters;


// One of the character image is missing do not forget to fix it.