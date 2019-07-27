import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from '../components/Layout/Layout';
import CommentList from '../components/CommentList';

const story = ({ story }) => {
  
    if (!story) {
      return <Error statusCode={503} />;
    } 

  return (
  	<Layout withBackButton >
          <h1 >
            <a href={story.url}>{story.title}</a>
          </h1>
          <div >
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago}</strong>
            <CommentList comments={ story.comments }/>
          </div>  		
  	</Layout>
  	);
};

story.getInitialProps = async ({ req, res, query }) => {
  const storyId = query.id;
  let story;
  try{
  	const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
  	story = await res.json();
  }catch(err){
  	story = null;
  }
  return { story };
};


export default story;
