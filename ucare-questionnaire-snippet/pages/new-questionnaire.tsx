
import React from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { ButtonPrimary } from '../components/buttons';
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
import { QuestionnaireListing } from '../model/QuestionnaireListing';

const questionnaireTitleAtom = atomWithStorage('title', "");

const NewQuestionnaire: React.FC = () => {
  const router = useRouter();
  const [questionnaireTitle, setQuestionnaireTitle] = useAtom(questionnaireTitleAtom);
  const handleSaveQuestionnaire = useSaveQuestionnaire();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionnaireTitle(e.target.value);   
  };

  const handleSaveDraft = () => {
    handleSaveQuestionnaire(questionnaireTitle);
  };
  return (
    <Layout home>
    <Head>
      <title>"U-CARE New Questionnaire"</title>
    </Head>
    <div className={styles.page}>
      <Breadcrumb/>
      <QuestionnaireNav />
      <Questionnaire
        title={questionnaireTitle}
        onTitleChange={handleTitleChange}
      />
      <NewBlock />
      <QuestionnaireSettings />
      <QuestionnaireCTA onSaveDraft={handleSaveDraft}/>
    </div>
  </Layout>
   
    );
};

export default NewQuestionnaire;