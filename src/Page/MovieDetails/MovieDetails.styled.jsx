import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #5a0341;
`;

export const Button = styled.button`
  padding: 8px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #57035f;
  color: #57044c;
  font-weight: 400;
  font-size: 20px;
`;
