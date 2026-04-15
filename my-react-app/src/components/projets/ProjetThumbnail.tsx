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
            .then((doc ) => {
                const data = doc.data;
                setProject({...data, image: `/archive/${slug}/gallery/icon.png`})
            });
    },[])

    const thumbnailStyle = {
        backgroundImage: `url(${project.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundAttachment: "scroll",
        backgroundSize: "20%",
    };

    return (
        <article className={projets.projectViewer} id={project.slug} style={thumbnailStyle}>
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