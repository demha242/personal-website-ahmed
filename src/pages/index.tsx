import Head from 'next/head';
import { Inter } from '@next/font/google';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>John Cox</title> 
        <meta name="description" content="Portfolio website made by John Cox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tab-icon.svg" />
      </Head>

      <body className="h-screen bg-black">  
        <div className="h-screen flex items-center justify-center"> 
          <div className=" w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute flex flex-row ml-2 justify-center">
            <a href="/Resume.pdf" target="_blank"><Image src="/resume-icon.svg" width={35} height={35} alt="Resume Icon"/></a>
            <a href="mailto:john.cox0321@gmail.com"><Image src="/email-icon.svg" width={35} height={35} alt="Email Icon"/></a>
            <a href="https://github.com/programwithjohn/"><Image src="/github-icon.svg" width={35} height={35} alt="GitHub Icon"/></a>
            <a href="https://www.linkedin.com/in/johncox-dev/"><Image src="/linkedin-icon.svg" width={35} height={35} alt="GitHub Icon"/></a>
            <a href="https://twitter.com/johncoxdev">< Image src="/twitter-icon.svg" width={35} height={35} alt="GitHub Icon"/></a>
          </div>
        </div>
      </body>
    </>
  )
} 
