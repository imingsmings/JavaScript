interface Colorful {
    color: string;
}

interface Circle {
    radius?: number;
}

const circle: Colorful & Circle = { 
    color: "red",
    // radius: 42
}

// type ColorfulCircle = number & string;
// const cc: ColorfulCircle = 42;