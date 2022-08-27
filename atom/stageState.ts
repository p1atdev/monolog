import { useCallback } from "react"
import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { Chapter } from "../types/chapter"
import { Scenario } from "../types/scenario"
import { Section } from "../types/section"

type Id = string | null

type ScenariosState = Scenario[] | null
type ScenarioIdState = Id
type ChapterIdState = Id
type SectionIdState = Id

interface StageState {
    scenarios: ScenariosState
    scenarioId: ScenarioIdState
    chapterId: ChapterIdState
    sectionId: SectionIdState
}

export const StageStateKey = "themeState"

const stageStateRecoilState = atom<StageState>({
    key: StageStateKey,
    default: {
        scenarios: [],
        scenarioId: null,
        chapterId: null,
        sectionId: null,
    },
})

export const useStageState = () => {
    return useRecoilValue(stageStateRecoilState)
}

export const useStageStateMutators = () => {
    const setState = useSetRecoilState(stageStateRecoilState)

    const setStageState = useCallback((stageState: StageState) => setState(stageState), [setState])

    return { setStageState }
}
