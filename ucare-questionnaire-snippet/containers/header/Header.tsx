import React from 'react'
import styles from './Header.module.css'
import utils from '../../styles/utils.module.css'
import logo from '../../public/assets/header/logo-ucare.svg';
import ic_profile from '../../public/assets/header/ic-user-avatar.svg';
import ic_arrowDown from '../../public/assets/ic-arrow-down.svg';
import verticalLine from '../../public/assets/ic-vertical-line.svg';
import Image from 'next/image';
import { RiMoreFill } from 'react-icons/ri';


const Menu = () => (
  <> 
    
    <p className= {utils.hideOnMobile}><a href ="#research"> Research studies</a></p>
    <div className={styles.header__links_researcher + " " + utils.hideOnMobile}>
      <p>Researcher</p>
      <Image
      src= {ic_arrowDown}
      alt="Expand Researcher"
      />
    </div>
    <div className={styles.header__links_profile}>

      <Image
        src= {ic_profile}
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
      <div className={styles.header__more_actions + " " + utils.showOnMobile}>
      <RiMoreFill size={24} color= {'#535353'}/>
    </div>
    </div>

  </>
)

const Header = () => {
  return (
    <div className= {styles.header}>
      <div className= {styles.header__links }>
        <div className= {styles.header__links_logo +" " + utils.scale_up_center}>
          <Image
            src= {logo}
            alt="U-CARE Logo"
          />
        </div>
        <div className ={styles.header__links_container + " " + utils.scale_up_center}>
          < Menu />
        </div>
      </div>
    </div>
  )
}

export default Header