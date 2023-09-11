import { useContext, useEffect, useState } from 'react'
import { TaskListRouter } from './router'
import { UserProvider } from './context/userProvider'
import { UserContext } from './context/userContext'


export const TaskListApp = () =>  {
  return (
    <>
    <UserProvider>
      <TaskListRouter >
        <h1>Task List App</h1>
      </TaskListRouter>
    </UserProvider>
    </>
  )
}

