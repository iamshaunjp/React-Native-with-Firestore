import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGoals } from '../../hooks/useGoals'

const Goals = () => {
  const { goals } = useGoals()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Goals</Text>

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable>
            <View style={styles.goal}>
              <Text style={{margin: 16}}>{item.goal}</Text>
              <View style={[styles.progress, { width: `${item.progress}%` }]} />
            </View>
          </Pressable>
        )}
      />
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
})
