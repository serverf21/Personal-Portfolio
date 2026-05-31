import type { StaticImageData } from 'next/image';

declare module '*.png' {
  const value: StaticImageData;
  export default value;
}

declare module '*.jpg' {
  const value: StaticImageData;
  export default value;
}

declare module '*.jpeg' {
  const value: StaticImageData;
  export default value;
}

declare module '*.webp' {
  const value: StaticImageData;
  export default value;
}

declare module '*.gif' {
  const value: StaticImageData;
  export default value;
}

declare module '*.svg' {
  const value: StaticImageData;
  export default value;
}
