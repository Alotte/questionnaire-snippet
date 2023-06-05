import React from 'react';
import { useRouter } from 'next/router';
import styles from './TopMenu.module.css';
import { ButtonPrimary, ButtonSecondary } from '../../../components/buttons';
import ic_download from '../../../public/assets/ic-download.svg';
import utils from '../../../styles/utils.module.css';
import Image from 'next/image';
import { SearchBar } from '../../../components';

const TopMenu = () => {
  const router = useRouter();

  const handleAddQuestionnaire = () => {
    router.push('/new-questionnaire');
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Perform search logic here
  };

  return (
    <section className={styles.topmenu}>
      <h1>Questionnaires</h1>
      <div className={styles.topmenu__container}>
        <div className={styles.topmenu__container_buttons}>
          <ButtonPrimary onClick={handleAddQuestionnaire}>Add Questionnaire</ButtonPrimary>
          <ButtonSecondary>
            <div className={styles.topmenu__btn}>
              <div className={styles.topmenu__btn_icon}>
                <Image src={ic_download} alt="Expand Researcher" />
              </div>
              Import
            </div>
          </ButtonSecondary>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </section>
  );
};

export default TopMenu;