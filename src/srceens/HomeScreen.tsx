import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSize, spacing, radius } from "../styles/theme";
import Header from "../components/Header";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header titulo="App de OccurrenceCard" subtitulo="Registre problemas do seu cotidiano" />
            <View style={styles.cardInfo}>
                <Ionicons name="phone-portrait-outline" size={32} color={colors.primary} />
                <Text style={styles.cardTitulo}>Projeto de Semestre</Text>
                <Text style={styles.cardTexto}>Descrição do projeto de semestre via api</Text>
            </View>
            <View style={styles.resumoBox}>
                <Text style={styles.resumoTitulo}>Resumo</Text>
                <Text style={styles.item}>• Cadastro</Text>
                <Text style={styles.item}>• Listagem</Text>
                <Text style={styles.item}>• Foto</Text>
                <Text style={styles.item}>• Localização via GPS</Text>
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
    cardInfo: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        padding: spacing.lg,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.lg,
    },
    cardTitulo: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: colors.text,
        marginTop: spacing.sm,
        marginBottom: spacing.xs,
    },
    cardTexto: {
        fontSize: fontSize.md,
        color: colors.textLight,
        textAlign: 'center',
        lineHeight: 22,
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
});