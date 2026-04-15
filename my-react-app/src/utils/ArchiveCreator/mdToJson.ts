import {remark} from "remark";

import remarkHtml from "remark-html";
import type {ProjectContent} from "../../types.ts";
import {data} from "react-router-dom";


async function contentToHtml(markdown: string): Promise<string> {
    const htmlContent = await remark().use(remarkHtml).process(markdown);
    return htmlContent.toString();
}

const getProjectDetails = async({data,content} : ProjectContent ) => {
    const res = await contentToHtml(content).then(html => html);
    return {
        data : data,
        content : res
    }

}
export default getProjectDetails;

