import Link from "next/link";

const StoryList = ({ stories }) => {
  return (
    <div>
      {stories &&
        stories.map(story => (
          <div key={story.id}>
            <h1>{story.title}</h1>
            <Link href="/story/[id]" as={`/story/${story.title.replace(/\s+/g, '-').toLowerCase()}-${story.id}`}>
              <a> View Story </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default StoryList;
