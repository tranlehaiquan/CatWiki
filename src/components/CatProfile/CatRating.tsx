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
    <div className={cls(className, classes.root)}>
      <strong className={classes.label}>{label}: </strong>{' '}
      <p className={classes.rating}>
        {[...new Array(5)].map((v, index) => (
          <span key={`star-${index}`} className={cls(classes.point, rating >= index + 1 && classes.pointActive)}>
            {index + 1}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CatRating;
