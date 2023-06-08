import Image from 'next/image'
import React from 'react'
import { icArrowDown, icArrowDownBlue } from '../../public/assets'
import styles from './QuestionnaireSettings.module.css'

type Props = {}

const QuestionnaireSettings = (props: Props) => {
  return (
    <div className={styles.qSettings}>
      <label content='text'>Questionnaire Settings</label>
      <div className={styles.qSettings_icon}>
        <Image src={icArrowDownBlue} alt="accordion" width={12} height={8} />
      </div>
    </div>
  )
}

export default QuestionnaireSettings