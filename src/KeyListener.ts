import './Utility/Keycodes';
export default abstract class KeyListener {
    protected keys : Keycodes[];

    abstract runOnKeyUp(key : String) : void;
    abstract runOnKeyDown(key : String) : void;

    private keyUpListener = (event : KeyboardEvent) => {
        for (let key in this.keys) {
            if (event.key == key) {
                this.runOnKeyUp(key);
            }
        }
    }
    private keyDownListener = (event : KeyboardEvent) => {
        for (let key in this.keys) {
            if (event.key == key) {
                this.runOnKeyDown(key);
            }
        }
    }
    constructor(keys : Keycodes[]) {
        this.keys = keys;
        this.init();
    }
    private init() : void {
        document.addEventListener('keyup', this.keyUpListener);
        document.addEventListener('keyup', this.keyDownListener);
        // document.addEventListener('keypress') <- deprecated
    }
    public removeListeners() {
        document.removeEventListener('keyup', this.keyUpListener);
        document.removeEventListener('keyup', this.keyDownListener);
    }
}