// types/gsap.d.ts
declare module 'gsap' {
    export function to(
      target: Element | null,
      vars: { [key: string]: any }
    ): void;
    export function from(
      target: Element | ArrayLike<Element>,
      vars: { [key: string]: any }
    ): void;
  }