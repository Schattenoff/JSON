import classes from './post.module.css';

const Post = ({ id, title, text }) => {
  return (
    <article className={classes.post}>
      <h4 className={classes.post__title}>{id}. {title}</h4>
      <p className={classes.post__text}>{text}</p>
    </article>
  );
};

export default Post;