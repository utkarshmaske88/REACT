export default function Items(items) {
    return(<>        
        <li>{items.id}</li>
        <li>{items.title}</li>
        <li>{items.subtitle}</li>
        <li>{items.content}</li>
        <li>{items.author}</li>
        </>
    )
}