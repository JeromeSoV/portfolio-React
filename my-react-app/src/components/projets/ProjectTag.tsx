
import projets from "../../styles/projets.module.css";
import type {ProjetTagProps} from "../../types.ts";
import tagColors from "../../utils/values.ts";

const ProjectTag = ({type} : ProjetTagProps)=>{
    const tagStyle = (type : string) => {
        return `${projets.tag} backgroundColor:`+`${(tagColors.has(type)) ? tagColors.get(type) : "white"}`
    }
    return(
        <div className={tagStyle(type)}>
            {type}
        </div>
    )
}
export default ProjectTag;