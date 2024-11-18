declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }
// src/react-app-env.d.ts or src/global.d.ts
declare module '*.svg' {
  import { ReactComponent as ReactComponent } from 'react';
  export { ReactComponent };
  const src: string;
  export default src;
}