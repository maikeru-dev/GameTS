import Configuration from "./Configuration";
import WebCanvasRenderer from "./Renderer";
import Board2D from "./Board2D";

export class Game2D {
    protected _perf : Performance;
    protected _renderer : WebCanvasRenderer | null;
    protected _board : Board2D;
    protected _config : Configuration;
    protected display : any;
    protected _running : boolean = false;
    private constructor () {
        let canvas = document.getElementById("canvas") as HTMLCanvasElement;

        if (canvas == null) {
            throw new DOMException("Canvas element doesn't exist!", "nullCanvasElement")
        }
        this._config = new Configuration(true);
        this._board = new Board2D(this._config);
        this._perf = performance;
        this._renderer = null;
        this.display = canvas;
    }
    init() {
        if (this.display instanceof HTMLCanvasElement) {
            this._renderer = new WebCanvasRenderer(this.display.getContext("2d"), this._board, this._config);
        }
    }
}