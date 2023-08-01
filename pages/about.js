import Layout from "../src/components/layout"
import Head from "next/head"
import Link from "next/link"


export default function About() {
  return (
    <>
        <Head>
            <title>About - SignTracker</title>
            <meta name="description" content="Add Sign and track its location." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/re-sign.svg" />
            </Head>
        <Layout 
        main={        
            <div className="pt-20 lg:pt-6 px-6 bg-slate-100 h-full">
                {/* <h1 className="text-2xl">So what&apos;s this all about?</h1> */}
                
                <h1 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">So, what&apos;s this all about?</h1>
                
                <p>stuff here</p>
            </div>
        }/>
        </>
  )
}
