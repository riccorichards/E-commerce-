import { css } from "styled-components";

export const laptopDevice = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const tabletDevice = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};
export const largeMobileDevice = (props) => {
  return css`
    @media only screen and (max-width: 430px) {
      ${props}
    }
  `;
};

export const mobileDevice = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
