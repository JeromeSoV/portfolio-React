import projets from "../../styles/projets.module.css";
import type {ProjetTagProps} from "../../types.ts";
import tagColors from "../../utils/values.ts";

const ProjectTag = ({type} : ProjetTagProps)=>{
    return(
        <div className={projets.tag}
             style={ {backgroundColor: (tagColors.has(type)) ? tagColors.get(type)
                                                            : "white"}}>

            {type}

        </div>
    )
}
export default ProjectTag;