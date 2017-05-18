import './image_viewer.css' 
import big from '../assets/img1.jpg' 
import small from '../assets/img9.jpg' 

const imageSmall = document.createElement('img') 
imageSmall.src = small 
document.body.appendChild(imageSmall) 

const imageBig = document.createElement('img') 
imageBig.src =big  
document.body.appendChild(imageBig) 