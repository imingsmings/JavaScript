// type OptionFlags<Type> = {
//     [k in keyof Type]: boolean;
// }

// type FeatureFlags = {
//     name: string;
//     darkMode: () => void;
// }

/*
type FeatureOptions = {
    name: boolean;
    darkMode: boolean;
}
*/
// type FeatureOptions = OptionFlags<FeatureFlags>;

// type CreateMutable<Type> = {
//     -readonly [Property in keyof Type]-?: Type[Property];
// }

// type LockedAccount = {
//     readonly id: string;
//     readonly name: string;
//     age?: number;
// }
/*
type UnlockedAccount = {
    id: string;
    name: string;
    age: number;
}
*/
// type UnlockedAccount = CreateMutable<LockedAccount>;

// type MappedTypeWithNewProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

// type Getters<Type> = {
//     [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
// }

// interface Person {
//     name: string;
//     age: number;
//     location: string;
// }

/*
type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
*/
// type LazyPerson = Getters<Person>;

// type RemoveKindField<Type> = {
//     [Property in keyof Type as Exclude<Property, 'radius'>]: Type[Property]
// }

// interface CircleOptions {
//     kind: "circle";
//     radius: number;
// }

/*
type KindlessCircle = {
    kind: "circle";
}
*/
// type KindlessCircle = RemoveKindField<CircleOptions>;

// interface SquareEvent {
//     kind: "square";
//     x: number;
//     y: number;
// }

// interface CircleEvent {
//     kind: "circle";
//     radius: number;
// }

// type ShapeEvent<Events extends { kind: string}> = {
//     [E in Events as E['kind']]: (e: Event) => void
// }

/*
type Config = {
    square: (e: Event) => void;
    circle: (e: Event) => void;
}
*/
// type Config = ShapeEvent<SquareEvent | CircleEvent>;

type DBFields = {
    id: { format: 'incrementing' };
    name: { type: string; pii: string };
}

type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
}

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
