export const addProp = (prop: string, index: number): string => (
    Object.keys(prop)[index].split('').reduce((acc, v) =>
        acc + (v.toLowerCase() !== v ? '-' + v.toLowerCase() : v), '') + `: ${prop}`
);
