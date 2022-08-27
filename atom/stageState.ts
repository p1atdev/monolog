import { useCallback } from "react"
import { atom, useRecoilValue, useSetRecoilState } from "recoil"

type ScenarioState = string | null
type ChapterState = string | null
type SectionState = string | null

interface StageState {
    scenarioId: ScenarioState
    chapterId: ChapterState
    sectionId: SectionState
}

export const StageStateKey = "themeState"

const stageStateRecoilState = atom<StageState>({
    key: StageStateKey,
    default: {
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
