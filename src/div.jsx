import sty from './div.module.css'

export default function Div(props) {
  return <div className={sty.square}>{props.children}</div>;
}