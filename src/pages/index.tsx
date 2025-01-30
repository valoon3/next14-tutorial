import style from "@/pages/index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book/book-item";
import {ReactNode} from "react";
import SearchableLayout from "@/components/layout/searchable-layout/searchable-layout";
import {InferGetServerSidePropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

// export const getStaticProps = async () => {
//     // 여기의 console.log 는 build 단계에서 단 한번만 실행된다
//     console.log("getStaticProps");
// }

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

// 만약 getStaticProps 방식으로 데이터를 불러오는 경우 InferGetStaticPropsType<typeof getStaticProps> 를 사용
export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // console.log(allBooks);
    console.log(data);

  return (
      <>
      <Head>
          <title>한입북스</title>
          {/*<meta property="og:title" content="/thumnail.png"/>*/}
          {/*content"/thumnail.png" 는 public 경로 아래의 file name 을 찾는다*/}
      </Head>
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
      </>
  );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;