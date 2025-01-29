import style from "@/pages/index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book/book-item";
import {ReactNode} from "react";
import SearchableLayout from "@/components/layout/searchable-layout/searchable-layout";
import {InferGetServerSidePropsType} from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async () => {
    // 컴포넌트보다 먼저 실행되어 컴포넌트에 필요한 데이터를 불러오는 함수
    const data = "hello";

    // fetchBooks 함수를 이용해 서버로부터 데이터를 불러옴
    // const allBooks = await fetchBooks();

    // 여러개의 fetch 를 사용해야 하는 경우
    // const [allBooks, recoBooks] = await Promise.all([
    //     fetchBooks(),
    //     fetchRandomBooks(),
    // ]);

    return {
        props: {
            data,
            // allBooks, // 서버로부터 받은 데이터를 props data 로 전달
        }
    }
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // console.log(allBooks);
    console.log(data);

  return (
    <div className={style.container}>
        <section>
            <h3>지금 추천하는 도서</h3>
            {books.map(
                (book) => (<BookItem key={book.id} {...book}/>)
            )}
        </section>
        <section>
            <h3>등록된 모든 도서</h3>
            {books.map(
                (book) => (<BookItem key={book.id} {...book}/>)
            )}
        </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;