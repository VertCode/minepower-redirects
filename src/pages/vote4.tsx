import {useRouter} from "next/router";
import {useEffect} from "react";

// Redirect to https://minecraft.buzz/vote/8163
export default function Vote4Page() {
    const router = useRouter();

    useEffect(() => {
        router.push('https://minecraft.buzz/vote/8163').catch(console.log);
    });

    return (<></>);
}