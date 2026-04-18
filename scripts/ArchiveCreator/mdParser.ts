import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type {ProjectContent, ProjectData} from "../../my-react-app/src/types.ts";


const DIR_NAME = "/public/archive";
/**
 *
 * @param dirPath the directory path
 */
export function mdParserDir() : ProjectContent[]{
    const res: ProjectContent[] = [];
    const dir = path.join(process.cwd(), DIR_NAME);
    const filesList = fs.readdirSync(dir);
    for(let file of filesList){
        res.push(parseMdContent(path.join(dir,file)));
    }
    return res;
}

export function parseMdContent(projectSlug: string) : ProjectContent{
    const fileContent : string = fs.readFileSync(projectSlug+"/index.md", 'utf8');

    const data : ProjectData  = matter(fileContent).data;
    const content : string = ""+fileContent.split("---")[2];

    return {data ,content};
}





