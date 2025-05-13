export default function Row({ title , isHighlighted }: RowProps) {
    return (
        <div className={[
            'Row',
            isHighlighted ? 'RowHighlighted' : ''
        ].join(' ')}>
            {title}
        </div>
    )
}

type RowProps = {
    title: string
    isHighlighted?: Boolean
}