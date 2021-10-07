import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { TypedEmitter } from 'tiny-typed-emitter';
export interface nftEvents {
    'initARnft': () => void;
}
interface Entity {
    name: string;
    markerUrl: string;
}
export default class ARnft extends TypedEmitter<nftEvents> {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    width: number;
    height: number;
    configUrl: string;
    markerUrl: string;
    camData: string;
    private controllers;
    private static entities;
    private uuid;
    private version;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrls: Array<string>, names: Array<string>, configUrl: string, stats: boolean): Promise<object>;
    static initWithEntities(width: number, height: number, entities: Entity[], configUrl: string, stats: boolean): Promise<object>;
    private _initialize;
    static getEntities(): Entity[];
    dispose(): void;
    disposeNFT(): void;
    disposeVideoStream(): void;
}
export {};
