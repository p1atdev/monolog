import { Avatar, Navbar } from "@mantine/core"
import { useEffect } from "react"
import { useStageState, useStageStateMutators } from "../../../atom/stageState"
import { Scenario } from "../../../types/scenario"

interface Props {
    scenarios: Scenario[]
}

const ScenarioBar = ({ scenarios }: Props) => {
    const { scenarioId } = useStageState()

    return (
        <div className="px-4 py-3">
            {scenarios.map((scenario) => (
                <div key={scenario.id} className={`${scenarioId === scenario.id ? "ring" : ""} rounded`}>
                    <Avatar color={scenario.icon.backgroundColor} className={"hover:scale-105"}>
                        {scenario.icon.emoji && <span className=" text-2xl">{scenario.icon.emoji}</span>}
                    </Avatar>
                </div>
            ))}
        </div>
    )
}

export default ScenarioBar
