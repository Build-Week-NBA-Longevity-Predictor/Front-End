import React from 'react';
import { CardWrapper, PlayerImage, CardHeader, CardHeading, CardSubHeading, CardBody } from './styledComponent';

const PlayerCard = props => {

     return (
          <div>
               <CardWrapper>
                    <PlayerImage src={`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${props.img}.png`} />
                    <CardHeader>
                         <CardHeading>{props.player.name}</CardHeading>
                         <CardSubHeading>{props.team}, {props.player.position}</CardSubHeading>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
               </CardWrapper>  
          </div>
     )
}

export default PlayerCard;