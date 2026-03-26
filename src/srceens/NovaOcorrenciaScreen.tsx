import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fontSize, spacing, radius } from '../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';

export default function NovaOcorrenciaScreen() {
    return (
        <View style={styles.container}>
            <Header titulo="Nova Ocorrência" />
            <View style={styles.formBox}>
                <Text style={styles.label}>Titulo</Text>
                <View style={styles.fakeInput}>
                    <Ionicons name="create-outline" size={18} color={colors.textLight} />
                    <Text style={styles.fakeText}>Ex: Buraco na Rua</Text>
                </View>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.label}>Titulo</Text>
                <View style={styles.fakeInput}>
                    <Ionicons name="create-outline" size={18} color={colors.textLight} />
                    <Text style={styles.fakeText}>Descreva</Text>
                </View>

                <Text style={styles.label}>Localização</Text>
                <View style={styles.fakeInput}>
                    <Ionicons name="create-outline" size={18} color={colors.textLight} />
                    <Text style={styles.fakeText}>Gps</Text>
                </View>

                <Text style={styles.label}>Foto do Ocorrido</Text>
                <View style={styles.fakeInput}>
                    <Ionicons name="create-outline" size={18} color={colors.textLight} />
                    <Text style={styles.fakeText}>Camera será integrada</Text>
                </View>
            </View>
        </View>
    );
}


























const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,
        justifyContent: 'flex-start',
    },
    formBox: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        padding: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.md,
    },
    label: {
        fontSize: fontSize.md,
        fontWeight: 'bold',
        color: colors.text,
        marginTop: spacing.sm,
        marginBottom: spacing.xs,
    },
    fakeInput: {
        backgroundColor: '#eef2ff',
        borderRadius: radius.md,
        padding: spacing.sm + 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fakeText: {
        marginLeft: spacing.xs,
        color: colors.textLight,
        fontSize: fontSize.sm,
    },
});