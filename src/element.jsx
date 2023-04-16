export default function Element({ e }) {
  return (
  <div className={`element element_${e.block}`}>
    <div className="element__number">{e.number}</div>
    <div className="element__symbol">{e.symbol}</div>
    <div className="element__name">{e.name}</div>
    <div className="element__weight">{e.weight.toPrecision(5)}</div>
  </div>
  );
}