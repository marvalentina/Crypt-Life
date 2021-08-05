import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypt Life' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <header className='header'>
        <div className="header_image">

        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;