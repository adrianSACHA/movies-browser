import styled from "styled-components";
import { ReactComponent as Video } from "./Video.svg";

export const Wrapper = styled.div`
  max-width: 1368px;
  background: #18181b;
  min-height: 94px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 300px;
  justify-content: center;
  align-items: center;
  border: 1px solid white;

  @media (max-width: 590px) {
    flex-wrap: nowrap;
    height: 142px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  flex: 1;

  @media (max-width: 420px) {
    gap: 10px;
  }
`;

export const Icon = styled(Video)`
  height: 40px;
  width: 40px;
  border-radius: 0px;

  @media (max-width: 420px) {
    height: 15px;
    width: 15px;
  }
`;

export const Text = styled.p`
  width: 168px;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  text-align: left;

  @media (max-width: 420px) {
    font-weight: 500;
    font-size: 13px;
    width: 95px;
  }
`;

export const Menu = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 12px;
  width: 300px;
  flex: 1;
`;

export const MenuItem = styled.span`
  padding: 8px 24px;
  /* width: 98px;
min-height: 48px; */
  /* border: 1px solid white; */
  border-radius: 24px;
  border: 1px solid #18181b;
  max-width: 300px;


  &:hover {
    border: 1px solid white;
  }

  &:active {
    border: 1px solid white;
  }

  @media (max-width: 420px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    border-radius: 29px;
  }
`;

export const Search = styled.p`
  max-width: 432px;
  min-width: 288px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e4e6f0;
  border-radius: 33px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  color: #7e839a;
flex: 2;

  @media (max-width: 420px) {
    height: 44px;
  }
`;
