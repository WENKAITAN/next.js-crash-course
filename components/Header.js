import headerStyles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WevDev</span> News
        </h1>
        <p className={headerStyles.description}>
            Keep up to date with the latest web dev news
        </p>
    </div>
  )

};
export default Header;