import NewsListItem from "./news_list_item"

const NewsList = (props) => {
    console.log(props)

    const news = props.news.map((item) => (
        <NewsListItem key={item.id} item={item}/>
    ))

    return (
        <>
           { news }
           { props.children }
        </>
    )
}

export default NewsList;