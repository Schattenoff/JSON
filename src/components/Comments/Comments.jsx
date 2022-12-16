import PageContainer from '../PageContainer/PageContainer';
import classes from './comments.module.css';

const Comments = () => {
  return (
    <section id="comments">
      <PageContainer>
        <h1 className={classes.comments__title}>Comments</h1>
      </PageContainer>
    </section>
  );
};

export default Comments;