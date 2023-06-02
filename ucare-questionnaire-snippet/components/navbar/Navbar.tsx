import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from './Navbar.module.css'
import utils from '../../styles/utils.module.css'
import Image from 'next/image';
import {ic_copy, ic_calendar, ic_starred, ic_log, ic_participants,ic_bookmark, ic_expand, ic_import_contacts, ic_live_help, ic_mail,ic_s_large,ic_s_small,ic_s_small_grey,ic_settings, ic_questionnaires } from '../../public/assets/navbar/';
import ic_dotted_line from '../../public/assets/ic-dotted-line.svg';

interface MenuItemProps {
  icon: string;
  navName: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, navName}) => {
  return (
    <>
    <div className= {styles.navbar__links_container__item}>
      <a href={"#" + navName}>
          <Image
            src={icon}
            alt= {navName}
            width= {24}
            height= {24}
          />
      </a>
    </div>
      
    </>
  );
}

const ProjectMenu = () => (
  <div className= {styles.navbar__links_container__submenu}>
    <MenuItem 
      icon= {ic_copy} 
      navName ="project" 
    />

  <MenuItem 
      icon= {ic_questionnaires} 
      navName ="project" 
    />
    
    <MenuItem 
      icon= {ic_calendar} 
      navName ="calendar"
    />

    <MenuItem 
      icon= {ic_starred} 
      navName ="starred" 
    />  

    <MenuItem 
      icon= {ic_log} 
      navName ="log" 
    />  
  </div>
)

const Divider = () => (
  
  <div className={styles.navbar__links_container__divider}>
    <Image
      src= {ic_dotted_line}
      alt="Dotted line"
    />
  </div>
)


const Menu = () => ( 
  <>
    <div className= {styles.navbar__links_container__project}>
      <a href={"#project-overview"}>
          <Image
            src={ic_s_large}
            alt= {"project-overview"}
          />
      </a>
    </div>
    <ProjectMenu />
    <Divider/>
    <div className= {styles.navbar__links_container__project}>
      <a href={"#project-overview"}>
          <Image
            src={ic_s_small_grey}
            alt= {"project-overview"}
          />
      </a>
    </div>
    <ParticipantMenu />
    <Divider/>
    <MenuItem 
      icon= {ic_settings} 
      navName ="settings-help" 
    /> 
  </>
)
const ParticipantMenu = () => (
  <div className= {styles.navbar__links_container__submenu}>
    <MenuItem 
      icon= {ic_participants} 
      navName ="participants" 
    /> 
    <MenuItem 
      icon= {ic_bookmark} 
      navName ="logbook" 
    /> 
    <MenuItem 
      icon= {ic_live_help} 
      navName ="live-help" 
    /> 

  <MenuItem 
      icon= {ic_import_contacts} 
      navName ="contacts" 
    /> 
    <MenuItem 
      icon= {ic_mail} 
      navName ="mail" 
    />   
  </div>

)

const Navbar = () => {
  const iconColor:string= "#535353";
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <div className={styles.navbar__links_container}>
          <Menu/>
        </div>
      </div>
      <div className={styles.navbar_menu}>
        {toggleMenu ? (
          <button
            className="icon-button"
            onClick={handleToggleMenu}
            aria-label="Close Menu"
          >
            <RiCloseLine color={iconColor} size={27} />
          </button>
        ) : (
          <button
            className="icon-button"
            onClick={handleToggleMenu}
            aria-label="Open Menu"
          >
            <RiMenu3Line color={iconColor} size={27} />
          </button>
        )}
        {toggleMenu && (
          <div className={styles.navbar_menu__container +" " + utils.scale_up_center}>
            <div className={styles.navbar_menu__container_links}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar