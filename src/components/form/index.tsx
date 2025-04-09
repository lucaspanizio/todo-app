import { useTheme } from 'styled-components/native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTask } from '@/store/tasks';
import { useState } from 'react';
import * as S from './styles';

export const Form = () => {
  const [description, setDescription] = useState('');
  const { addTask } = useTask();
  const { colors } = useTheme();

  function handleAddTask() {
    if (description.trim() !== '') {
      addTask(description);
      setDescription('');
    }
  }

  return (
    <S.Container>
      <S.Input
        value={description}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
        onSubmitEditing={handleAddTask}
        onChangeText={setDescription}
        returnKeyType="done"
      />

      <S.Button onPress={handleAddTask}>
        <Icon name="plus-circle" color={colors.gray100} size={24} />
      </S.Button>
    </S.Container>
  );
};
