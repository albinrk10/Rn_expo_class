import { Text, TextInput, TextInputProps, View } from 'react-native';

type Props = TextInputProps & {
  label: string;
};

export function AppInput({ label, ...props }: Props) {
  return (
    <View className="mb-4">
      <Text className="mb-2 font-bold text-slate-700">{label}</Text>
      <TextInput
        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900"
        placeholderTextColor="#94a3b8"
        {...props}
      />
    </View>
  );
}
