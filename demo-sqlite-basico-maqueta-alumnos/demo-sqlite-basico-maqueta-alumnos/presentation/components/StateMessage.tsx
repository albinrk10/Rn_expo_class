import { Text, View } from 'react-native';

type Props = {
  type: 'info' | 'error' | 'success';
  message: string;
};

const boxStyles = {
  info: 'border-indigo-200 bg-indigo-50',
  error: 'border-red-200 bg-red-50',
  success: 'border-emerald-200 bg-emerald-50',
};

const textStyles = {
  info: 'text-indigo-700',
  error: 'text-red-700',
  success: 'text-emerald-700',
};

export function StateMessage({ type, message }: Props) {
  return (
    <View className={`rounded-2xl border p-4 ${boxStyles[type]}`}>
      <Text className={`text-center font-bold ${textStyles[type]}`}>{message}</Text>
    </View>
  );
}
