import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    padding-top: 48px;
    border-top-width: 2px;
    border-top-color: ${theme.colors.gray400};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 16px;
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.bold};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
  `}
`;
