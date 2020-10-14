import React from 'react';
import { Button, SmallButton } from './styles';

function CustomButton({ onClick, title }) {
  return ( 
    <Button onClick={onClick}>
      {title}
    </Button>
  )
}

export function CustomSmallButton({ onClick, title}) {
  return (
    <SmallButton onClick={onClick}>
      {title} 
    </SmallButton>
  )
}

export default CustomButton;