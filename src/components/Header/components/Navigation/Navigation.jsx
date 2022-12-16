import { Link } from 'react-router-dom';
import { NavigationItems } from './navigation.constants';
import classes from './navigation.module.css';

const Navigation = () => {
  return (
    <nav id="nav">
      <ul className={classes.list}>
        {
          NavigationItems.map(({ id, title, href }) => (
            <li className={classes.list__item} key={id}>
              <Link to={href}>
                {title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navigation;