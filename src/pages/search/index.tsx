import {useRouter} from "next/router";
import books from "@/mock/books.json";
import BookItem from "@/components/book/book-item";
import {GetServerSidePropsContext} from "next";

// query string 으로 전달된 검색어는 context : GetServerSidePropsContext 의 query 에서 확인 가능
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    console.log(context);
    // console.log(context.query.q);

    return {
        props: {

        }
    }
}

export default function Page() {
    const router = useRouter();

    const { q } = router.query;

    console.log(router);

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} {...book}/>
            ))}
        </div>
    );
}