import './App.css'
import News from './components/News/News';
import Stock from './components/Stok/Stok';
import Tab from './components/Tab/Tab';
import WidgetWeather from './components/Widget/WidgetWeather';
import Widget from './components/Widget/Widget';

import title from './data/title';
import news from './data/news';
import currency from './data/currency';
import tab from './data/tab';
import weather from './data/weather';
import pages from './data/pages';
import tv from './data/tv'

function App() {
  return (
    <div className='page'>
      <News title={title} news={news}/>
      <Stock currency={currency}/>
      <Tab tab = {tab}/>
      <ul className='widgets'>
        <WidgetWeather weather = {weather} />
        <Widget props = {tv} />
        <Widget props = {pages} />
      </ul>
        
    </div> 
  )
}

export default App
