import styled, { css } from 'styled-components/native';

export const Indicators = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Indicator = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.Text<{ variant: 'total' | 'finished' }>`
  ${({ theme, variant }) => css`
    color: ${variant === 'total' ? theme.colors.blue : theme.colors.purple};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.bold};
  `}
`;

export const Badge = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-size: ${theme.fontSize.sm};
    font-family: ${theme.fontFamily.bold};
    background-color: ${theme.colors.gray400};
    padding: 2px 8px;
    border-radius: 999px;
    overflow: hidden;
    min-width: 25px;
    text-align: center;
  `}
`;
