import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, fontSize, radius, spacing, shadow } from '../styles/theme';

type OccurrenceCardProps = {
    id: string;
    titulo: string;
    descricao: string;
    local: string;
    onRemover: (id: string) => Promise<void>;
    onEditar: (
        id: string,
        dadosAtualizados: {
            titulo: string;
            descricao: string;
            local: string;
        }
    ) => Promise<void>;
};

export default function OccurrenceCard({
    id,
    titulo,
    descricao,
    local,
    onRemover,
    onEditar,
}: OccurrenceCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.faixaLateral} />

            <View style={styles.conteudo}>
                <View style={styles.topo}>
                    <Ionicons name="alert-circle-outline" size={20} color={colors.primary} />
                    <Text style={styles.titulo} numberOfLines={1}>{titulo}</Text>
                </View>

                <Text style={styles.descricao} numberOfLines={3}>{descricao}</Text>

                <View style={styles.rodape}>
                    <View style={styles.localBox}>
                        <Ionicons name="location-outline" size={15} color={colors.textLight} />
                        <Text style={styles.local}>{local}</Text>
                    </View>

                    <View style={styles.acoes}>
                        <TouchableOpacity
                            style={styles.botaoEditar}
                            onPress={() => onEditar(id, { titulo: titulo + ' (editado)', descricao, local })}
                        >
                            <Text style={styles.botaoEditarTexto}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botaoExcluir}
                            onPress={() => onRemover(id)}
                        >
                            <Text style={styles.botaoExcluirTexto}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        marginBottom: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
        flexDirection: 'row',
        overflow: 'hidden',
        ...shadow.card,
    },
    faixaLateral: {
        width: 4,
        backgroundColor: colors.primary,
    },
    conteudo: {
        flex: 1,
        padding: spacing.md,
    },
    topo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    titulo: {
        fontSize: fontSize.md,
        fontWeight: '600',
        color: colors.text,
        marginLeft: spacing.xs, // 👈 substitui o gap
        flex: 1,
    },
    descricao: {
        fontSize: fontSize.sm,
        color: colors.textLight,
        lineHeight: 20,
        marginBottom: spacing.sm,
    },
    rodape: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    localBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    local: {
        fontSize: fontSize.sm,
        color: colors.textLight,
        marginLeft: 3,
    },
    acoes: {
        flexDirection: 'row',
        gap: spacing.sm,
    },
    botaoEditar: {
        paddingVertical: 4,
        paddingHorizontal: spacing.sm,
        borderRadius: radius.sm,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    botaoEditarTexto: {
        fontSize: fontSize.sm,
        color: colors.primary,
        fontWeight: '600',
    },
    botaoExcluir: {
        paddingVertical: 4,
        paddingHorizontal: spacing.sm,
        borderRadius: radius.sm,
        borderWidth: 1,
        borderColor: colors.danger,
    },
    botaoExcluirTexto: {
        fontSize: fontSize.sm,
        color: colors.danger,
        fontWeight: '600',
    },
});