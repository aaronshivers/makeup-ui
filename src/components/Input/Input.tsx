import React from 'react';

export interface InputProps {
  onChange?: () => void;
  label: string
}

export const Input = ({
  onChange,
  label,
}: InputProps): JSX.Element => (
  <label>
    {label}
    <input onChange={onChange} />
  </label>
);
