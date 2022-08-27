import { Accordion, Avatar, Box, Navbar, NavLink, Title } from "@mantine/core"
import { useEffect, useState } from "react"
import { useStageState } from "../../../atom/stageState"
import { Scenario } from "../../../types/scenario"
import ChapterItem from "../scenario/ChapterItem"

interface Props {
    scenarios: Scenario[]
}

const SectionBar = ({ scenarios }: Props) => {
    const { scenarioId } = useStageState()
    const [scenario, setScenario] = useState<Scenario | null>(null)

    useEffect(() => {
        const _scenario = scenarios.find((_scenario) => _scenario.id === scenarioId)
        if (!_scenario) {
            return
        }
        setScenario(_scenario)
    }, [scenarioId])

    if (!scenario) {
        return <div></div>
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
