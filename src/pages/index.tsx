import style from "@/pages/index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book/book-item";
import {ReactNode} from "react";
import SearchableLayout from "@/components/layout/searchable-layout/searchable-layout";

export default function Home() {
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