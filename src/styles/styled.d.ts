import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      shape: string;

      white: string;
      red: string;

      background: string;
      title: string;
      text: string;
      description: string;
    };

    image: {
      background: string;
    };
  }
}
