import {GetStaticProps, NextPage, NextPageContext} from 'next'

import Head from 'next/head'

type SSGProps = {
    message:string
}

const SSG:NextPage<SSGProps> = (props) => {
const {message} = props
  return (
    <div>
      <Head>
        <title>SSG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>SSG</h1>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async (context) =>{
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にデータが更新されました`
    console.log(message)
    return {
        props:{
            message,
        },
    }
} 

export default SSG

