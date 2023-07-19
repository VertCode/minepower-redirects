import {useRouter} from "next/router";
import {useEffect} from "react";

// Redirect to https://topminecraftservers.org/vote/34335
export default function Vote3Page() {
    const router = useRouter();

    useEffect(() => {
        router.push('https://topminecraftservers.org/vote/34335').catch(console.log);
    });

    return (<></>);
}