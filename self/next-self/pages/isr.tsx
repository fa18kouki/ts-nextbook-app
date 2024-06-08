import {GetStaticPaths, NextPage, GetStaticProps} from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router'

type ISRProps = {
    message:string
} 

const ISR:NextPage<ISRProps> = (props) => {
    const {message} = props
    const router = useRouter()

    if(router.isFallback){
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    return (
        <div>
            <Head>
                <title>ISR</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <h1>このページはISRでレンダリングされました</h1>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps:GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toISOString()
    const message = `${timestamp}にレンダリングされました`
    console.log(message)
    return {props:{message}, revalidate:10}
}

export default ISR

