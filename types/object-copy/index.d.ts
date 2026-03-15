/**
 * Copy static properties, prototype properties, and descriptors
 * from one object to another.
 *
 * @param receiver - The destination object
 * @param provider - The source object
 * @param omit - Properties to exclude
 * @param fn - Filter function; return false to skip a property
 * @returns The modified receiver object
 */
declare function copy<T extends object>(
    receiver: T,
    provider: object,
    omit?: string | string[],
    fn?: (key: string) => boolean,
): T;

declare namespace copy {
    function has(obj: object, key: string): boolean;
}

export = copy;
