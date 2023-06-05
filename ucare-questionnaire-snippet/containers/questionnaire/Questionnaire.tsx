import React from 'react'
import styles from './Questionnaire.module.css'

type Props = {}

const Questionnaire = ({ title, onTitleChange }) => {
  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={onTitleChange} />
    </div>
  );
};

export default Questionnaire