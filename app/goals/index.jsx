import { View, Text, StyleSheet, FlatList, Pressable, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGoals } from '../../hooks/useGoals'
import { useState } from 'react'

const Goals = () => {
  const [selected, setSelected] = useState(null)
  const { goals } = useGoals()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Goals</Text>

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelected(item)}>
            <View style={styles.goal}>
              <Text style={{margin: 16}}>{item.goal}</Text>
              <View style={[styles.progress, { width: `${item.progress}%` }]} />
            </View>
          </Pressable>
        )}
      />

      {selected && (
        <Modal animationType="slide" visible={selected !== null}>
          <View style={styles.modal}>     
            <Text style={styles.title}>{selected.goal}</Text>
            <Text>Adjust the progress of this goal:</Text>

            <View style={styles.buttonsWrapper}>
              <Pressable style={styles.btn} onPress={() => setSelected(null)}>
                <Text style={{color: 'white'}}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}

    </SafeAreaView>
  )
}

export default Goals

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  goal: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    overflow: 'hidden',
  },
  progress: {
    height: 10,
    backgroundColor: '#21cc8d',
    minWidth: 10,
    borderRadius: 2,
  },
  modal: {
    margin: 20,
    marginTop: 100,
    alignItems: 'center',
  },
  buttonsWrapper: {
    width: '80%',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  btn: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#21cc8d',
  },
})