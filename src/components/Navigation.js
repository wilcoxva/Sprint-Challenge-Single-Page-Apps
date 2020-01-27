import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div1 = styled.div`
    text-align: center;
`

const Div2 = styled.div`
    text-align: center;
`

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <Div1>
          <Link to="/">Home</Link>
        </Div1>
        <Div2>
          <Link to="/characterlist">Character List</Link>
        </Div2>
      </div>
    </div>
  );
};

export default Navigation;