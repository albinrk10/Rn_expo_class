import { Usuario } from "@/types/Usuario";
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
    user: Usuario;
}

export const UserCard = ({ user }: Props) => {

    const initials = user.nombre
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <View style={styles.card}>

            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
            </View>

            <Text style={styles.title}>{user.nombre}</Text>
            <Text style={styles.text}>Rol: {user.rol}</Text>

            <Text style={[
                styles.status, user.activo ? styles.active : styles.inactive
            ]}>
                {user.activo ? 'Online' : 'Offline'}
            </Text>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Ver Perfil</Text>
            </Pressable>
        </View>
    )

};

const styles = StyleSheet.create({
    card: {

        width: '100%',

        maxWidth: 260,

        alignSelf: 'center',

        paddingVertical: 28,

        paddingHorizontal: 22,

        backgroundColor: '#ffffff',

        borderRadius: 18,

        marginVertical: 10,

        borderWidth: 1,

        borderColor: '#e5e7eb',

        shadowColor: '#000',

        shadowOffset: { width: 0, height: 3 },

        shadowOpacity: 0.08,

        shadowRadius: 10,

        elevation: 4,

        alignItems: 'center',

        gap: 8,
    },
    avatar: {

        width: 78,

        height: 78,

        borderRadius: 39,

        backgroundColor: '#1da1f2',

        alignItems: 'center',

        justifyContent: 'center',

        marginBottom: 6,
    },
    avatarText: {

        color: '#ffffff',

        fontSize: 28,

        fontWeight: '700',
    },
    title: {

        fontSize: 22,

        fontWeight: '800',

        color: '#111827',

        textAlign: 'center',
    },
    text: {

        fontSize: 15,

        color: '#4b5563',

        textAlign: 'center',
    },
    status: {

        fontSize: 14,

        paddingHorizontal: 12,

        paddingVertical: 4,

        borderRadius: 999,

        overflow: 'hidden',
    },
    active: {

        color: '#15803d',

        backgroundColor: '#ecfdf5',
    },
    inactive: {

        color: '#b91c1c',

        backgroundColor: '#fef2f2',
    },
    button: {

        width: '100%',

        marginTop: 12,

        backgroundColor: '#ec008c',

        paddingVertical: 14,

        borderRadius: 10,

        alignItems: 'center',
    },
    buttonText: {

        color: '#ffffff',

        fontSize: 16,

        fontWeight: '700',
    }
});