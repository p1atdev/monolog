import { Text, Title } from "@mantine/core"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Head from "next/head"
import Image from "next/image"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    return {
        props: {},
    }
}

const Home = () => {
    return (
        <div className="">
            <Title order={1}>Monolog</Title>
            {/* <div>{user && <div>{user.email}</div>}</div> */}
        </div>
    )
}

export default Home
