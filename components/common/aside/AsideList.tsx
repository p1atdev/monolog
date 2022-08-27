import { useStageState } from "../../../atom/stageState"
import { Section } from "../../../types/section"
import AsideItem from "./AsideItem"

interface Props {
    section: Section
}

const AsideList = ({ section }: Props) => {
    return (
        <div className="px-8">
            {section.asides.map((aside) => (
                <AsideItem key={aside.id} aside={aside} />
            ))}
        </div>
    )
}

export default AsideList
