import { Webpack, Plugin } from 'webpack';

declare module 'webpack' {
    interface LoaderOptionsPluginStatic {
        new (options: any): Plugin;
    }

    interface Webpack{
        LoaderOptionsPlugin: LoaderOptionsPluginStatic {
    }
}