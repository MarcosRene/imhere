import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participants = [
    'Marcos Moura',
    'Marcos Renê',
    'Maria',
    'Maria Natalia',
    'João',
    'João Lauro',
    'Humberto',
    'Humberto Damasceno',
    'Diogo',
    'Diogo Silva',
    'Fátima',
    'Fátima Helena',
  ]

  function handleParticipantAdd() {
    console.log('Você clicou no botão adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão remover ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 12 de Março de 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
