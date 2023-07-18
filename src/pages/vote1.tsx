export default function Vote1Page() {
    return (<></>);
}

// Redirect to https://minecraftservers.org/vote/653089
export function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://minecraftservers.org/vote/653089',
            permanent: false,
        },
    }
}