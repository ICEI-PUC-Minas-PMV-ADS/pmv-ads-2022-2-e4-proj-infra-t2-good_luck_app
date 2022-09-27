import * as  React from 'react';
import { useState, useEffect } from "react";
import GridHome from '../componets/GridHome'

type resultProps = {
  idRaffle: number;
  RaffleName: string;
  RaffleParticipants: number
  date: string
  description: string
};



export default function Home() {

  return (
    <GridHome/>
  );
}
