import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Body from '../components/Body'
export default function Home() {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])


  return (

    <div >


      <Head>
        <title>Knowlytes</title>
        <meta name="description" content="Generated by create next app" />
        <script>

        </script>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Body />
    </div>
  )
}
