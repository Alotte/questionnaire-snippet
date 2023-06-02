import Head from 'next/head';

import Link from 'next/link';
import Layout, { siteTitle } from '../containers/layout/Layout';
import { Questionnaires, TopMenu } from '../containers';
import { Breadcrumb } from '../components';
import styles from '../styles/page.module.css';


export default function QuestionnairesHome() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.page}>
        <Breadcrumb/>
        <TopMenu />
        <Questionnaires/>
      </div>
    </Layout>
  );
}
