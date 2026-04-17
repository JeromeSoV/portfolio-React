import {mdParserDir, parseMdContent} from "./mdParser.ts";
import type {ProjectContent} from "../../types.ts";
import getProjectDetails from "./mdToJson.ts";
import fs from "fs";

fs.rmSync(process.cwd()+"/public/archive/index.json");

const DIR = process.cwd()+"/public/archive";
const projects = fs.readdirSync(DIR);

fs.writeFileSync(process.cwd()+`/public/archive/index.json`, JSON.stringify(projects));

for(const project of projects){
    console.log("slug :"+project);
    const mdContent : ProjectContent = parseMdContent(process.cwd()+`/public/archive/${project}`);
    const htmlContent : ProjectContent = await getProjectDetails(mdContent);
    fs.writeFileSync(process.cwd()+`/public/archive/${project}/index.json`, JSON.stringify(htmlContent));
}

console.log(projects);