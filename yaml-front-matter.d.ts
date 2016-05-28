declare interface YamlFrontMatterStatic{
    loadFront(file: string | Buffer, contentKey?: string): any;
}

declare module "yaml-front-matter" {
    var temp: YamlFrontMatterStatic;
    export = temp;
}
