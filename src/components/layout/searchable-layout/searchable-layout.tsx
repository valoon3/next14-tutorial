import React, {ReactNode, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: { children: ReactNode })  {
    const router = useRouter();

    const q = router.query.q as string;

    const [searchKeyword, setSearchKeyword] = useState("");
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
    };

    const onSubmit = () => {
        if(!searchKeyword || q === searchKeyword) return;
        router.push(`/search?q=${searchKeyword}`);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onSubmit();
        }
    };

    useEffect(() => {
        setSearchKeyword(q || "");
    }, [q])

    return (
        <div>
            <div className={style.searchbar_container}>
                <input
                    value={searchKeyword}
                    onChange={onChangeSearch}
                    onKeyDown={onKeyDown}
                    placeholder={"검색어를 입력하세요"}
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    );
}