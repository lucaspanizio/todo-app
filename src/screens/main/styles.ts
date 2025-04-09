import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 173px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

export const Logo = styled.Image.attrs({
  source: require('@/assets/logo.png'),
  resizeMode: 'contain',
})`
  width: 132px;
  height: 70px;
`;

export const Content = styled.View`
  padding: 24px;
`;
