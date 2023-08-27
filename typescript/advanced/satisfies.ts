// type Colors = "red" | "green" | "blue";
// type RGB = [red: number, green: number, blue: number];
// type ColorType = Record<Colors, string | RGB>
/**
type ColorType = {
    red: string | RGB;
    green: string | RGB;
    blue: string | RGB;
}
 */

// const palette = {
//     red: [255, 0, 0],
//     green: "#00ff00",
//     blue: [0, 0, 255]
// } satisfies ColorType

// Property 'map' does not exist on type 'string'
// const redComponent = palette.red.map((item) => item - 10)
// Property 'toUpperCase' does not exist on type 'RGB'.
// const greenComponent = palette.green.toUpperCase()

// type Colors = "red" | "green" | "blue";
// const favoriteColors = {
//     "red": "yes",
//     "green": false,
//     "blue": "kinda",
//     "platypus": false
// } satisfies Record<Colors, unknown>;

// type RGB = [red: number, green: number, blue: number];
// const palette = {
//     red: [255, 0, 0],
//     green: "#00ff00",
//     // Source has 2 element(s) but target requires 3
//     blue: [0, 0]
// } satisfies Record<string, string | RGB>;

