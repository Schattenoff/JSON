import { useEffect, useState } from "react";
import { request } from "../../axios/axios.config";
import { PUBLIC_ROUTES } from "../../constants/routes.constants";
import PageContainer from "../PageContainer/PageContainer";
import Post from "./components/Post/Post";
import classes from './posts.module.css';



const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await request.get(PUBLIC_ROUTES.POSTS, {
        params: {
          _limit: 10,
        }
      })
      setPosts(data);
    }
    getPosts();
  }, [])

  return (
    <section className={classes.posts} id="posts">
      <PageContainer>
        <h1 className={classes.posts__title}>Posts</h1>
        <div className={classes.posts__container}>
          {
            posts.map(({ id, title, body }) => (
              <Post key={id} id={id} title={title} text={body} />
            ))
          }
        </div>
      </PageContainer>
    </section>
  );
};

export default Posts;