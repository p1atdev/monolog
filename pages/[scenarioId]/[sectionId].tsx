import { GetServerSidePropsContext } from "next"
import ScenarioBar from "../../components/common/bar/ScenarioBar"
import { Aside } from "../../types/aside"
import { format } from "date-fns"
import { Section } from "../../types/section"
import { Scenario } from "../../types/scenario"
import { Chapter } from "../../types/chapter"
import SectionBar from "../../components/common/bar/SectionBar"
import { useStageState, useStageStateMutators } from "../../atom/stageState"
import { useEffect, useState } from "react"
import AsideList from "../../components/common/aside/AsideList"
import Editor from "../../components/common/editor/Editor"

interface Props {
    scenarios: Scenario[]
    scenarioId: string
    sectionId: string
    section: Section
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

    const asides: Aside[] = [
        {
            id: "9012",
            content: {
                text: "ここにテキストが入ります",
            },
            createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
            updatedAt: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        },
    ]

    const sections: Section[] = [
        {
            id: "5678",
            title: "セクション",
            asides: asides,
            chapterId: "chapter-1",
        },
        {
            id: "9999",
            title: "セクション2",
            asides: asides,
            chapterId: "chapter-1",
        },
    ]

    const chapters: Chapter[] = [
        {
            id: "chapter-1",
            title: "チャプター",
        },
    ]

    const scenarios: Scenario[] = [
        {
            id: "1234",
            title: "シナリオ",
            icon: {
                type: "emoji",
                emoji: "🗒",
                backgroundColor: "red",
            },
            sections: sections,
            chapters: chapters,
        },
    ]

    const section = sections.find((section) => section.id === sectionId)

    if (!section) {
        return {
            redirect: {
                destination: "/",
            },
        }
    }

    return {
        props: {
            scenarios,
            scenarioId,
            sectionId,
            section,
        },
    }
}

const Page = ({ scenarios, scenarioId, sectionId, section }: Props) => {
    const stageState = useStageState()
    const { setStageState } = useStageStateMutators()

    useEffect(() => {
        setStageState({ ...stageState, scenarios, scenarioId, sectionId })
    }, [scenarioId, sectionId])

    return (
        <div className="flex h-screen">
            <div className="flex h-full">
                <ScenarioBar scenarios={scenarios} />
                <SectionBar scenarios={scenarios} />
            </div>
            <div className="flex h-full w-full flex-col">
                <div className="h-full overflow-auto">
                    <AsideList section={section} />
                </div>

                <div className="h-60">
                    <Editor />
                </div>
            </div>
        </div>
    )
}

export default Page
