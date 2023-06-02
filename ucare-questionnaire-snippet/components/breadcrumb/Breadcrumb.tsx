import React from 'react'
import styles from './Breadcrumb.module.css'
import { ic_s_small } from '../../public/assets/navbar'
import Image from 'next/image'

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <Image
            src={ic_s_small}
            alt= "project"
            width= {24}
            height= {24}
        />
      <p>ESM Steg 7-9 v1</p>
    </div>
  )
}

export default Breadcrumb