import { useState } from "react"
import DynamicEditor from "./DynamicEditor"

const Editor = () => {
    const [value, onChange] = useState("")

    return (
        <>
            <DynamicEditor
                value={value}
                onChange={onChange}
                controls={[
                    ["bold", "italic", "underline", "link", "image"],
                    ["unorderedList", "h1", "h2", "h3"],
                    ["sup", "sub"],
                    ["alignLeft", "alignCenter", "alignRight"],
                ]}
                className="h-full w-full"
            />
        </>
    )
}

export default Editor
