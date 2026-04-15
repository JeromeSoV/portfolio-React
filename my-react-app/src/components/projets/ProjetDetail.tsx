import { type ProjetDetailProp } from "../../types.ts";
import {parseMdContent} from "../../utils/ArchiveCreator/mdParser.ts";


const ProjetDetail = ({ slug } : ProjetDetailProp) =>{
    fetch("/archive/"+slug+"/index.json")
        .then(res => res.json())
        .then(data => console.log(data));
    return(
        <h2>Projet - {slug}</h2>
    )
}

export default ProjetDetail;