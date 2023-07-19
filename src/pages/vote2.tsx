import {useRouter} from "next/router";
import {useEffect} from "react";


// Redirect to https://servers-minecraft.net/server-minepower.25238
export default function Vote4Page() {
    const router = useRouter();

    useEffect(() => {
        router.push('https://servers-minecraft.net/server-minepower.25238').catch(console.log);
    });

    return (<></>);
}