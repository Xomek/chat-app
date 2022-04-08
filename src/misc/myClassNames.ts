import cl from "classnames";

type mclArgs = string | undefined | { [x: string]: unknown };

export const mcl = (...args: mclArgs[]) => {
   return cl(...args) ? cl(...args) : undefined;
};
