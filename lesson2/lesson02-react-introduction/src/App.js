import logo from './logo.svg';
import './App.css';

// thêm 
// // 1 component
// const Category = () =>{
//   return(
//     <div>
//       <p>this is component</p>
//       <p>hihih</p>
//     </div>
//   )
// }

import Category from "./Category"

import Header from "./Header"



// 1 component

function App() {
  return (
    //JSX :JavaScript XML
    <div>
      <Header />
    
    <div className="App">
      <Category/>
      <Category/>
      <Category/>
      <Category/>
      <Category/>
      <Category/>
    </div>
    </div>
  );
}

export default App;
