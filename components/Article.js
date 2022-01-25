import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';
const Article = ({article}) => {

  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} >
        <a className={articleStyles.card} key={article.id}>
            <h2>{article.title} </h2>
            <p>{article.body}</p>
        </a>
    </Link>

  );
};

export default Article;

