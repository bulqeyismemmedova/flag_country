import Main from './component/Main'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error from './page/Error'
import Detail from './page/Detail'
import Layout from './layout/Layout'
import { useContext } from 'react'
import { CountryData } from './context/DataContext'



function App() {
 

  return (
    <>

      <Routes>
      <Route path='/' element={<Navigate to={'/countries'}></Navigate>}></Route>
        <Route path='/' element={<Layout/>}>
          <Route index path='/countries' element={<Main />}></Route>
          <Route path='/countries/:region' element={<Main></Main>}></Route>
          <Route path='/details/:ad' element={<Detail></Detail>}></Route>
        </Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>

    </>
  )
}

export default App