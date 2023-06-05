import Head from 'next/head';
import { useFetchQuestionnaires } from '../api/effects';

import Layout, { siteTitle } from '../containers/layout/Layout';
import { QuestionnaireTable, TopMenu } from '../containers';
import { Breadcrumb } from '../components';
import styles from '../styles/page.module.css';

export default function QuestionnairesHome() {
  //API call here.
  const questionnaires = useFetchQuestionnaires();

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
