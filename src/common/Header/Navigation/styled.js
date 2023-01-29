import styled from "styled-components";
import { ReactComponent as Video } from "./Video.svg";
import { NavLink } from "react-router-dom";

export const MainWrapper = styled.div`
  background: ${({ theme }) => theme.colors.woodsmoke};

`;

export const Wrapper = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.black};
  min-height: 94px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 590px) {
    min-height: 142px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  max-width: 300px;

  @media (max-width: 425px) {
    gap: 10px;
    width: 110px;
  }
`;

export const Icon = styled(Video)`
  height: 40px;
  width: 40px;
  border-radius: 0px;

  @media (max-width: 425px) {
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

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 13px;
    width: fit-content;   
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
  width: 220px;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    width: fit-content;
  }
`;

export const MenuItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white}; 
  padding: 8px 24px;
  width: 115px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  max-width: 300px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    border-radius: 29px;
    width: fit-content;
  }
`;

export const Search = styled.p`
  width: 432px;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 33px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: 425px) {
    height: 44px;
    max-width: 70%;
    position: relative;
    bottom: 0px;
  }
`;
