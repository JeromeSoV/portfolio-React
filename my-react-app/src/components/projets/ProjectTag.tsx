
import projets from "../../styles/projets.module.css";
import type {ProjetTagProps} from "../../types.ts";
import tagColors from "../../utils/values.ts";
const tagStyle = (type : string) => {
    return `${projets.tag} backgroundColor:`+`${(tagColors.has(type)) ? tagColors.get(type) : "white"}`
}
const ProjectTag = ({type} : ProjetTagProps)=>{
    return(
        <div className={tagStyle(type)}>
            {type}
        </div>
    )
}
export default ProjectTag;