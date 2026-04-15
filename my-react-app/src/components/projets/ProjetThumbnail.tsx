import type {ProjectThumbnail, ProjetDetailProp} from "../../types.ts";
import {useEffect, useState} from "react";
import projets from "../../styles/projets.module.css";
import ProjectTag from "./ProjectTag.tsx";

const initThumbnail : ProjectThumbnail ={
    slug : "",
    title : "",
    summary : "",
    image : "",
    tags : []
}

const ProjetThumbnail = ({ slug } : ProjetDetailProp) => {
    const [project,setProject] = useState(initThumbnail);

    useEffect(()=>{
        fetch("/archive/"+slug+"/index.json")
            .then(res => res.json())
            .then(data => setProject({...data,image:`/archive/${slug}/gallery/icon.png`}));
    },[])

    return (
        <article className={projets.projectViewer} id={project.slug} style={{ backgroundImage: `url(${project.image})` }}>
            <h4 className={projets.projectTitle} >{project.title} </h4>
            <p className={projets.projectResume} >{project.summary} <br/>
                Jeu de survie/gestion par une mécanique de questions/réponses.</p>
            <div className={projets.tagContainer}>
                {project.tags.map((tag:string)=><ProjectTag type={tag} key={tag}/>)}
            </div>
        </article>
    )
}

export default ProjetThumbnail;