import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...others }: ButtonProps) => {
  return <button {...others}>{label}</button>;
};

export default Button;
