import styled from "styled-components";
import { ReactComponent as Video } from "./Video.svg";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin: 0;
    gap: 5px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  max-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 10px;
    width: 110px;
    height: 40px;
  }
`;

export const Icon = styled(Video)`
  height: 40px;
  width: 40px;
  border-radius: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 500;
    font-size: 13px;
    width: fit-content;
  }
`;

export const Menu = styled.nav`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    width: fit-content;
    margin: 0;
    gap: 5px;
  }
`;

export const MenuItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 24px;
  width: 115px;
  border-radius: 24px;
  border: 1px solid transparent;
  max-width: 300px;
  transition: 0.3s;

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    border-radius: 29px;
    width: fit-content;
  }
`;
