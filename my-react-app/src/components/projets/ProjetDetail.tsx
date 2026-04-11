import { type ProjetDetailProp } from "../../types";


const ProjetDetail = ({ slug } : ProjetDetailProp) =>{
    
    return(
        <h2>Projet - {slug}</h2>
    )
}

export default ProjetDetail;