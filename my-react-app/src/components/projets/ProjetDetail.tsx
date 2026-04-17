import {type ProjectDetail, type ProjetDetailProp} from "../../types.ts";
import {parseMdContent} from "../../utils/ArchiveCreator/mdParser.ts";
import {useEffect, useState} from "react";
import projet from "../../styles/projet.module.css";
import {Link} from "react-router-dom";

const initProjectDetail : ProjectDetail={
    content: "",
    title: ""
}
const ProjetDetail = ({ slug } : ProjetDetailProp) =>{
    const [detail,setDetail]=useState(initProjectDetail);

    useEffect(()=>{
        fetch(`/public/archive/${slug}/index.json`)
            .then(res => res.json())
            .then(data => setDetail(data))
    },[]);

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