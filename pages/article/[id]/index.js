import { useRouter } from 'next/router';
import Link from "next/link"
import Meta from "../../../components/Meta"
export const Article = ({article}) => {
    // const router = useRouter();
    // const { id } = router.query;
    return (
    <>
        <Meta title={article.title} description={article.body} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go back</Link>
    </>);
};

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return{
        props: {
            article
        }
    }
}

export default Article;
