import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    const id = router.query.id;

    console.log("catch single segment : ", id);

    return <h1>book {id}</h1>
}