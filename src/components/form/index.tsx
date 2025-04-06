import { useTheme } from 'styled-components/native';
import * as S from './styles';

export const Form = () => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Input placeholder="Adicione uma nova tarefa" placeholderTextColor={colors.gray300} />

      <S.Button>
        <S.PlusIcon />
      </S.Button>
    </S.Container>
  );
};
