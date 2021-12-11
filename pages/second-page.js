import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout.js';

export default function SecondPage() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Second Page</title>
                </Head>
                <h1>Second Page</h1>
            </Layout>
        </>
    )
}