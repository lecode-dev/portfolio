import React from 'react';
import { Button } from './styles';

function CustomButton({ onClick, title }) {
  return <Button onClick={onClick}>{title}</Button>;
}

export default CustomButton;
