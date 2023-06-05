
import React from 'react';
import { useRouter } from 'next/router';
import { useAtom, atom } from 'jotai';
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

// Jotai atom for storing the questionnaire title
const questionnaireTitleAtom = atom('');

const NewQuestionnaire: React.FC = () => {
  const router = useRouter();
  const [questionnaireTitle, setQuestionnaireTitle] = useAtom(questionnaireTitleAtom);


  return (
    <Layout home>
    <Head>
      <title>"U-CARE New Questionnaire"</title>
    </Head>
    <div className={styles.page}>
      <Breadcrumb/>
      <QuestionnaireNav />
      <Questionnaire />
      <QuestionnaireSettings />
      <QuestionnaireCTA />
    </div>
  </Layout>
   
    );
};

export default NewQuestionnaire;