export default function Vote1Page() {
    return (<></>);
}

// Redirect to https://servers-minecraft.net/server-minepower.25238
export function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://servers-minecraft.net/server-minepower.25238',
            permanent: false,
        },
    }
}