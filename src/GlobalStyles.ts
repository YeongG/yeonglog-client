import styled, {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

export function media(px: number) {
  return (target: any, name: any, descriptor: any) => {
    descriptor.value = function (cssValue: FlattenSimpleInterpolation) {
      return css`
        @media (max-width: ${px}px) {
          ${cssValue}
        }
      `;
    };
  };
}

export class MediaCss {
  @media(1000)
  static media1000(css: FlattenSimpleInterpolation) {
    return css;
  }
}

export const Media1000Div = styled.div`
  width: 1000px;
  margin: 0 auto;
  transition: 0.3s all;

  ${MediaCss.media1000(css`
    width: calc(100% - 20px);
  `)}
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
    }
`;
