import styled from "@emotion/styled";

const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #6366f1;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
  margin: 32px auto;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Loader = () => <Spinner role="status" aria-label="Loading" />;

