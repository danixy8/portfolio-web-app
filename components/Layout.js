import Navbar from "./Navbar";
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Daniel Gutierrez Portfolio website" key="title" />
      </Head>
    <main className="container py-4">
      {children}
    </main>
    
  </>
);

export default Layout;
