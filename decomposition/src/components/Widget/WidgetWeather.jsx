import Title from "../News/Tittle"
import WidgetIcon from "./WidgetIcon"

const WidgetWeather = ({weather}) => {
    return (
        <li className="widget-list-item-weather">
            <Title link = {weather.link} title= {weather.title}/>
            <WidgetIcon icon = {weather.icon}/>
        </li> 
    )
}

export default WidgetWeather