import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSize, spacing, radius } from "../styles/theme";
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
            <Header titulo="App de Ocorrências"
                subtitulo="Acompanhe os registros cadastrados pela API."
            />
            <View style={styles.resumoBox}>
                <Text style={styles.resumoTitulo}>Total de Ocorrências</Text>
                <Text style={styles.numero}>
                    {totalOcorrencias}
                </Text>
            </View>

            <View style={styles.resumoBox}>
                <Text style={styles.resumoTitulo}>Última Ocorrência</Text>
                {ultimaOcorrencia ? (
                    <>
                        <Text style={styles.item}>
                            Título: {ultimaOcorrencia.titulo}
                        </Text>
                        <Text style={styles.item}>
                            Local: {ultimaOcorrencia.local}
                        </Text>
                    </>
                ) : (
                    <Text style={styles.item}>
                        Nenhuma ocorrência cadastrada.
                    </Text>
                )}
            </View>

            <View style={styles.resumoBox}>
                <Text style={styles.resumoTitulo}>Resumo</Text>
                <Text style={styles.item}>
                    Usuário: alisson_nascimento
                </Text>
                <Text style={styles.item}>
                    Ocorrências: {totalOcorrencias}
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
        justifyContent: 'center',
    },
    resumoBox: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        padding: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    resumoTitulo: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: spacing.sm,
    },
    item: {
        fontSize: fontSize.md,
        color: colors.textLight,
        marginBottom: spacing.xs,
    },
    numero: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
    },

});