import React from 'react';
import cls from 'clsx';
import classes from './Container.module.scss';

type Props = {
  noGutter?: boolean;
  className?: string;
};

const Container: React.FC<Props> = ({ children, noGutter = false, className }) => {
  return <div className={cls(classes.root, noGutter && classes.noGutter, className)}>{children}</div>;
};

export default Container;
