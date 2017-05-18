import './image_viewer.css' 
import small from '../assets/img9.jpg' 

export default () => {
  const imageSmall = document.createElement('img') 
  imageSmall.src = small 
  document.body.appendChild(imageSmall) 
}