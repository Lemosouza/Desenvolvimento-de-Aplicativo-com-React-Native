import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import { colors, fontSize, radius, spacing, shadow } from '../styles/theme';
import { Ocorrencia } from '../../App';
import { mostrarToast } from '../components/ToastMensagem';

type Props = {
    adicionarOcorrencia: (novaOcorrencia: Omit<Ocorrencia, 'id'>) => void;
};

export default function NovaOcorrenciaScreen({ adicionarOcorrencia }: Props) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [tentouSalvar, setTentouSalvar] = useState(false);

    const tituloInvalido = tentouSalvar && !titulo.trim();
    const descricaoInvalida = tentouSalvar && !descricao.trim();
    const localInvalido = tentouSalvar && !local.trim();

    function salvarOcorrencia() {
        setTentouSalvar(true);

        if (!titulo.trim() || !descricao.trim() || !local.trim()) {
            mostrarToast('error', 'Erro ao salvar', 'Preencha todos os campos antes de continuar.');
            return;
        }

        adicionarOcorrencia({
            titulo: titulo.trim(),
            descricao: descricao.trim(),
            local: local.trim(),
        });

        mostrarToast('success', 'Ocorrência cadastrada', 'A ocorrência foi salva com sucesso.');

        setTitulo('');
        setDescricao('');
        setLocal('');
        setTentouSalvar(false);
    }

    return (
        <View style={styles.container}>
            <Header
                titulo="Nova Ocorrência"
                subtitulo="Preencha os dados abaixo para cadastrar uma nova ocorrência."
            />

            <View style={styles.formBox}>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={[styles.input, tituloInvalido && styles.inputErro]}
                    placeholder="Ex.: Buraco na avenida principal"
                    placeholderTextColor={colors.textLight}
                    value={titulo}
                    onChangeText={setTitulo}
                />
                {tituloInvalido && <Text style={styles.erroTexto}>Campo obrigatório</Text>}

                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.inputMaior, descricaoInvalida && styles.inputErro]}
                    placeholder="Descreva o problema encontrado"
                    placeholderTextColor={colors.textLight}
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                />
                {descricaoInvalida && <Text style={styles.erroTexto}>Campo obrigatório</Text>}

                <Text style={styles.label}>Local</Text>
                <TextInput
                    style={[styles.input, localInvalido && styles.inputErro]}
                    placeholder="Ex.: Centro"
                    placeholderTextColor={colors.textLight}
                    value={local}
                    onChangeText={setLocal}
                />
                {localInvalido && <Text style={styles.erroTexto}>Campo obrigatório</Text>}
            </View>

            <CustomButton titulo="Salvar Ocorrência" onPress={salvarOcorrencia} />
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
    formBox: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        padding: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.md,
        ...shadow.card,
    },
    label: {
        fontSize: fontSize.sm,
        fontWeight: '600',
        color: colors.text,
        marginTop: spacing.sm,
        marginBottom: spacing.xs,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    input: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.sm + 2,
        fontSize: fontSize.md,
        color: colors.text,
    },
    inputErro: {
        borderColor: colors.danger,
        backgroundColor: colors.dangerLight,
    },
    inputMaior: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    erroTexto: {
        fontSize: fontSize.sm,
        color: colors.danger,
        marginTop: 3,
    },
});