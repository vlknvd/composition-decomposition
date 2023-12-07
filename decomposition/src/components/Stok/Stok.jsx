const Stock = ({ currency }) => {
    return (
        <div className="stoks">
            <ul className="stok-list">
                {currency.map((item, index) => 
                    <li className="stok-list-item" key={index}>
                        <a className="stok-item stok-item-name" href={item.title}>{item.name}</a>
                        <a className="stok-item stok-item-market" href={item.title}>{item.market}</a>
                        <p className="stok-item stok-item-value">{item.value}</p>
                        <p className="stok-item stok-item-percent">{item.percent}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Stock