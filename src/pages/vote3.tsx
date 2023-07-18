export default function Vote1Page() {
    return (<></>);
}

// Redirect to https://topminecraftservers.org/vote/34335
export function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://topminecraftservers.org/vote/34335',
            permanent: false,
        },
    }
}