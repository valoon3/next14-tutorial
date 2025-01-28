import {ReactNode} from "react";
import SearchableLayout from "@/components/layout/searchable-layout/searchable-layout";

export default function Home() {
    return (
        <div>
        Home
        </div>
    );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;