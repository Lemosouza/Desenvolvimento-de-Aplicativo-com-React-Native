import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSize, spacing } from '../styles/theme';

type HeaderProps = {
    titulo: string;
    subtitulo?: string;
};

export default function Header({ titulo, subtitulo }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <View style={styles.divisor} />
            {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.lg,
        alignItems: 'center',
    },
    titulo: {
        fontSize: fontSize.xl,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        letterSpacing: 0.3,
    },
    divisor: {
        width: 36,
        height: 3,
        backgroundColor: colors.primary,
        borderRadius: 2,
        marginTop: spacing.xs,
        marginBottom: spacing.xs,
    },
    subtitulo: {
        fontSize: fontSize.sm,
        color: colors.textLight,
        textAlign: 'center',
        lineHeight: 20,
    },
});