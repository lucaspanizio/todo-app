import { useRef } from 'react';
import { useTheme } from 'styled-components/native';
import { Animated, PanResponder, TouchableOpacity } from 'react-native';
import { Task } from '@/store/tasks';
import * as S from './styles';

interface TaskProps {
  data: Task;
  onRemove: (uuid: string) => void;
  onToggleCheck: (uuid: string) => void;
}

export function TaskItem({ data: { uuid, completed, title }, onRemove, onToggleCheck }: TaskProps) {
  const translateX = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 10,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          Animated.timing(translateX, {
            toValue: 500,
            duration: 200,
            useNativeDriver: true,
          }).start(() => onRemove(uuid));
        } else {
          Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
        }
      },
    }),
  ).current;

  return (
    <S.Wrapper>
      <S.Background as={Animated.View}>
        <S.TrashIcon color={colors.gray100} />
      </S.Background>

      <Animated.View
        style={{ zIndex: 1, transform: [{ translateX }] }}
        {...panResponder.panHandlers}>
        <S.Container>
          <S.CheckBox checked={completed} onPress={() => onToggleCheck(uuid)}>
            {completed && <S.CheckIcon />}
          </S.CheckBox>

          <S.Title checked={completed} numberOfLines={3} ellipsizeMode="tail">
            {title}
          </S.Title>

          <TouchableOpacity onPress={() => onRemove(uuid)}>
            <S.TrashIcon color={colors.danger} />
          </TouchableOpacity>
        </S.Container>
      </Animated.View>
    </S.Wrapper>
  );
}
