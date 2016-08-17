declare module "js-yaml"{



    namespace jsYaml {
        type schemaTypes = "FAILSAFE_SCHEMA" 
            | "JSON_SCHEMA"
            | "CORE_SCHEMA"
            | "DEFAULT_SAVE_SCHEMA"
            | "DEFAULT_FULL_SCHEMA";
        function safeLoad(
            document: string,
            filename?:string,
            onWarning?:(any) => any, 
            schema?: schemaTypes,
            json?: boolean): {};

        function load(document: string,
            filename?:string,
            onWarning?:(any) => any, 
            schema?: schemaTypes,
            json?: boolean): {};

        function safeLoadAll(document: string,
            iterator: (any) => any,
            filename?:string,
            onWarning?:(any) => any, 
            schema?: schemaTypes,
            json?: boolean): {};

        function loadAll(document: string,
            iterator: (any) => any,
            filename?:string,
            onWarning?:(any) => any, 
            schema?: schemaTypes,
            json?: boolean): {};
    }

    export = jsYaml;
}

declare module "yaml-front-matter"{
    var x: any;
    export = x;
}