import { GetServerSideProps , NextPage} from 'next'
import Head from 'next/head'

type SSRProps = {
    message:string 
}

const SSR:NextPage<SSRProps> = (props) => {
    const {message} = props
    return (
        <div>
            <Head>
                <title>SSR</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <h1>このページはSSRでレンダリングされました</h1>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getServerSideProps:GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toISOString()
    const message = `${timestamp}にレンダリングされました`
    console.log(message)
    return {props:{message}}
}

export default SSR

