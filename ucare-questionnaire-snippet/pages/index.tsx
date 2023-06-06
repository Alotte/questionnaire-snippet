import Head from 'next/head';
import { fetchContents, login } from '../api/api';
import Layout, { siteTitle } from '../containers/layout/Layout';
import { QuestionnaireTable, TopMenu } from '../containers';
import { Breadcrumb } from '../components';
import styles from '../styles/page.module.css';
import { QuestionnaireListing } from '../model/QuestionnaireListing';


interface QuestionnairesHomeProps {
  questionnaires: QuestionnaireListing[];
}

export default function QuestionnairesHome({ questionnaires }: QuestionnairesHomeProps) {

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

export async function getServerSideProps() {
  try {
    const response = await login();

    if (response) {
      const accessToken = response.accessToken;
      const fetchedQuestionnaires = await fetchContents(accessToken);
      
      return {
        props: {
          questionnaires: fetchedQuestionnaires,
        },
      };
    }

    return {
      props: {
        questionnaires: [],
      },
    };
  } catch (error) {
    console.error('Error logging in and fetching Questionnaires from U-CARE servers: ', error);
    
    return {
      props: {
        questionnaires: [],
      },
    };
  }
}
