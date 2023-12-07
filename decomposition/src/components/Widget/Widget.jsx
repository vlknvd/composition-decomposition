import Title from "../News/Tittle"
import WidgetContent from "./WidgetContent"

const Widget = ({props}) => {
    return (
        <li className="widget-list-item">
            <Title link = {props.link} title= {props.title}/>
            <div className="widget-container">
                {props.content.map(i => <WidgetContent subtitle = {i.subtitle} text = {i.text}/>)}
            </div>
            
        </li> 
    )
}

export default Widget