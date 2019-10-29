import React, { useState, useEffect} from 'react';
import PlayerCard from './PlayerCard.js';
import { CardsWrapper, DashForm, Label } from './styledComponent.js'
import axios from 'axios';
import nbaTeams from './Teams.js';

const Dashboard = props => {

    // const[player, setPlayer] = useState({team: 'Select...', name: 'Select...'})
    const [displayPlayer, setPlayer] = useState('Select...');
    const [displayTeam, setTeam] = useState('Select...');
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([{id: 0,team: 'Atlanta Hawks',players:[{id: 0, name: 'Select...'}]}]);
    const [mainPlayer, setMainPlayer] = useState([{id: 0, name: 'Select...'}])

    // const changePlayer = (event) => {
    //     setPlayer({...player, [event.target.name]: event.target.value})
    //     setPlayers(nbaTeams.filter(team => team.team === `${player.team}`))
    //     console.log(player);
    // }

    // On Change Event Handlers

    const changePlayer = (event) => {
        setPlayer(event.target.value)
        console.log(mainPlayer[0])
        console.log(displayTeam)
    }

    const changeTeam = (event) => {
        setTeam(event.target.value);
    }

    // Axios Request - retrieve teams

    useEffect(() => {

        async function fetchData() {
            await axios
            .get('https://www.balldontlie.io/api/v1/teams')
            .then(res => {
                console.log(res);
                setTeams(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
            
        }

        fetchData()
    }, [])

    // Set Players Drop Down

    useEffect(() => {
        let newTeams = nbaTeams.filter(nba => nba.team === `${displayTeam}`)
        setPlayers(newTeams);
    }, [displayTeam])

    // Set Displayed Player

    useEffect(() => {
        setMainPlayer(players[0].players.filter(player => player.name === `${displayPlayer}`))
    },[displayPlayer])

    return (
        <div>
            <h1>Compare Players</h1>
            <DashForm>
                <div>
                <Label>Team: </Label>
                <select name='team' value={displayTeam} onChange={changeTeam} >
                    <option value='Select...'>Select...</option>
                    {teams.map(team => {
                        return <option key={team.id} value={team.full_name}>{team.full_name}</option>
                    })}
                </select>
                </div>
                <div>
                <Label>Player: </Label>
                <select name='name' value={displayPlayer} onChange={changePlayer}>
                    <option value='Select...'>Select...</option>
                    {players[0].players.map(player => {
                        return <option key={player.id} value={player.name}>{player.name}</option>
                    })}
                </select>
                </div>
            </DashForm>
            {/* Need Styling For wrapper to hold both cards */}
            <CardsWrapper>
                <PlayerCard player={mainPlayer[0]} team={displayTeam} img={players[0].abr} />
                {/* <PlayerCard/> */}
            </CardsWrapper>
        </div>
    )
}

export default Dashboard;