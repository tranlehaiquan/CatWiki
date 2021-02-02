import React from 'react';
import classes from './Input.module.scss';

type InputProps = {
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onBlur }) => {
  return (
    <div className={classes.root}>
      <input className={classes.input} onChange={onChange} placeholder={placeholder} value={value} onBlur={onBlur} />
    </div>
  );
};

export default Input;
