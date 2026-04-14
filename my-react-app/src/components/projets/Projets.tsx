import { useParams } from "react-router-dom"
import ProjetDetail from "./ProjetDetail.tsx";
import ProjetsListe from "./ProjetsListe.tsx";

const Projets = ()=> {
    const {slug} = useParams();
    
    return ( <>{(slug) ? <ProjetDetail slug={slug} /> : <ProjetsListe />}</>);
}

export default Projets;