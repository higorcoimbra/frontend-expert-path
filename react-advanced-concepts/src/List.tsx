import { Children, cloneElement, useState, type PropsWithChildren } from "react"

export default function List({ children }: any) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className="List">
            {Children.map(children, (child, index) => {
                return cloneElement(child, {
                    isHighlighted: index === selectedIndex
                })
            })}
            <hr />
            <button onClick={() => {
                setSelectedIndex(i => {
                    return (i+1) % Children.count(children)
                })
            }}> 
                Next
            </button>
        </div>
    )
}