import "./App.scss"
import p_img8 from "./Assets/p_img8.png"
import p_img1 from "./Assets/p_img1.png"
import p_img28 from "./Assets/p_img28.png"
import p_img31 from "./Assets/p_img31.png"
import p_img34 from "./Assets/p_img34.png"
import p_img45 from "./Assets/p_img45.png"
import p_img46 from "./Assets/p_img46.png"
import p_img48 from "./Assets/p_img48.png"

function App() {
  const images = [
    {
      url: p_img8,
      Name:"Mens shirt",
      Price:1020
      
    },
    {
      url: p_img1,
      Name:"Womens shirt",
      Price:850
      
    }, {
      url: p_img28,
      Name:"Mens shirt",
      Price:980
      
    }, {
      url: p_img31,
      Name:"Mens shirt",
      Price:680
      
    },
    {
      url: p_img34,
      Name:"womens shirt",
      Price:1250
      
    },
    {
      url: p_img45,
      Name:"womens shirt",
      Price:970
      
    },
    {
      url: p_img46,
      Name:"womens shirt",
      Price:1200
      
    },
    {
      url: p_img48,
      Name:"womens shirt",
      Price:650
      
    },
  ]
  return (
    <div className="App">
    <h1>Our product</h1>
    <div className="box-container">
      {images.map((item,index)=> <div key={index} className="box-item">
        <ul className="item-container">
        <img src={item.url} alt="" className="card-image" />
           <h4> {item.Name}</h4>
           <span>{item.Price}</span>
        </ul>
          
          </div>)}
    </div>
    </div>
  );
}

export default App;
