const WidgetContent = (props) => {
    return (
        <div className="widget-body">
            <p className="widget-content-subtitle">{props.subtitle}</p>
            <p className="widget-content">{props.text}</p>
        </div>
    )
}

export default WidgetContent