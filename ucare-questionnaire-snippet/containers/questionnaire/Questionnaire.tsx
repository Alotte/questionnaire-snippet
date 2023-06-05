import React, { useState } from 'react'
import styles from './Questionnaire.module.css'

type Props = {}

const Questionnaire = ({ title, onTitleChange }) => {
  const [value, setValue] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowPlaceholder(e.target.value === '');
  };

  return (
    <div className={styles.questionnaireTitle}>
      <label className={styles.input__textfield_filled}>
      <input 
       type="text" 
       value={title} 
       onChange={onTitleChange}
       placeholder="Questionnaire Title"
       className={styles.questionnaireTitle_form__control}/>
      <span>Questionnaire Title</span>
    </label>
    </div>
  );
};

export default Questionnaire