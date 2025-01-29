import style from "@/pages/index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book/book-item";
import {ReactNode} from "react";
import SearchableLayout from "@/components/layout/searchable-layout/searchable-layout";
import {InferGetServerSidePropsType} from "next";

export const getServerSideProps = () => {
    // 컴포넌트보다 먼저 실행되어 컴포넌트에 필요한 데이터를 불러오는 함수
    const data = "hello";

    return {
        props: {
            data
        }
    }
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

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