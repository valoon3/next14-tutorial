import {BookData} from "@/types/bookItem/book.type";

export default async function fetchBooks(): Promise<BookData[]> {
// export default async function fetchBooks(q?: string): Promise<BookData[]> {
    // 값을 받아올 때 q? 를 사용하면 값이 없을 때 undefined 가 할당되어 에러가 발생하지 않음

    let url = "http://localhost:8080/books";

    // q 의 값이 있을 경우 url 에 query string 으로 추가
    // if(q) {
    //     url += `/search?q=${q}`;
    // }

    try {
        const response = await fetch(url);
        const data = await response.json();

        return await response.json();
    } catch (error) {
        console.error("fetchBooks error", error);
        return [];
    }
}