import styled, { css } from 'styled-components/native';

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

export const CheckBox = styled.TouchableOpacity<{
  checked: boolean;
}>`
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

export const Title = styled.Text<{
  checked: boolean;
}>`
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

export const CheckIcon = styled.Image.attrs({
  source: require('@/assets/check.png'),
})`
  width: 75%;
  height: 55%;
  margin-left: -2px;
`;

export const TrashIcon = styled.Image.attrs({
  source: require('@/assets/trash.png'),
})`
  width: 20px;
  height: 22px;
`;
