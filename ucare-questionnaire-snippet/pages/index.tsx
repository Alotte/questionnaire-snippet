import Head from 'next/head';

import Link from 'next/link';
import Layout, { siteTitle } from '../containers/layout/Layout';
import { Questionnaires, TopMenu } from '../containers';


export default function QuestionnairesHome() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopMenu />
      <Questionnaires/>
    </Layout>
  );
}
