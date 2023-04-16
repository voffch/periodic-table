import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import Element from './element.jsx'
import Switch from './Switch.jsx'
import { elements } from './PeriodicTable.json'
import './app.css'

export function App() {
  const [shortTable, setShortTable] = useState(false);

  return (
    <>
      <main className={'table ' + (shortTable ? 'table_short' : 'table_long')}>
        {elements.filter(e => e.block !== 'f').map(element => <Element e={element} />)}
        {elements.filter(e => e.block === 'f').map(element => <Element e={element} />)}
        <div className='lanthanoid-separator'></div>
        <img src={preactLogo} class="logo logo_preact" alt="Preact logo" />
        <div className='table__controls'>
          <Switch textBefore='Long' textAfter='Short' checked={shortTable} handler={(value) => {console.log(value);setShortTable(value)}} />
        </div>
      </main>
    </>
  )
}
