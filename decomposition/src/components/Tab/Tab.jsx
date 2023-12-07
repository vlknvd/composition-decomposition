const Tab = ({ tab }) => {
    return (
        <div className="tab">
            <ul className="tab-list">
                {tab.map((item, index) => 
                <li className="tab-list-item" key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>)}
            </ul>
        </div>
    )
}

export default Tab