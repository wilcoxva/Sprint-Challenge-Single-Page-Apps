import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  color: green;
`
const P = styled.p`
  color: pink;
`

const CharacterCard = props => {
  return (
    <div>
        <H3>{props.name}</H3>
        <P>{props.species}</P>
        <P>{props.gender}</P>
    </div>
  );
};

export default CharacterCard;
