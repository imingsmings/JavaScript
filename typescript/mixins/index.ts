// type Constructor = new (...args: any[]) => {}

// class Sprite {
//     name = '';
//     x = 0;
//     y = 0;

//     constructor(name: string) {
//         this.name = name
//     }
// }

// function Scale<TBase extends Constructor>(Base: TBase) {
//     return class Scaling extends Base {
//         _scale = 1;

//         set scale(scale: number) {
//             this._scale = scale
//         }

//         get scale(): number {
//             return this._scale
//         }
//     }
// }

// const EightBitSprite = Scale(Sprite)
// const flappySprite = new EightBitSprite("Bird");
// flappySprite.scale = 0.8

// class Position {
//     public x = 0;
//     public y = 0;

//     setPos(x: number, y: number) {
//         this.x = x;
//         this.y = y
//     }
// }

// type GConstructor<T = {}> = new (...args: any[]) => T

// type Positionable = GConstructor<{ setPos: (x: number, y: number) => void}>;

// function Jumpable<TBase extends Positionable>(Base: TBase) {
//     return class Jumpable extends Base {
//         jump() {
//             this.setPos(10, 20)
//         }
//     }
// }

// const PositionClass = Jumpable(Position)
// const pos = new PositionClass()
// console.log(pos);

// Each mixin is a traditional ES class
class Jumpable {
  jump() {}
}
 
class Duckable {
  duck() {}
}
 
// Including the base
class Sprite {
  x = 0;
  y = 0;
}
 
// Then you create an interface which merges
// the expected mixins with the same name as your base
interface Sprite extends Jumpable, Duckable {}
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);
 
let player = new Sprite();
player.jump();
console.log(player.x, player.y);
 
// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

function base<T>() {
    class Base {
      static prop: T;
    }
    return Base;
  }
   
function derived<T>() {
    class Derived extends base<T>() {
      static anotherProp: T;
    }
    return Derived;
}
   
class Spec extends derived<string>() {}
   
// Spec.prop; // string
// Spec.anotherProp; // string

