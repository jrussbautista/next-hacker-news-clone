import ReactHtmlParser from 'react-html-parser';

const CommentList = ({ comments }) => {

  return (
    <div>
    	{
    		comments.map( comment => (
    			<div key={ comment.id }>
    				<h3> { comment.user }</h3>
    				<div> { ReactHtmlParser(comment.content) } </div>
    				<div> { comment.time_ago } </div>
    			</div>
    		))
    	}
    </div>
  )
}

export default CommentList;