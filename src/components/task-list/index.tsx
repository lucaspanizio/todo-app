import { FlatList } from 'react-native';
import { useTask } from '@/store/tasks';
import { EmptyItem } from './empty-item';
import { TaskItem } from './task-item';
import * as S from './styles';

export const TaskList = () => {
  const { tasks, totalTasks, numberOfCompletedTasks, removeTask, toggleTask } = useTask();

  return (
    <>
      <S.Indicators>
        <S.Indicator>
          <S.Label variant="total">Criadas</S.Label>
          <S.Badge>{totalTasks}</S.Badge>
        </S.Indicator>

        <S.Indicator>
          <S.Label variant="finished">Concluídas</S.Label>
          <S.Badge>{numberOfCompletedTasks}</S.Badge>
        </S.Indicator>
      </S.Indicators>

      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        keyExtractor={(item) => item.uuid}
        ListEmptyComponent={() => <EmptyItem />}
        renderItem={({ item }) => (
          <TaskItem data={item} onRemove={removeTask} onToggleCheck={toggleTask} />
        )}
      />
    </>
  );
};
