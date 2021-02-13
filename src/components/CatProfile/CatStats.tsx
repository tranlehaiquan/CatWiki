import React from 'react';
import CatRating from './CatRating';

interface Props {
  className?: string;
  adaptability: number;
  affectionLevel: number;
  childFriendly: number;
  dogFriendly: number;
  energyLevel: number;
  grooming: number;
  intelligence: number;
  healthIssues: number;
  socialNeeds: number;
  strangerFriendly: number;
};

const CatStats: React.FC<Props> = (props) => {
  return (
    <div>
      <CatRating label="Adaptability" rating={props.adaptability} />
      <CatRating label="Affection Level" rating={props.affectionLevel} />
      <CatRating label="Child Friendly" rating={props.childFriendly} />
      <CatRating label="Dog Friendly" rating={props.dogFriendly} />
      <CatRating label="Energy Level" rating={props.energyLevel} />
      <CatRating label="Grooming" rating={props.grooming} />
      <CatRating label="Intelligence" rating={props.intelligence} />
      <CatRating label="Health Issues" rating={props.healthIssues} />
      <CatRating label="Social Needs" rating={props.socialNeeds} />
      <CatRating label="Stranger Friendly" rating={props.strangerFriendly} />
    </div>
  );
}

export default CatStats;