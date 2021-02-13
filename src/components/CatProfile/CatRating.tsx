import React from 'react';
import classes from './CatRating.module.scss';
import cls from 'clsx';

interface Props {
  className?: string;
  label: string;
  rating: number;
}

const CatRating: React.FC<Props> = ({ label, rating, className = '' }) => {
  return (
    <p className={cls(className, classes.root)}>
      <strong>{label}: </strong> {rating}
    </p>
  );
};

export default CatRating;
