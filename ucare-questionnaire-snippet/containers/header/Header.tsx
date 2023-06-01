import React from 'react'
import styles from './Header.module.css'
import logo from '../../public/assets/header/logo-ucare.svg';
import profile from '../../public/assets/header/ic-user-avatar.svg';
import arrowDown from '../../public/assets/ic-arrow-down.svg';
import verticalLine from '../../public/assets/ic-vertical-line.svg';
import Image from 'next/image';


const Menu = () => (
  <> 
    <p><a href ="#research"> Research studies</a></p>
    <div className={styles.header__links_researcher}>
      <p>Researcher</p>
      <Image
      src= {arrowDown}
      alt="Expand Researcher"
      />
    </div>
    <div className={styles.header__links_profile}>
      <Image
        src= {profile}
        alt="Profile Picture"
      />
      <p>Johanna Silver</p>
      <div className= {styles.header__vertical_line}>
        <Image
          src= {verticalLine}
          alt="vline"
        />
      </div>
  
      <p>Log out</p>
    </div>

  </>
)

const Header = () => {
  return (
    <div className= {styles.header}>
      <div className= {styles.header__links}>
        <div className= {styles.header__links_logo}>
          <Image
            src= {logo}
            alt="U-CARE Logo"
          />
        </div>
        <div className ={styles.header__links_container}>
          < Menu />
        </div>
      </div>
    </div>
  )
}

export default Header