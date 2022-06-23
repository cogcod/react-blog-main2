import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1655070115142-c73783108452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        veritatis inventore nihil adipisci, sint saepe commodi deserunt
        necessitatibus. Molestiae nesciunt tempore fugit corrupti accusamus
        dicta ullam pariatur veniam id cum? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Asperiores veritatis inventore nihil
        adipisci, sint saepe commodi deserunt necessitatibus. Molestiae nesciunt
        tempore fugit corrupti accusamus dicta ullam pariatur veniam id cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        veritatis inventore nihil adipisci, sint saepe commodi deserunt
        necessitatibus. Molestiae nesciunt tempore fugit corrupti accusamus
        dicta ullam pariatur veniam id cum?
      </p>
    </div>
  );
}
