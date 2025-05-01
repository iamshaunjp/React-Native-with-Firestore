import { addDoc, collection, getDocs } from "firebase/firestore"
import { createContext, useEffect, useState } from "react"
import { db } from "../firebaseConfig"

export const GoalsContext = createContext()

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([])

  async function fetchGoals() {
    const snapshot = await getDocs(collection(db, 'goals'))

    const documents = snapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id}
    })

    setGoals(documents)
  }

  async function fetchGoalById() {

  }
  
  async function createGoal(goalData) {
    console.log(goalData)
    await addDoc(collection(db, 'goals'), goalData)
  }

  async function deleteGoal() {

  }

  async function updateGoal() {

  }

  useEffect(() => {
    fetchGoals()
  }, [])

  return (
    <GoalsContext.Provider 
      value={{ goals, fetchGoals, fetchGoalById, createGoal, deleteGoal, updateGoal }}
    >
      {children}
    </GoalsContext.Provider>
  )
}