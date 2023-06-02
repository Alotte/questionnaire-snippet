import React from 'react'
import styles from './QuestionnaireTable.module.css'
import { QuestionnaireListing } from '../../../model/QuestionnaireListing';
import Image from 'next/image';
import ic_edit from '../../../public/assets/questionnaire-list/ic-content-edit.svg';
import ic_copy from '../../../public/assets/questionnaire-list/ic-content-copy.svg';


type QuestionnaireTableProps = {
  questionnaires: QuestionnaireListing[];
};

const QuestionnaireTable: React.FC<QuestionnaireTableProps> = ({ questionnaires }) => {
  return (
    <table className={styles.questionnairetb}>
      <thead>
        <tr className={styles.questionnairetb__head_row}>
          <th>Questionnaire Title</th>
          <th>Creation Date</th>
          <th>Author</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.questionnairetb__body}>
        {questionnaires.map((questionnaire, index) => (
          <tr  key={index} className={styles.questionnairetb__body_row}>
            <td className={styles.questionnairetb__body_title}>{questionnaire.title}</td>
            <td>{questionnaire.creationDate}</td>
            <td>{questionnaire.author}</td>
            <td>{questionnaire.status}</td>
            <td>
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