import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
};

const variants = {
  primary: 'bg-indigo-600',
  secondary: 'bg-slate-900',
  danger: 'bg-red-500',
};

export function AppButton({ title, onPress, disabled = false, variant = 'primary' }: Props) {
  return (
    <TouchableOpacity
      className={`rounded-2xl p-4 ${disabled ? 'bg-slate-300' : variants[variant]}`}
      disabled={disabled}
      onPress={onPress}
    >
      <Text className="text-center font-extrabold text-white">{title}</Text>
    </TouchableOpacity>
  );
}
