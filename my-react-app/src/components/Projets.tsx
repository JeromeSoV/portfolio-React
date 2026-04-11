import { useParams } from "react-router-dom"

const Projets = ()=> {
    const {slug} = useParams();

    return(
        <h2> Projets - {slug} </h2>
    );
}

export default Projets;