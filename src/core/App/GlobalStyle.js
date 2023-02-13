import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        word-break: break-word;
        font-family: 'Poppins', sans-serif;
        background: ${({ theme }) => theme.colors.mercury};
        padding-bottom: 103px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 60px;
        }
    }
`;
