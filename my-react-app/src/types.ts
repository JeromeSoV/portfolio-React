export type ProjetDetailProp = {
    slug : string;
}

export type ProjectDetail = {
    title : string;
    content : string;
}

export type ProjectThumbnail = {
    slug : string;
    title : string;
    summary : string;
    image : string;
    tags : string[];
}

export type ProjectContent = ProjectData & {
    content : string;
}
export type ProjectData = {
    [key: string]: any;
}

export type ProjetTagProps = {
    type : string;
}