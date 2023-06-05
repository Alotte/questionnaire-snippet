import React from 'react'
import { ButtonPrimary, ButtonSecondary } from '../buttons';
import styles from './QuestionnaireCTA.module.css'


type QuestionnaireCTAProps = {
  onSaveDraft: () => void;
};

const QuestionnaireCTA: React.FC<QuestionnaireCTAProps> = ({ onSaveDraft }) => {
  return (
    <div>
      <ButtonPrimary> Publish </ButtonPrimary>
      <ButtonPrimary onClick={onSaveDraft}>Save as Draft</ButtonPrimary>
      <ButtonSecondary>View as Participant</ButtonSecondary>
    </div>
  );
};


export default QuestionnaireCTA