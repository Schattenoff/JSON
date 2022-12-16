import PageContainer from '../PageContainer/PageContainer';
import Navigation from './components/Navigation/Navigation';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header} id="header">
      <PageContainer>
        <div className={classes.header__container}>
          <h1>JSON</h1>
          <Navigation />
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;