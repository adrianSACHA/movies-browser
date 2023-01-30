import styled from "styled-components";
import { ReactComponent as noResultPicture } from "./noResultPicture.svg";

export const PictureWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 8px;
  };  
`;

export const Picture = styled(noResultPicture)`
  width: 668px;
  height: 508px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 176px;
    height: 134px;
  };
`;