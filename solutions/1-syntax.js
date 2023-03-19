// BEGIN (write your solution here)
export const getWeekends = (a) => {
    switch (a) {
        case 'long':
            return ['saturday', 'sunday'];
        case 'short':
            return ['sat', 'sun'];
        default:
            return ['saturday', 'sunday'];
    }
}
// END
