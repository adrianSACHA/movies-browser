import styled from "styled-components"; 

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 30px 12px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 0px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    margin: 0px 6px;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 600;
  margin: 0px 6px;
`;