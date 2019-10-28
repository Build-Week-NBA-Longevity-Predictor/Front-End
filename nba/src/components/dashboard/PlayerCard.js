import React from 'react';
import { CardWrapper, PlayerImage, CardHeader, CardHeading, CardSubHeading, CardBody } from './styledComponent';
import {Button} from 'semantic-ui-react';
import {axiosWithAuth} from '../../utils/axiosWithAuth'

const PlayerCard = props => {

     const deletePlayer = (id) => {
          axiosWithAuth.delete('https://nba-players.herokuapp.com/delete', id )
     }

     const updatePlayer = (id) => {
          axiosWithAuth.put('https://nba-players.herokuapp.com/update', id)
     }

     return (
          <div>
               <CardWrapper>
                    <PlayerImage src='https://nba-players.herokuapp.com/players/kuzma/kyle' />
                    <CardHeader>
                         <CardHeading>Kyle Kuzma</CardHeading>
                         <CardSubHeading>LA Lakers, Small Forward</CardSubHeading>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                    <Button onClick={() => deletePlayer()}>Delete this player</Button>
                    <Button onClick={() => updatePlayer()}>Update this player</Button>
               </CardWrapper>  
          </div>
     )
}

export default PlayerCard;