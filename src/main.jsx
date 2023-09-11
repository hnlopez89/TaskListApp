import React from 'react'
import ReactDOM from 'react-dom/client'
import {TaskListApp} from './TaskListApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TaskListApp />
  </BrowserRouter>,
)
