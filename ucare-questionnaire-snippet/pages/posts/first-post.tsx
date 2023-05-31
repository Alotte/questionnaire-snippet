import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Layout from '../../components/layout/layout';
import { useEffect } from "react";
import { login, fetchContents, LoginResponse } from "../../api/login";


export default function FirstPost() {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response: LoginResponse | null = await login();
  
          if (response) {
            await fetchContents(response.accessToken);
            // Perform additional actions with the fetched data
          }
        } catch (error) {
          // Handle errors
          console.error("Error:", error);
        }
      };
  
      fetchData();
    }, []);

    return (
    <Layout home>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>Test post</h1>
        <Image 
            src="/images/profile.jpg"
            height={100}
            width={100}
            alt="profile picture"
        />
        <h2>
            <Link href="/">Back to </Link>
        </h2>
    </Layout>
)
}

//Move this logic to the api folder.
