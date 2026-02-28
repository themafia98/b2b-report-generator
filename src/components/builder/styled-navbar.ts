import styled from "@emotion/styled";

export const NavBar = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(99,102,241,0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  min-height: 64px;
  border-radius: 12px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const NavLink = styled.a<{active?: boolean}>`
  color: ${({active}) => active ? '#6366f1' : '#222'};
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  padding: 8px 0;
  border-bottom: ${({active}) => active ? '2px solid #6366f1' : 'none'};
  transition: color 0.2s, border-bottom 0.2s;
  &:hover {
    color: #4338ca;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
`;
