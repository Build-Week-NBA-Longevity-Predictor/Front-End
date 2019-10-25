import React, { useEffect, useState } from "react";
import axios from 'axios';
import TeamCard from './TeamCard';


export default function TeamList(props) {
 const [ teamList, setteamList ] = useState([]);
 useEffect(() => {
   axios.get('https://nba-predictor-ptbw.herokuapp.com/')
     .then( res => {
       console.log(res);
       setteamList (res.data.data)
     })
     .catch( err => {
       console.log(err);
     });
 }, []);
 return (
   <section className="team-list grid-view">
     { teamList.map( team => {
       return <TeamCard
        key={team}
        player_name={team.player_name}
        user_id={team.user_id}
        />
     })}
   </section>
 );
}