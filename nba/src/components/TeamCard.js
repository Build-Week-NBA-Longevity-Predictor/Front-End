import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";


export default function TeamCard(props) {
 console.log(props);
 return (
   <Card>
     {/* <Image src={''} wrapped ui={false} /> */}
     <Card.Content>
       <Card.Header>{props.player_name}</Card.Header>
       <Card.Meta>{props.user_id}</Card.Meta>
       <Card.Description> </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <Link to =''>
         <Icon></Icon>
       </Link>
     </Card.Content>
   </Card>
 );
}
