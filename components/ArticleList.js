import articleStyles from '../styles/Article.module.css';
import Article from './Article';

export const ArticleList = ({articles}) => {
  return(
    <div className={articleStyles.grid}>
        {articles.map(article => (
            <Article article={article} key={article.id}/>
        )
      )}
    </div>
  )

};

export default ArticleList;
