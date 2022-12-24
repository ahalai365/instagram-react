type ObjectKeys<T> = 
  T extends object
    ? (keyof T)[]
    : never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>;
}