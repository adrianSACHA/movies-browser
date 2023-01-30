import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: #18181b;
  margin: 0 16px 5px;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 0 16px;
  color: #7e839a;
`;

export const TagsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 16px;
`;

export const Tags = styled.div`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 1.4;
  font-weight: 400;
  background-color: rgb(228, 230, 240);
  text-align: center;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;
