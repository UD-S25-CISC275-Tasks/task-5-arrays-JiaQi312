/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length: number = numbers.length;
    if (length === 0) {
        return [];
    }
    return [numbers[0], numbers[length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((a_num: number): number => a_num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt: number[] = numbers.map((a_string: string): number =>
        isNaN(parseInt(a_string)) ? 0 : parseInt(a_string),
    );
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollars: string[] = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );
    const properDollars: number[] = removedDollars.map(
        (amount: string): number =>
            isNaN(parseInt(amount)) ? 0 : parseInt(amount),
    );
    return properDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions: string[] = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    const shoutUp: string[] = noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    return shoutUp;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const sum: number = words.reduce(
        (curr_sum: number, curr_word: string) =>
            curr_word.length < 4 ? (curr_sum += 1) : (curr_sum += 0),
        0,
    );
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const isItAllRGB: boolean = colors.reduce(
        (curr_status: boolean, curr_color: string) =>
            curr_color.toLowerCase() === "red" ||
            curr_color.toLowerCase() === "green" ||
            (curr_color.toLowerCase() === "blue" && curr_status),
        true,
    );
    return isItAllRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
