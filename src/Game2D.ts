import Configuration from "./Configuration";
import WebCanvasRenderer from "./Renderer";
import Board2D from "./Board2D";
import Renderer from "./Renderer";
import KeyListener from "./KeyListener";

export class Game2D {
    protected _perf : Performance;
    protected _input : KeyListener;
    protected _renderer : WebCanvasRenderer | null;
    protected _board : Board2D;
    protected _config : Configuration;
    protected _display : any;
    protected _running : boolean = false;

    constructor () { // This cannot be constructed as it is abstract.
        console.log("Creating Game2D object");
        this._display = document.getElementById("canvas") as HTMLCanvasElement;
        this._config = new Configuration(true);
        this._board = new Board2D(this._config);
        this._perf = performance;

        if (this._config.getValue("keybindDefault")) {

        }else {
            this._input = new class extends KeyListener {
                runOnKeyDown(key: String): void {

                }
                runOnKeyUp(key: String): void {

                }
            }(null);
        }

        if (this._display == null) {
            this._renderer = null;
            throw new DOMException("Canvas element doesn't exist!", "nullCanvasElement")
        }else {
            this._renderer = new WebCanvasRenderer(this._display.getContext("2d"), this._board, this._config);
            // Note that to replace the blank screen, you must use the update method first, but you might not prefer
            // that if you want a specific background.
        }

        console.log("Loaded Game2D object");
    }

    // exposeRenderer() : Renderer {return this._renderer;}
    // exposeBoard() : Board2D {return this._board};
}