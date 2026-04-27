import {type ProjectDetail, type ProjetDetailProp} from "../../types.ts";
import {useEffect, useState} from "react";
import projet from "../../styles/projet.module.css";
import {Link} from "react-router-dom";

const initProjectDetail : ProjectDetail={
    content: "",
    title: ""
}
const ProjetDetail = ({ slug } : ProjetDetailProp) =>{
    const [detail,setDetail]=useState(initProjectDetail);
    if(!slug){
        const path : string[] = window.location.pathname.split("/");
        slug = path[path.length-1]!;
    }
    document.title=`JérômeS - Projet ${slug}`;
    useEffect(()=>{
        fetch(`/archive/${slug}/index.json`)
            .then(res => res.json())
            .then(data => setDetail(data))
            .catch(err => console.error(err));
    },[slug]);

    return(
        <main className={projet.detailMain}>
            <div className={projet.parents}>
                <Link to="/" className={projet.parentLink}>Home</Link>
                <span> {">>"} </span>
                <Link to="/projets" className={projet.parentLink}>Catalogue</Link>
                <span> {">>"} </span>
                <Link to={"/projets/"+slug} className={projet.parentLink}>{"projet "+slug}</Link>
            </div>
            <div className={projet.content} dangerouslySetInnerHTML={{__html :detail.content}}>
            </div>
        </main>
    )
}

export default ProjetDetail;