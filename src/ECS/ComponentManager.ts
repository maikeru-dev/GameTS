import Component from "./Component";

export default abstract class ComponentManager {
    components : Component[];
    count : number;
    static tickComponents(components : Component[], ...args : any[]) : void {
        components.forEach( (component : Component) => {
            component.onTick(args);
        })
    }
    tickComponents(...args : any[]) : void {
        this.components.forEach( (component : Component) => {
            component.onTick(args);
        })
    }
    static updateComponents(components : Component[], ...args : any[]) : void {
        components.forEach( component => {
            component.onUpdate(args);
        })
    }
    addComponents(components : Component[], ...args : any[]) : void {
        this.count = this.components.push(...components);
        // components.forEach(component => {
        //     component.onStart(args);
        // })
    }
    addComponent(component : Component, ...args : any[]) : void {
        this.count = this.components.push(component);
        // component.onStart(args);
    }
    filterComponents(func : (value : Component, ...other : any[]) => boolean) : Component[] {
        return this.components.filter(func);
    }
    get gComponents() {
        return this.components;
    }
}