import { useParams } from "react-router-dom"
import ProjetDetail from "./ProjetDetail";
import ProjetsListe from "./ProjetsListe";

const Projets = ()=> {
    const {slug} = useParams();
    
    return ( <>{(slug) ? <ProjetDetail slug={slug} /> : <ProjetsListe />}</>);
}

export default Projets;