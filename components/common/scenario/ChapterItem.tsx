import Link from "next/link"
import { useState } from "react"
import { useStageState } from "../../../atom/stageState"
import { Chapter } from "../../../types/chapter"
import { Scenario } from "../../../types/scenario"
import { Icon } from "@iconify/react"

interface Props {
    scenario: Scenario
    chapter: Chapter
}

const ChapterItem = ({ scenario, chapter }: Props) => {
    const [show, setShow] = useState(true)
    const { sectionId } = useStageState()

    return (
        <div className="my-1 px-1">
            <div
                className="flex cursor-pointer items-center justify-between text-sm font-bold text-opacity-60"
                onClick={() => {
                    setShow(!show)
                }}
            >
                <p>{chapter.title}</p>
                <div className="rounded p-1 hover:bg-gray-500 hover:bg-opacity-20">
                    <Icon icon={show ? "akar-icons:chevron-down" : "akar-icons:chevron-left"} />
                </div>
            </div>
            <div className="">
                {show && (
                    <div className="py-1">
                        {scenario.sections
                            .filter((section) => section.chapterId === chapter.id)
                            .map((section) => (
                                <div
                                    key={section.id}
                                    className={`my-1 w-full cursor-pointer rounded-sm py-1  ${
                                        sectionId === section.id
                                            ? "bg-gray-500 bg-opacity-20 font-semibold hover:bg-opacity-30 "
                                            : "hover:bg-gray-500 hover:bg-opacity-10"
                                    }`}
                                >
                                    <Link href={`/${scenario.id}/${section.id}`}>
                                        <a className="">
                                            <p className="w-full px-2 py-1  before:content-['§']">{section.title}</p>
                                        </a>
                                    </Link>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChapterItem
