import { useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  console.log(location.split("/")[2]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1655070834453-b29065fd7e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Yura</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aliquid animi nesciunt officiis laudantium tempora, quod beatae
          dolores accusamus aliquam rem quasi exercitationem ipsam a voluptas,
          odio magni nulla iusto. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis aliquid animi nesciunt officiis
          laudantium tempora, quod beatae dolores accusamus aliquam rem quasi
          exercitationem ipsam a voluptas, odio magni nulla iusto. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid
          animi nesciunt officiis laudantium tempora, quod beatae dolores
          accusamus aliquam rem quasi exercitationem ipsam a voluptas, odio
          magni nulla iusto. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis aliquid animi nesciunt officiis laudantium tempora,
          quod beatae dolores accusamus aliquam rem quasi exercitationem ipsam a
          voluptas, odio magni nulla iusto.
        </p>
      </div>
    </div>
  );
}
