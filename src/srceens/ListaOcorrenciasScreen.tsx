import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { colors, spacing } from "../styles/theme";
import OccurrenceCard from "../components/OccurrenceCard";

export default function ListaOcorrenciasScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header titulo="Lista de Ocorrências" subtitulo="Exemplos Iniciais" />
            <OccurrenceCard 
                titulo="Buraco na rua"
                descricao="Foi encontrado buraco que pode causar acidentes"
                local="Bairros" />
            
            <OccurrenceCard 
                titulo="Buraco na rua"
                descricao="Foi encontrado buraco que pode causar acidentes"
                local="Bairros" />
           
            <OccurrenceCard 
                titulo="Buraco na rua"
                descricao="Foi encontrado buraco que pode causar acidentes"
                local="Bairros" />
         
            <OccurrenceCard 
                titulo="Buraco na rua"
                descricao="Foi encontrado buraco que pode causar acidentes"
                local="Bairros" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: spacing.lg,
        flexGrow: 1,
    },

});