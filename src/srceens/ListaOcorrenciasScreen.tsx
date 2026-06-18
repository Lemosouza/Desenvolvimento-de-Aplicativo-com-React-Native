import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import OccurrenceCard from '../components/OccurrenceCard';
import { colors, fontSize, radius, spacing, shadow } from '../styles/theme';
import { Ocorrencia } from '../../App';

type Props = {
    ocorrencias: Ocorrencia[];
    carregando: boolean;
    removerOcorrencia: (id: string) => Promise<void>;
    editarOcorrencia: (
        id: string,
        dadosAtualizados: Omit<Ocorrencia, 'id' | 'slug' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    ) => Promise<void>;
};

export default function ListaOcorrenciasScreen({ carregando, ocorrencias, removerOcorrencia, editarOcorrencia }: Props) {
    return (
        <View style={styles.container}>
            <Header
                titulo="Lista de Ocorrências"
                subtitulo="As ocorrências cadastradas aparecerão abaixo."
            />

            {carregando ? (
                <View style={styles.estadoBox}>
                    <Ionicons name="reload-outline" size={32} color={colors.textLight} />
                    <Text style={styles.estadoTexto}>Carregando ocorrências...</Text>
                </View>
            ) : ocorrencias.length === 0 ? (
                <View style={styles.estadoBox}>
                    <Ionicons name="document-outline" size={32} color={colors.textLight} />
                    <Text style={styles.estadoTexto}>Nenhuma ocorrência cadastrada.</Text>
                    <Text style={styles.estadoDica}>Use a aba Nova Ocorrência para começar.</Text>
                </View>
            ) : (
                <FlatList
                    data={ocorrencias}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <OccurrenceCard
                            id={item.id}
                            titulo={item.titulo}
                            descricao={item.descricao}
                            local={item.local}
                            onRemover={removerOcorrencia}
                            onEditar={editarOcorrencia}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,
        paddingTop: spacing.xl,
    },
    estadoBox: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.lg,
        padding: spacing.xl,
        alignItems: 'center',
        gap: spacing.xs,
        ...shadow.card,
    },
    estadoTexto: {
        fontSize: fontSize.md,
        color: colors.textLight,
        textAlign: 'center',
        marginTop: spacing.xs,
    },
    estadoDica: {
        fontSize: fontSize.sm,
        color: colors.textLight,
        textAlign: 'center',
        opacity: 0.7,
    },
});