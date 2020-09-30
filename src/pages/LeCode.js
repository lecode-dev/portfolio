import React, { useState } from 'react';
import styled from 'styled-components';

function LeCode() {
  const [nomes, setNomes] = useState(['lucas', 'mari', 'emerson']);

  function handleAddNewName() {
    setNomes([...nomes, 'Erick']);
  }

  return (
    <>
      <ListUl>
        {nomes.map((item, index) => (
          <Person key={index} name={item} par={index % 2} />
        ))}
      </ListUl>

      <button onClick={handleAddNewName}>add new name</button>
    </>
  );
}

export function Person({ name, par }) {
  return <List par={par}>{name}</List>;
}


const List = styled.li`
  color: ${(props) => (props.par ? 'green' : 'blue')};
`;

const ListUl = styled.ul`
  color: red;
  list-style: none;
`;

export default LeCode;
