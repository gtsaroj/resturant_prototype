// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce<T extends Function>(cb: T, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }