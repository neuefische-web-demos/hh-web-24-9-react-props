import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }

  return (
    <div>
      <Pet
        sound="Meow"
        emoji="🐈"
        name="cat"
        onPet={handlePet}
        isHungry={true}
      />
      <Pet sound="Woof" emoji="🐕" name="dog" onPet={handlePet} isHungry />
      <Pet
        sound="Squak"
        emoji="🐭"
        name="mouse"
        onPet={handlePet}
        isHungry={false}
      />
      <Pet sound="Blup" emoji="🐡" name="pufferfish" onPet={handlePet} />
    </div>
  );
}

function Pet({ sound, emoji, name, onPet, isHungry }) {
  // const { sound, emoji, name } = props;
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}
