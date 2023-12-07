import Icon from "./Icon";
import Title from "./Tittle";

const News = ({title, news}) =>{
    return (
        <div className="news">
            <ul className='news-title-list'>
                {title.map((item, index) => 
                <li className="news-title-list-item" key={index}>
                    <Title link = {item.link} title = {item.title}/>
                </li>
                )}
            </ul>
            <div className="news-body">
                <ul className="news-list">
                    {news.map((item, index) =>
                        <li className="news-list-item" key={index}>
                            <Icon icon = {item.icon}/>
                            <Title link = {item.link} title = {item.title}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default News