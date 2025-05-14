import { useState } from "react"
import { HighlightContext } from "./HighlightContext";

export default function List({ items, renderItem }: ListProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className="List">
            {items.map((item, index) => {
                const isHighlighted = index === selectedIndex;
                return (<HighlightContext.Provider key={item.id} value={isHighlighted}>
                    {renderItem(item)}
                </HighlightContext.Provider>)
            })}
            <hr />
            <button onClick={() => {
                setSelectedIndex(i => {
                    return (i+1) % items.length
                })
            }}> 
                Next
            </button>
        </div>
    )
}

type ListProps = {
    items: any[]
    renderItem: (product: any) => React.ReactNode
}