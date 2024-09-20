export const EXAMPLE_ENUM = ["l", "u", "n", "c", "h", "b", "o", "x"] as const;

export type ExampleEnum = (typeof EXAMPLE_ENUM)[number];
