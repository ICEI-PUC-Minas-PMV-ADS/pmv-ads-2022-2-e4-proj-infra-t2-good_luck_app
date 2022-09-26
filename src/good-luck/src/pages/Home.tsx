import * as  React from 'react';
import { useState, useEffect } from "react";

type resultProps = {
  idRaffle: number;
  RaffleName: string;
  RaffleParticipants: number
  date: string
  description: string
};



export default function Home() {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const apiGetRaffles = async () => {
      const data = await fetch("http://localhost:8080/raffle/all", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };
    apiGetRaffles();
  }, []);

  return (
    <div className="Home">
      <h1>
        {result?.map(value => {
          return (

              <ul>
                {value.idRaffle}
                {value.RaffleName}
                {value.RaffleParticipants}
                {value.date}
                {value.description}
              </ul>

          );
        })}
      </h1>
    </div>
  );
}
