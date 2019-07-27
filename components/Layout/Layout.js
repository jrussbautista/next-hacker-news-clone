import Head from "next/head";
import Header from "../Header";
import Main from './Main';


const Layout = ({ children, title = "Hacker News", description, withBackButton }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header navWithBackButton={ withBackButton }/>
      <Main>
      {children}
      </Main>
    </div>
  );
};

export default Layout;
