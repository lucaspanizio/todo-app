import { Feather as Icon } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
`;

export const Background = styled.View`
  ${({ theme: { colors } }) => css`
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid ${colors.gray400};
    background-color: ${colors.danger};
  `}
`;

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray500};
    border: 1px solid ${colors.gray400};

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    gap: 16px;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
  `}
`;

export const CheckBox = styled.TouchableOpacity<{ checked: boolean }>`
  ${({ theme: { colors }, checked }) => css`
    width: 24px;
    height: 24px;
    border: 2px solid ${colors.blue};
    border-radius: 9999px;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    ${checked &&
    css`
      border: none;
      background-color: ${colors.purpleDark};
    `}
  `}
`;

export const Title = styled.Text<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    flex: 1;
    color: ${theme.colors.gray100};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};

    ${checked &&
    css`
      text-decoration: line-through;
      color: ${theme.colors.gray300};
    `}
  `}
`;

export const CheckIcon = styled(Icon as React.ComponentType<any>).attrs(() => ({
  name: 'check',
  size: 18,
}))`
  color: ${({ theme }) => theme.colors.gray100};
`;

export const TrashIcon = styled(Icon as React.ComponentType<any>).attrs(() => ({
  name: 'trash-2',
  size: 24,
}))``;
