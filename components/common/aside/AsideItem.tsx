import { Aside } from "../../../types/aside"

interface Props {
    aside: Aside
}

const AsideItem = ({ aside }: Props) => {
    return (
        <div>
            {aside.updatedAt && <div className="opacity-50">{aside.updatedAt}</div>}
            {aside.content.text && <p className="font-medium">{aside.content.text}</p>}
            {aside.content.media && (
                <div>
                    {aside.content.media.map((media) => (
                        <div>
                            <img key={media.image} src={media.image} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AsideItem
