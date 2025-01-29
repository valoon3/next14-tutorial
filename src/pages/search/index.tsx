import {useRouter} from "next/router";
import books from "@/mock/books.json";
import BookItem from "@/components/book/book-item";

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