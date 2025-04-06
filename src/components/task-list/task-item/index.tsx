import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

interface TaskProps {
  data: {
    uuid: string;
    checked: boolean;
    title: string;
  };
}

export function TaskItem({ data: { uuid, checked, title } }: TaskProps) {
  const [isChecked, setIsChecked] = useState(checked);
  // const removeToDo = useToDos((context) => context.removeToDo);
  // const toggleCheckToDo = useToDos((context) => context.toggleCheckToDo);

  // function handleRemove() {
  //   removeToDo(uuid);
  // }

  // function handleCheck() {
  //   toggleCheckToDo(uuid);
  // }

  return (
    <S.Container>
      <S.CheckBox checked={isChecked} onPress={() => setIsChecked((prev) => !prev)}>
        {isChecked && <S.CheckIcon />}
      </S.CheckBox>

      <S.Title checked={isChecked} numberOfLines={3} ellipsizeMode="tail">
        {title}
      </S.Title>

      <TouchableOpacity>
        <S.TrashIcon />
      </TouchableOpacity>
    </S.Container>
  );
}
