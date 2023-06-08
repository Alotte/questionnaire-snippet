
import React from 'react';
import { useRouter } from 'next/router';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Layout } from '../containers';
import Head from 'next/head';
import { Breadcrumb } from '../components';
import styles from '../styles/page.module.css';
import QuestionnaireNav from '../components/questionnaire-nav/QuestionnaireNav';
import Questionnaire from '../containers/questionnaire/Questionnaire';
import NewBlock from '../components/new-block/NewBlock';
import QuestionnaireSettings from '../components/questionnaire-settings/QuestionnaireSettings';
import QuestionnaireCTA from '../components/questionnaire-cta/QuestionnaireCTA';
import { useSaveQuestionnaire } from "../api/effects";

const questionnaireTitleAtom = atomWithStorage('title', "");
const isTitleValidAtom = atom(true);

const NewQuestionnaire: React.FC = () => {
  const [questionnaireTitle, setQuestionnaireTitle] = useAtom(questionnaireTitleAtom);
  const [isTitleValid, setIsTitleValid] = useAtom(isTitleValidAtom); // Flag to track title validity
  const router = useRouter(); // Router instance

  //Save Draft is clicked
  const handleSaveQuestionnaire = () => {
    const title: string= questionnaireTitle.trim();

    if (questionnaireTitle.trim() !== "") {
      // Title is not empty, proceed with saving the questionnaire
      useSaveQuestionnaire(title);
      router.push('/'); // Route back to '/'

    } else {
      // Title is empty, set the flag to indicate invalid title
      setIsTitleValid(false);
    }
  };
  
  //User types in the title input bar
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuestionnaireTitle(value);   
    
    if (value.trim() !== "") {
      // Title is not empty or is empty after trimming, proceed with saving the questionnaire
      setIsTitleValid(true);
    } else {
      // Title is empty, set the flag to indicate invalid title
      setIsTitleValid(false);
    }
  };

  const handleSaveDraft = () => {
    handleSaveQuestionnaire();
  };

  return (
    <Layout home>
    <Head>
      <title>"U-CARE New Questionnaire"</title>
    </Head>
    <div className={styles.page}>
      <Breadcrumb titles={["New Questionnaire"]}/>
      <QuestionnaireNav />
      <Questionnaire
        title={questionnaireTitle}
        onTitleChange={handleTitleChange}
        isTitleValid={isTitleValid} // Pass the validity flag to the Questionnaire component
      />
      <NewBlock />
      <QuestionnaireSettings />
      <QuestionnaireCTA onSaveDraft={handleSaveDraft}/>
    </div>
  </Layout>
   
    );
};

export default NewQuestionnaire;