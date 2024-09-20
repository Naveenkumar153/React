import { useRef, useState } from "react";

export default function Player() {

  const setName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function changePlayerName(){
    console.log('changePlayerName',setName)
    setPlayerName(setName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity' } </h2>
      <p>
        <input ref={setName} type="text" />
        <button onClick={changePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
