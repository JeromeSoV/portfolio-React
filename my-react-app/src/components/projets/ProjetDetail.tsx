import { type ProjetDetailProp } from "../../types.ts";


const ProjetDetail = ({ slug } : ProjetDetailProp) =>{
    
    return(
        <h2>Projet - {slug}</h2>
    )
}

export default ProjetDetail;