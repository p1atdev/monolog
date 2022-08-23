import { useCallback } from "react"
import { atom, useRecoilValue, useSetRecoilState } from "recoil"

type ThemeState = "light" | "dark" | "custom" | null

export const ThemeStateKey = "themeState"

const themeStateRecoilState = atom<ThemeState>({
    key: ThemeStateKey,
    default: "light",
})

export const useThemeState = () => {
    return useRecoilValue(themeStateRecoilState)
}

export const useThemeStateMutators = () => {
    const setState = useSetRecoilState(themeStateRecoilState)

    const setDrawerState = useCallback((themeState: ThemeState) => setState(themeState), [setState])

    return { setDrawerState }
}
