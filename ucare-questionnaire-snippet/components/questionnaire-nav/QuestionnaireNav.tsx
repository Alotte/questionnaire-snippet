import React from 'react'
import styles from './QuestionnaireNav.module.css'

type Props = {}

const NavItem = ({ title, inFocus }: { title: string; inFocus: boolean }) => {
    if (inFocus) {
      return (
        <div className= {styles.questionnaireNav_itemContainer}>
          <div className={styles.questionnaireNav_itemContainer_active}>
            <h4  className={styles.questionnaireNav_item__active}>{title}</h4>
            <div className= {styles.questionnaireNav_horizontalLine__active}></div>
          </div>
        </div>
    )
    } else {
      return (
        <div className= {styles.questionnaireNav_itemContainer}>
            <h4 className={styles.questionnaireNav_item__inactive}>{title}</h4>
            <div className= {styles.questionnaireNav_horizontalLine__inactive}></div>
        </div>
      )
    }
}

const QuestionnaireNav = (props) => {
  return (
    <div className={styles.questionnaireNav}>
      <NavItem title="Questions" inFocus= {true} />
      <NavItem title="Results" inFocus= {false} />
      <NavItem title="Thank You Page" inFocus= {false} />
      <div className={styles.questionnaireNav_horizontalLine__inactive}></div>
    </div>
  )
}

export default QuestionnaireNav