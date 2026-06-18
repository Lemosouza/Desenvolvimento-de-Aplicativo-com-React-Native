import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSize, spacing, radius, shadow } from "../styles/theme";
import Header from "../components/Header";
import { Ocorrencia } from "../../App";

type Props = {
    ocorrencias: Ocorrencia[];
};

export default function HomeScreen({ ocorrencias }: Props) {
    const totalOcorrencias = ocorrencias.length;
    const ultimaOcorrencia = ocorrencias[0];

    return (
        <View style={styles.container}>
            <Ionicons name="shield-checkmark-outline" size={40} color={colors.primary} style={styles.iconeHeader} />
            <Header
                titulo="App de Ocorrências"
                subtitulo="Acompanhe os registros cadastrados pela API."
            />

            <View style={styles.resumoBox}>
                <View style={styles.cardTopoAzul} />
                <View style={styles.cardCorpo}>
                    <Text style={styles.resumoTitulo}>Total de Ocorrências</Text>
                    <Text style={styles.numero}>{totalOcorrencias}</Text>
                </View>
            </View>

            <View style={styles.resumoBox}>
                <View style={styles.cardTopo}>
                    <Ionicons name="time-outline" size={18} color={colors.primary} />
                    <Text style={styles.resumoTitulo}>Última Ocorrência</Text>
                </View>
                {ultimaOcorrencia ? (
                    <>
                        <Text style={styles.item}>
                            <Text style={styles.itemLabel}>Título  </Text>
                            {ultimaOcorrencia.titulo}
                        </Text>
                        <Text style={styles.item}>
                            <Text style={styles.itemLabel}>Local  </Text>
                            {ultimaOcorrencia.local}
                        </Text>
                    </>
                ) : (
                    <Text style={styles.item}>Nenhuma ocorrência cadastrada.</Text>
                )}
            </View>

            <View style={styles.resumoBox}>
                <View style={styles.cardTopo}>
                    <Ionicons name="person-outline" size={18} color={colors.primary} />
                    <Text style={styles.resumoTitulo}>Resumo</Text>
                </View>
                <Text style={styles.item}>
                    <Text style={styles.itemLabel}>Usuário  </Text>
                    alisson_nascimento
                </Text>
                <Text style={styles.item}>
                    <Text style={styles.itemLabel}>Ocorrências  </Text>
                    {totalOcorrencias}
                </Text>
            </View>
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
    resumoBox: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        marginBottom: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
        ...shadow.card,
    },

    cardTopoAzul: {
        height: 4,
        backgroundColor: colors.primary,
        borderTopLeftRadius: radius.lg,
        borderTopRightRadius: radius.lg,
    },
    cardCorpo: {
        padding: spacing.md,
    },
    cardTopo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
        padding: spacing.md,
        paddingBottom: spacing.xs,
    },
    resumoTitulo: {
        fontSize: fontSize.md,
        fontWeight: '600',
        color: colors.text,
    },
    item: {
        fontSize: fontSize.md,
        color: colors.textLight,
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.xs,
        lineHeight: 22,
    },
    itemLabel: {
        fontWeight: '600',
        color: colors.text,
    },
    numero: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        paddingVertical: spacing.sm,
    },
    iconeHeader: {
    alignSelf: 'center',
    marginBottom: spacing.xs,
},
});