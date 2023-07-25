import Component from "./Component";
import Vector2D from "../Movement/Vector2D";

export default class CollisionComponent extends Component {
    relativeOrigin : Vector2D;
    size : Vector2D;
    constructor(size : Vector2D) {
        super();
        this.relativeOrigin = this.parent.relativeOrigin;
        this.size = size;
        if (!Vector2D.square(this.size)) throw new Error("All collision components must have a square size!");
        // ^^ Temporary;
        this.name = 'CollisionComponent';
    }
    onTick(args: any[]): CollisionComponent[] {
        // Per tick, I want to check that the future movement of each object is overlap-free
        // Therefore, I must order which object will move first, and then move them accordingly to that order if I can.
        // This way, we provide first-come-first-serve basis.
        // This might not work with inaccuracies, but that should be okay because I am not doing multiplayer.

        let detectedColliders : CollisionComponent[] = [];

        args.forEach((element : any) => {
            if (element instanceof CollisionComponent) {
                // Figure out that this object and that object are not overlapping.
                let component = element as CollisionComponent;
                let position : Vector2D = this.parent.position;
                let otherPosition : Vector2D = component.parent.position;
                let direction : Vector2D;

                direction = Vector2D.subtract(otherPosition, position);
                direction.normalize();
                direction.round();

                let x1 :
            }
        })

        return detectedColliders;
    }
    onUpdate(args: any[]): void {

    }

}