import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
  width: 100%;
  margin-top: -54px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    border-radius: 6px;
    padding: 16px;
    border-width: 1px;
    color: ${theme.colors.gray100};
    border-color: ${theme.colors.gray700};
    background-color: ${theme.colors.gray500};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.lg};
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: 18px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.gray700};

    color: ${theme.colors.gray100};
    background-color: ${theme.colors.blueDark};
  `}
`;
