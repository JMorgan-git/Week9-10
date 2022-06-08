function Printer(){



    function print(text, color){
    const RESET = PREFIX + "[0m";

    const BLACK = PREFIX + "[30m";
    const RED = PREFIX + "[31m";
    const GREEN = PREFIX + "[32m";
    const YELLOW = PREFIX + "[33m";
    const BLUE = PREFIX + "[34m";
    const MAGENTA = PREFIX + "[35m";
    const CYAN = PREFIX + "[36m";
    const WHITE = PREFIX + "[37m";

    const text = "Hello";
    const color = MAGENTA;
        console.log(`${color}${text}${RESET} `)
    }
}