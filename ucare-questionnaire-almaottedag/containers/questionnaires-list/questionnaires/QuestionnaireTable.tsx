import React from 'react'
import styles from './QuestionnaireTable.module.css'
import utils from '../../../styles/utils.module.css'
import { QuestionnaireListing } from '../../../model/QuestionnaireListing';
import Image from 'next/image';
import ic_edit from '../../../public/assets/questionnaire-list/ic-content-edit.svg';
import ic_copy from '../../../public/assets/questionnaire-list/ic-content-copy.svg';
import ic_arrow_up from '../../../public/assets/ic-arrow-up.svg';
import ic_arrow_down from '../../../public/assets/ic-arrow-down.svg';


type QuestionnaireTableProps = {
  questionnaires: QuestionnaireListing[];
};


const QuestionnaireTable: React.FC<QuestionnaireTableProps> = ({ questionnaires }) => {
  return (
    <table className={styles.questionnairetb}>
      <thead>
        <tr className={styles.questionnairetb__head_row}>
          <th className={styles.questionnairetb__head__title}>Questionnaire Title</th>
          <th className={utils.hideOnMobile}>
          
            Creation Date
          </th>
          <th className={utils.hideOnMobile }>Author</th>
          <th className={utils.hideOnMobile }>Status</th>
          <th className={styles.questionnairetb__head__actions}>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.questionnairetb__body}>
        {questionnaires.map((questionnaire, index) => (
          <tr  key={index} className={styles.questionnairetb__body_row}>
            <td className={styles.questionnairetb__body_title}>{questionnaire.title}</td>
            <td className={utils.hideOnMobile + " " +styles.questionnairetb__body_cdate}>{questionnaire.creationDate}</td>
            <td className={utils.hideOnMobile + " " +styles.questionnairetb__body_author}>{questionnaire.author}</td>
            <td className={utils.hideOnMobile + " " +  styles.questionnairetb__body_status}>{questionnaire.status}</td>
            <td className={ styles.questionnairetb__body_actions}>
              <div className={styles.questionnairetb__buttons}>
                <div className={styles.questionnairetb__buttons_btn}>
                  <Image
                    src= {ic_edit}
                    alt="Edit"
                  />
                </div>
                <div className={styles.questionnairetb__buttons_btn}>
                <Image
                  src= {ic_copy}
                  alt="Duplicate"
                />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default QuestionnaireTable