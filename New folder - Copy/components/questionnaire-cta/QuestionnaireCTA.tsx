import Image from 'next/image';
import React from 'react'
import { icDelete } from '../../public/assets';
import { ButtonPrimary, ButtonSecondary } from '../buttons';
import ButtonDanger from '../buttons/ButtonDanger/ButtonDanger';
import styles from './QuestionnaireCTA.module.css'


type QuestionnaireCTAProps = {
  onSaveDraft: () => void;
};

const QuestionnaireCTA: React.FC<QuestionnaireCTAProps> = ({ onSaveDraft }) => {
  return (
    <div className={styles.questionnaireCTA}>
      <div className={styles.questionnaireCTA_btn}>
      <ButtonPrimary onClick={onSaveDraft}>Save as Draft</ButtonPrimary>
      </div>
      <div className={styles.questionnaireCTA_btn}>
      <ButtonPrimary> Publish</ButtonPrimary>
      </div>
      <div className={styles.questionnaireCTA_btn}>
      <ButtonSecondary>View as Participant</ButtonSecondary>
      </div>
      <div className={styles.questionnaireCTA_btn__danger}>
      <ButtonDanger>
          <div className={styles.questionnaireCTA_btn_icon}>
                <Image src={icDelete} alt="Delete questionnaire" />
          </div>
          Delete Questionnaire</ButtonDanger>
      </div>
    </div>
  );
};


export default QuestionnaireCTA