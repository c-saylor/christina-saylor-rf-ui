import React from 'react';
import addCircleOutline from '../assets/icons/add-circle-outline.svg';

export function StepCard({ children }: { children?: React.ReactNode }) {
  return <div className="step-card">{children}</div>;
}

type StepCardBlockProps = {
  title: string;
  description?: React.ReactNode;
  icon?: string;
  iconAlt?: string;
};

export function StepCardBlock({ title, description, icon, iconAlt = '' }: StepCardBlockProps) {
  return (
    <div className="step-card-content-block">
      <div className="step-card-content-block-header">
        {icon && <img className="step-card-content-block-icon" src={icon} alt={iconAlt} />}
        <p className="step-card-content-block-title">{title}</p>
      </div>
      {description && <p className="step-card-content-block-description">{description}</p>}
    </div>
  );
}

export function StepCardGrid({ children }: { children: React.ReactNode }) {
  return <div className="step-cards">{children}</div>;
}

type AddStepCardProps = {
  text: string;
  onClick: () => void;
  icon?: string;
};

export function AddStepCard({ text, onClick, icon }: AddStepCardProps) {
  return (
    <button type="button" className="step-card add-step-card" onClick={onClick}>
      <img className="add-step-card-icon" src={icon ?? addCircleOutline} alt="" />
      <span>{text}</span>
    </button>
  );
}

export default StepCard;
