import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCar from './components/AddCar'
import ViewCars from './components/ViewCars'
import SearchCar from './components/SearchCar'  // You need to create this
import DeleteCar from './components/DeleteCar'  // You need to create this
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddCar/>}/>
          <Route path='/search' element={<SearchCar/>}/>
          <Route path='/delete' element={<DeleteCar/>}/>
          <Route path='/view' element={<ViewCars/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App