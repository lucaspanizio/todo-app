import { FlatList } from 'react-native';
import { EmptyItem } from './empty-item';
import { TaskItem } from './task-item';
import * as S from './styles';

const TASKS = [
  { uuid: '123', checked: false, title: 'Tarefa 1' },
  { uuid: '456', checked: false, title: 'Tarefa 2' },
  { uuid: '789', checked: true, title: 'Tarefa 3' },
  { uuid: '012', checked: true, title: 'Tarefa 4' },
];

export const TaskList = () => {
  const totalTasks = TASKS.length;
  const finishedTasks = TASKS.filter((task) => task.checked).length;

  return (
    <>
      <S.Indicators>
        <S.Indicator>
          <S.Label variant="total">Criadas</S.Label>
          <S.Badge>{totalTasks}</S.Badge>
        </S.Indicator>

        <S.Indicator>
          <S.Label variant="finished">Concluídas</S.Label>
          <S.Badge>{finishedTasks}</S.Badge>
        </S.Indicator>
      </S.Indicators>

      <FlatList
        data={TASKS}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => <TaskItem data={item} />}
        ListEmptyComponent={() => <EmptyItem />}
        keyExtractor={(item: (typeof TASKS)[number]) => item.uuid}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
