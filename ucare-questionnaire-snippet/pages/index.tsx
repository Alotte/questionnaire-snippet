import Head from 'next/head';
import { useFetchQuestionnaires } from '../api/effects';

import Link from 'next/link';
import Layout, { siteTitle } from '../containers/layout/Layout';
import { QuestionnaireTable, TopMenu } from '../containers';
import { Breadcrumb } from '../components';
import styles from '../styles/page.module.css';

export default function QuestionnairesHome() {
  //Boilerplate data. Insert API calls here.
  const questionnaires = useFetchQuestionnaires();
  const questionnaires_boilerplate = [
    {
      title: 'Questionnaire 1',
      creationDate: '2023-05-22',
      author: 'John Doe',
      status: 'Active',
      actions: 'Edit, Delete',
    },
    // Add more questionnaire objects as needed
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.page}>
        <Breadcrumb/>
        <TopMenu />
        <QuestionnaireTable questionnaires={questionnaires}/>
      </div>
    </Layout>
  );
}
