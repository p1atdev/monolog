import { Accordion, Avatar, Box, Navbar, NavLink, Title } from "@mantine/core"
import { useStageState } from "../../../atom/stageState"
import { Scenario } from "../../../types/scenario"
import ChapterItem from "../scenario/ChapterItem"

interface Props {
    scenarios: Scenario[]
}

const SectionBar = ({ scenarios }: Props) => {
    const { sectionId, chapterId, scenarioId } = useStageState()
    const scenario = scenarios.find((scenario) => scenario.id === scenarioId)

    if (!scenario) {
        return (
            <div>
                <p>scenario not found</p>
            </div>
        )
    }

    return (
        <div className="w-60">
            <div className=" flex justify-between py-2 px-3 text-lg font-semibold before:content-['【'] after:content-['】']">
                <p>{scenario.title}</p>
            </div>
            <div className="my-1">
                {scenario.chapters.map((chapter) => (
                    <ChapterItem key={chapter.id} chapter={chapter} scenario={scenario} />
                ))}
            </div>
        </div>
    )
}

export default SectionBar
