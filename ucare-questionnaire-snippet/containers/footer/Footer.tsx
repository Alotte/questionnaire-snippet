import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import logomark from '../../public/assets/footer/ucare-logo-mark.png';
import uppsala_uni from '../../public/assets/footer/logo-uppsala-uni.png';

const Footer = () => {
  return (
    <div className={styles.footer}> 
    <div className={styles.footer_infos}>
      <Image
            src= {logomark}
            alt="U-CARE Logo"
            width={120}
      />
      <div className={styles.footer_infos__text}>
        <p>
          U-CARE
        </p>
        <p>  
          Psychosocial care in the interactive society
        </p>
        <p>
          Last update 2022-05-02
        </p>

      </div>
      <Image
            src= {uppsala_uni}
            alt="U-CARE Logo"
      />
    </div>
    <div className={styles.footer_support}>
      <p>Technical problems?</p>
      <a href='#support-contact'>Contact Support.</a>
    </div>
    </div>
  )
}

export default Footer