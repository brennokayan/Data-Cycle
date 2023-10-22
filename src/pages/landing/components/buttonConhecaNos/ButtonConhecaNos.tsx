import "./style.css";
interface props {
    title: string;
    cor: string;
    corLetra: string
    corBorda: string
    href?: string
}
export function ButtonConhecaNos({title, cor, corLetra, corBorda, href}: props) {
  return (
    <>
      <a href={href} style={{backgroundColor: cor, color: corLetra, border: `1px solid ${corBorda}`}} className="button">{title}</a>
    </>
  );
}
