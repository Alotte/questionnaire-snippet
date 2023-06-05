import React from 'react'
import NewBlock from '../../components/new-block/NewBlock'
import { ButtonPrimary } from '../buttons'
import styles from './Questionnaire.module.css'

type Props = {}

const Questionnaire = (props: Props) => {
  return (
    <div>
      Questionnaire
      <NewBlock />
    </div>
    
  )
}

export default Questionnaire