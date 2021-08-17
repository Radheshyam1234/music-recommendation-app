import React, { useState } from "react";
import "./styles.css";

const musicLibrary = {
  Chill: [
    {
      name: "willow",
      author: "by - Taylor Swift",
      link:
        "https://open.spotify.com/embed/track/0lx2cLdOt3piJbcaXIV74f?si=7e33b77a959b4aca"
    },
    {
      name: "Drivers License",
      author: "by - Olivia Rodrigo",
      link:
        "https://open.spotify.com/embed/track/7lPN2DXiMsVn7XUKtOW1CS?si=190d25fa345e4b24"
    },
    {
      name: "The City",
      author: "by - Sam Fischer ",
      link:
        "https://open.spotify.com/embed/track/3H3r2nKWa3Yk5gt8xgmsEt?si=0f7df4e0fe9e4bb4"
    }
  ],
  Rock: [
    {
      name: "Great balls of fire",
      author: "by - Jerry Lee Lewis",
      link: "https://open.spotify.com/embed/track/5UvE5QlINnvEc7aFO14DVL"
    },
    {
      name: "Hey Joe",
      author: "by - Jimmi Hendrix",
      link: "https://open.spotify.com/embed/track/0NWPxcsf5vdjdiFUI8NgkP"
    },
    {
      name: "Rool Over Beethoven",
      author: "by -Chuck Berry",
      link: "https://open.spotify.com/embed/track/6C7aTTCUWRK7dD379yUT3W"
    }
  ],

  HipHop: [
    {
      name: "Likha Maine",
      author: "MC Altaf",
      link:
        "https://open.spotify.com/embed/track/3zBQ9tTPMDKOo1ckhl7kJb?si=183c1d521ffc4f6b"
    },
    {
      name: "Kahan Par Hai",
      author: "MC STAN",
      link:
        "https://open.spotify.com/embed/track/6YtlaPxgVWZHO7OB1atIEf?si=72e41ee3fd55468e"
    },
    {
      name: "Tabia",
      author: "Prabh Deep",
      link:
        "https://open.spotify.com/embed/track/1zDAkehGGqrvTqwJBzTzEi?si=e89ed237dfac4adb"
    }
  ],
  Pop: [
    {
      name: "Monster",
      author: "by - Justin Bieber",
      link: "https://open.spotify.com/embed/track/2Z8yfpFX0ZMavHkcIeHiO1"
    },
    {
      name: "Diamonds",
      author: "by - Sam Smith",
      link: "https://open.spotify.com/embed/track/5hvwx5i67IwnCkjl9VHkNv"
    },
    {
      name: "Therefore I Am",
      author: "by - Billie Eilish",
      link: "https://open.spotify.com/embed/track/54bFM56PmE4YLRnqpW6Tha"
    }
  ]
};

const array = Object.keys(musicLibrary);

export default function App() {
  const [selection, setSelection] = useState("Rock");
  return (
    <div className="App">
      <h1>🎧🎧 Enjoy the music 🎧🎧</h1>
      <h4>Check out my favourite music!👇👇</h4>
      {array.map((musicType, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setSelection(musicType);
            }}
          >
            {musicType}
          </button>
        );
      })}

      <h2 className="header">{selection}</h2>
      {musicLibrary[selection].map((song, index) => {
        return (
          <div key={index} className="song">
            <h3 className="songname"> {song.name}</h3>
            <h4 className="songname"> {song.author}</h4>
            <iframe
              title={song.name}
              src={song.link}
              width="80%"
              height="70"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
