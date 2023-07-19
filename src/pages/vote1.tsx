import {useRouter} from "next/router";
import {useEffect} from "react";

// Redirect to https://minecraftservers.org/vote/653089
export default function Vote1Page() {
    const router = useRouter();

    useEffect(() => {
        router.push('https://minecraftservers.org/vote/653089').catch(console.log);
    });

    return (<></>);
}