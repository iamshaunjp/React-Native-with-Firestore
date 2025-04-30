import { createContext, useState } from "react"


export const GoalsContext = createContext()

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([])

  async function fetchGoals() {

  }

  async function fetchGoalById() {

  }
  
  async function createGoal() {

  }

  async function deleteGoal() {

  }

  async function updateGoal() {

  }


  return (
    <GoalsContext.Provider 
      value={{ goals, fetchGoals, fetchGoalById, createGoal, deleteGoal, updateGoal }}
    >
      {children}
    </GoalsContext.Provider>
  )
}