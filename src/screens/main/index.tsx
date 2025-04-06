import { TaskList } from '@/components/task-list';
import { Form } from '@/components/form';
import * as S from './styles';

export const Main = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo />
      </S.Header>

      <S.Content>
        <Form />
        <TaskList />
      </S.Content>
    </S.Container>
  );
};
