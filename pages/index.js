import Head from 'next/head';
import Layout from "../components/layout";
import TodoApp from "../components/todo-app";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HostedHooks Todo App</title>
      </Head>
      <TodoApp />
    </Layout>
  )
}