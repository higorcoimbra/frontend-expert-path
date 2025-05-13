import { useState } from "react"

export default function List({ items, renderItem }: ListProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className="List">
            {items.map((item, index) => {
                const isHighlighted = selectedIndex === index;
                return renderItem(item, isHighlighted)
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
    renderItem: (item: any, isHighlighted: Boolean) => React.ReactNode
}