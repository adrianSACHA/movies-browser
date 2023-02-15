import styled from "styled-components";
import { ReactComponent as Video } from "./Video.svg";
import { Link, NavLink } from "react-router-dom";

export const MainWrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    height: 142px;
  }
`;

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.breakpoints.desktop}px;
  background: ${({ theme }) => theme.colors.black}px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 19px;
  margin: 0 16px;
  transition: all;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 12px;
    margin: 0 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-content: center;
    margin: 0 8px;
    gap: 10px;
    height: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  max-width: 100%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 10px;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 5px;
    max-width: 100%;
    height: auto;
  }
`;

export const Icon = styled(Video)`
  height: 40px;
  width: 40px;
  border-radius: 0px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 30px;
    width: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    height: 17px;
    width: 17px;
  }
`;

export const Text = styled.p`
  width: 168px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  text-align: left;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 19px;
    width: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 13px;
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
  text-align: center;
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: inherit;
    font-size: 12px;
    line-height: 18px;
    width: fit-content;
    margin: 0;
    gap: 10px;
  }
`;

export const MenuItemLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: bottom;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 24px;
  margin: -5px 0;
  width: fit-content;
  border-radius: 24px;
  border: 1px solid transparent;
  transition: 0.3s;

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    padding: 8px 12px;
    width: fit-content;
    display: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    width: fit-content;
  }
`;
