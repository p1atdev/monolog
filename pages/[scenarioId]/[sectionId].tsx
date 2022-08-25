import { AppShell, Header, Navbar } from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

interface Props {
    scenarioId: string
    sectionId: string
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const params = ctx.params
    const scenarioId = params?.scenarioId
    const sectionId = params?.sectionId

    if (!scenarioId || !sectionId) {
        return {
            redirect: {
                destination: "/",
            },
        }
    }

    return {
        props: {
            scenarioId,
            sectionId,
        },
    }
}

const Page = ({ scenarioId, sectionId }: Props) => {
    return (
        <AppShell
            navbar={
                <Navbar width={{ base: 300 }} p="xs">
                    Navbar
                </Navbar>
            }
        >
            <h1>
                Scenario: {scenarioId}, Section: {sectionId}
            </h1>
        </AppShell>
    )
}

export default Page
