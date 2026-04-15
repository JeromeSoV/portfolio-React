import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ProjetThumbnail from "./ProjetThumbnail.tsx";
import projets from "../../styles/projets.module.css";

const ProjetDetail = () =>{
    const [slugs,setSlugs] = useState([]);

    useEffect(()=>{
        fetch("/archive/index.json")
            .then(res => res.json())
            .then(data => setSlugs(data));
    },[])

    return(
        <div className={projets.results}>
            {slugs.map(slug =>
                <Link to={"/projets/"+slug} key={slug} className={projets.resultItem}>
                    <ProjetThumbnail slug={slug}/>
                </Link>
            )}
        </div>
    )
}

export default ProjetDetail;