import Entity from "./Entity";

export default abstract class Component {
    parent : Entity;
    protected name : string;
    public get gParent() {return this.parent;}
    public get gName() {return this.name};
    public set sParent(parent : Entity) {this.parent = parent;}

    // public abstract onStart(args: any[]) : void;
    public abstract onUpdate(args: any[]) : void;
    public abstract onTick(args: any[]) : void;

}