import React, { useEffect } from 'react';
import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const App = ({ stories, page }) => {

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }    
  }, [])

  return (
    <Layout title="Home" description="Hacker news app clone using next js">
      <h1>React hacker news</h1>
      <StoryList stories={stories} />
      <footer>
        <Link href={`/?page=${page + 1}`} >
          <a>Go to next Page</a>
        </Link>
      </footer>
    </Layout>
  );
};

App.getInitialProps = async ({ req, res, query }) => {
  let stories;
  let page;
  try {
    page = Number(query.page) || 1;
    const res = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    );
    stories = await res.json();
  } catch (error) {
    stories = [];
    console.log(`error: ${error}`);
  }

  return { stories, page };
};

export default App;
