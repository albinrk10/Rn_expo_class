import { Text, View } from 'react-native';

interface Props {
  title: string;
  description: string;
}

export function InfoCard({ title, description }: Props) {
  return (
    <View className="rounded-3xl border border-indigo-100 bg-indigo-50 p-4">
      <Text className="text-base font-black text-indigo-700">{title}</Text>
      <Text className="mt-2 text-sm leading-5 text-slate-600">{description}</Text>
    </View>
  );
}
