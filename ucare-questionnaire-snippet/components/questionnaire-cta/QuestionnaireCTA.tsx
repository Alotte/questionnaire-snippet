import React from 'react'
import { ButtonPrimary, ButtonSecondary } from '../buttons';
import styles from './QuestionnaireCTA.module.css'


type QuestionnaireCTAProps = {
  onSaveDraft: () => void;
};

const QuestionnaireCTA: React.FC<QuestionnaireCTAProps> = ({ onSaveDraft }) => {
  return (
    <div className={styles.questionnaireCTA}>
      <div className={styles.questionnaireCTA_btn}>
      <ButtonPrimary> Publish </ButtonPrimary>
      </div>
      <div className={styles.questionnaireCTA_btn}>
      <ButtonPrimary onClick={onSaveDraft}>Save as Draft</ButtonPrimary>
      </div>
      <div className={styles.questionnaireCTA_btn}>
      <ButtonSecondary>View as Participant</ButtonSecondary>
      </div>
    </div>
  );
};


export default QuestionnaireCTA