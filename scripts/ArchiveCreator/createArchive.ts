import {mdParserDir, parseMdContent} from "./mdParser.ts";
import type {ProjectContent} from "../../my-react-app/src/types.ts";
import getProjectDetails from "./mdToJson.ts";
import fs from "fs";

fs.rmSync(process.cwd()+"/my-react-app/public/archive/index.json");

const DIR = process.cwd()+"/my-react-app/public/archive/";
const projects = fs.readdirSync(DIR);

fs.writeFileSync(DIR+`index.json`, JSON.stringify(projects));

for(const project of projects){
    const mdContent : ProjectContent = parseMdContent(DIR+`${project}`);
    const htmlContent : ProjectContent = await getProjectDetails(mdContent);
    fs.writeFileSync(DIR+`${project}/index.json`, JSON.stringify(htmlContent));
}