import Image from 'next/image'
import React from 'react'
import { icPlus, icVerticalLine } from '../../public/assets'
import styles from './NewBlock.module.css'

type Props = {}

const Block = ({ title }: { title: string;}) => {
  return(
    <div className={styles.newblock__block}>
      {title}       
    </div>
  )
}

const NewBlock = (props: Props) => {
  return (
    <div className= {styles.newblock_container}>
      <div className={styles.newblock_add}>
        <div className={styles.newblock_icon}>
                  <Image src={icPlus} alt="Add" />
        </div>
        <label>Add:</label> 
      </div>
      <Block title= "Question Block"/>
      <Block title= "Content Block"/>
      <label className={styles.newblock_disabled}>Page Break</label>
    </div>
  )
}

export default NewBlock