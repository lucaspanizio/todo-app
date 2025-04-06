import { Image } from 'react-native';
import * as S from './styles';

export const EmptyItem = () => {
  return (
    <S.Container>
      <Image source={require('@/assets/clipboard.png')} />
      <S.Title>Você ainda não tem tarefas cadastradas</S.Title>
      <S.Subtitle>Crie tarefas e organize seus itens a fazer</S.Subtitle>
    </S.Container>
  );
};
