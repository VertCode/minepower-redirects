export default function Vote1Page() {
    return (<></>);
}

// Redirect to https://minecraft.buzz/vote/8163
export function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://minecraft.buzz/vote/8163',
            permanent: false,
        },
    }
}