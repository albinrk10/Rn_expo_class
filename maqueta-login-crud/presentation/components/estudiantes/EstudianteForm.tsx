import { useState } from 'react';
import { View } from 'react-native';
import { EstudianteFormData } from '../../../domain/entities/Estudiante';
import { CustomTextInput } from '../shared/CustomTextInput';
import { PrimaryButton } from '../shared/PrimaryButton';

interface EstudianteFormProps {
 
  initialValues?: EstudianteFormData;
  submitLabel: string;
  onSubmit: (datos: EstudianteFormData) => void;
}


type FormErrors = Partial<Record<keyof EstudianteFormData, string>>;
const valoresVacios: EstudianteFormData = { nombre: '', correo: '', carrera: '' };


export function EstudianteForm({ initialValues = valoresVacios, submitLabel, onSubmit }: EstudianteFormProps) {
 
  const [form, setForm] = useState<EstudianteFormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  // Actualización inmutable de una propiedad calculada: nombre, correo o carrera.
  const actualizarCampo = (campo: keyof EstudianteFormData, valor: string) => {
    setForm((actual) => ({ ...actual, [campo]: valor }));
    setErrors((actuales) => ({ ...actuales, [campo]: undefined }));
  };

 
  const validar = () => {
    const nuevosErrores: FormErrors = {};
    if (form.nombre.trim().length < 3) nuevosErrores.nombre = 'Ingresa al menos 3 caracteres';
    if (!form.correo.includes('@')) nuevosErrores.correo = 'Ingresa un correo válido';
    if (!form.carrera.trim()) nuevosErrores.carrera = 'La carrera es obligatoria';
    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  
  const enviar = () => {
    if (!validar()) return;
    onSubmit({ nombre: form.nombre.trim(), correo: form.correo.trim().toLowerCase(), carrera: form.carrera.trim() });
  };

  return (
    <View>
      <CustomTextInput label="Nombre completo" placeholder="Ej. Carla Mendoza" value={form.nombre} onChangeText={(valor) => actualizarCampo('nombre', valor)} error={errors.nombre} />
      <CustomTextInput label="Correo" placeholder="alumno@idat.edu.pe" value={form.correo} onChangeText={(valor) => actualizarCampo('correo', valor)} keyboardType="email-address" autoCapitalize="none" error={errors.correo} />
      <CustomTextInput label="Carrera" placeholder="Desarrollo de Sistemas" value={form.carrera} onChangeText={(valor) => actualizarCampo('carrera', valor)} error={errors.carrera} />
      <PrimaryButton title={submitLabel} onPress={enviar} />
    </View>
  );
}
