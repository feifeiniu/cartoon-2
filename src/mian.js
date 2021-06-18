const string = `
.container *{
    margin: 0;padding: 0;box-sizing: border-box;
}
.container *::after {
    margin: 0;padding: 0;box-sizing: border-box;
}
.container *::before {
    margin: 0;padding: 0;box-sizing: border-box;
}
.container{
    display: flex;
    justify-content: center ; 
    align-items: center;
}
.cartoon{ 
    --skin:#fca;
    --cap-light:#369;
    --cap-dark:#258;
    --cap-lid:#666;
    --skin-dark:#fb9;
    position: relative;
    width: 800px;;
    height: 800px;;
    background: #58b8;   
}
@media (max-width: 400px) {
    .cartoon{ 
    width: 300px;
    height: 300px;
}
}
.eyes{ 
    position: absolute;
    width: 200px;
    height: 200px;
    top: 308px;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image:
        linear-gradient(transparent 20%,var(--skin) 0 40%,black 0 41.5%,transparent 0),
        radial-gradient(circle at 45% 50%,black 6%,transparent 0),
        radial-gradient(circle at 75% 50%,black 5%,transparent 0),
        radial-gradient(circle at 35% 50%,white 20%,black 0 21.5%,transparent 0),
        radial-gradient(circle at 65% 50%,white 20%,black 0 21.5%,transparent 0) ;
        background-position: center center;
        background-size: 58% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%;
        background-repeat: no-repeat;
        z-index: 5;
}
@media (max-width: 400px) {
    .eyes{  
    width: 75px;
    height: 75px;
    top: 108px;
    left: 50%;
}
}
.face{
    position: absolute;
    width: 180px;
    height: 200px;
    background: var(--skin);
    background-image: radial-gradient(
        circle at 50% 100%,rgba(0,0,0,0.1) 39%,transparent 0);
    border: 0.75vmin solid ;
    border-bottom: 1vmin solid ;
    border-top-color: var(--skin);
    border-left:0.1vmin solid var(--skin);
    border-radius: 100%/120% 120% 80% 80%;
    transform:translate(-50%,0)  rotate(-16deg);
    top: 233px;
    left: 59%;
    margin-left: -100px;
    z-index: 4;
} 
@media (max-width: 400px) {
    .face{
    width: 67px;
    height: 75px;
    top: 82px;
    left: 80%;
} 
}
.nose{
   position: absolute;
   width: 46px ; 
   height: 33px;
   background: var(--skin);
   background-image: linear-gradient(to right,transparent,var(--skin-dark));
   border: 0.66vmin solid;
   border-right: 0.75vmin solid;
   border-left: 0.5vmin solid var(--skin);
   border-radius: 120% 80% 90% 100%/100%;
   transform:translate(-50%,0)  rotate(-15deg);
   top: 315px;
   left: 65%;
   margin-left: -100px;
   z-index: 6;
}
@media (max-width: 400px) {
    .nose{
   width: 17px ; 
   height: 13px;
   top: 112px;
   left: 85%;
}}
.ear{
    position: absolute;
    width: 60px;
    height: 83px;
    border-radius: 100%/80% 80% 120% 125%;
    border: 0.75vmin solid;
    border-right: 1.5vmin solid var(--skin);
    background: var(--skin);
    transform:translate(-50%,0)  rotate(-3deg);
    top: 287px;
    left: 47%;
    margin-left: -100px;
    z-index: 6;
    }
    @media (max-width: 400px) {
        .ear{
    width: 23px;
    height: 31px;
    top: 102px;
    left: 69%;
    }}       
.ear::before{
    position: absolute;
    content: ''; 
    width: 35px;
    height: 48px;         
    border :1.25vmin solid transparent;
    border-top: 0.75vmin solid;
    border-right: 0.5vmin solid;
    border-radius: 50%;
    top: 12px;
    left: 108px;
    margin-left: -100px;
    box-shadow: inset -1.5vmin 2vmin 0 -0.5vmin var(--skin-dark);
    z-index:5; 
}
@media (max-width: 400px) {
    .ear::before{
    width: 13px;
    height: 18px;         
    top: 5px;
    left: 102px;
}}
.ear::after{
    position: absolute;
    content: ''; 
    width: 15px;
    height: 20px;         
    border :0.75vmin solid ;
    border-bottom: 0.25vmin solid transparent;
    border-right: 0.75vmin solid transparent;
    border-radius: 50%;
    top: 44px;
    left: 125px;
    margin-left: -100px;
    transform: rotate(30deg);
    box-shadow: -1vmin -0.25vmin 0 0.5vmin var(--skin-dark);
    z-index:5; 
}@media (max-width: 400px) {
    .ear::after{
    width: 5.5px;
    height: 7.5px;         
    top: 17px;
    left: 108px;
}}
.ear.ear-back{
    display: flex;
    border-left: 0.75vmin solid;
    transform: scaleX(-1) rotate(-10deg);
    left: 524px;
    background-image: linear-gradient(to right,transparent,var(--skin-dark)20%);
    z-index: 1; 
}
@media (max-width: 400px) {
    .ear.ear-back{
    left: 257px;
}}
.neck{
    position: absolute;
    width: 94px;
    height: 83px;
    border-left: 1vmin solid;
    border-right: 0.75vmin solid ;
    background: var(--skin);
    transform: translate(-50%,0);
    top: 370px;
    left: 53%;
    margin-left: -100px;
    background-image: radial-gradient(circle at 83% 25%,var(--skin-dark) 53%,transparent 0);
    z-index: 3; 
}@media (max-width: 400px) {
    .neck{
    width: 39px;
    height: 31px;
    top: 136px;
    left: 76%;
}}
.forehead{
    position: absolute;
    width: 200px;
    height: 182px;
    background: var(--skin);
    border: 0.75vmin solid;
    border-radius: 50%;
    transform: translate(-50%,0);
    top: 171px;
    left: 58%;
    margin-left: -100px;
    z-index:2; 
}@media (max-width: 400px) {
    .forehead{
    width: 75px;
    height: 68px;
    top: 66px;
    left: 80%;
}}
.mouth{
    position: absolute;
    width: 93px;
    height: 35px;
    border: 1.25vmin solid transparent;
    border-bottom: 0.5vmin solid;
    border-right :0.5vmin solid transparent;
    border-radius: 50%;
    top: 353px;
    left: 56%;
    margin-left: -100px;
    transform: rotate(10deg);
    z-index:5; 
} 
@media (max-width: 400px) {
    .mouth{
    width: 35px;
    height: 13px;
    top: 129px;
    left: 77%;
} }
.mouth::after{ 
    position: absolute;
    content: ''; 
    width: 35px;
    height: 25px;         
    border :0.25vmin solid transparent;
    border-left: 0.75vmin solid;
    border-radius: 50%;
    top: 12px;
    left: 126%;
    margin-left: -100px;
    transform: rotate(15deg);
    z-index:5; 
}
@media (max-width: 400px) {  
.mouth::after{ 
    width: 13px;
    height: 9px;         
    top: 2px;
    left: 100px;
}}
.cap{
    position: absolute;
    width:308px ;
    height:70px ;
    border: 0.75vmin solid;
    border-radius: 80% 125% 125% 80%/100%;
    transform: rotate(-25deg);
    top:224px ;
    left:237px ;
    border-left: 1.5vmin solid transparent;
    border-right: 1.25vmin solid transparent; 
    border-bottom: 0.125vmin solid transparent;
    z-index:6; 
} 
@media (max-width: 400px) { 
    .cap{
    width:115px ;
    height:26px ;
    top:79px ;
    left:92px ;
} }
.cap-lid{
    background: var(--cap-lid);
    background-image: linear-gradient(45deg,transparent 0%,var(--cap-lid));
    border-right: 1.25vmin solid;
    border-bottom: 0.5vmin solid;
    z-index: 1;
}

.cap-top{
    position: absolute;
    width:195px ;
    height:105px ;
    border: 0.75vmin solid;
    border-radius: 120% 100% 0 0;
    border-bottom: 0vmin solid transparent ;
    transform: rotate(-26deg);
    top:146px ;
    left:235px ;
    background-image: 
    linear-gradient(var(--cap-light),var(--cap-dark) 92%, transparent 0),
    linear-gradient(5deg, transparent 15.5%,var(--cap-dark) 0),
    linear-gradient(-10deg,transparent 22%,var(--cap-dark) 0);
    z-index:6; 
}
@media (max-width: 400px) {
    .cap-top{
    width:68px ;
    height:39px ;
    top:52px ;
    left:92px ;
}}
.eyebrow{
    position: absolute;
    width:95px ;
    height:73px ;
    border-radius: 100%/50%;
    box-shadow: 1vmin -4vmin 0 -1.5vmin;
    transform: rotate(-15deg);
    top:264px ;
    left:311px ;
    z-index: 5;
}
@media (max-width: 400px) {
    .eyebrow{
    
    width:35px ;
    height:35px ;

    top:92px ;
    left:122px ;
  
}}
@keyframes wave{
        0%{
            transform:translateY(-25px) ;
        }
        75%{
            transform:translateY(5px) ;
        }
      
        100%{
            transform:translateY(0) ;
        }
    }
.eyebrow:hover{
    animation:wave 100ms infinite ease;
}
.eyebrow + .eyebrow{
    transform: scaleX(-1)rotate(-4deg);
    left: 397px;
    top: 256px;
    height: 73px;
    width: 83px;
}
@media (max-width: 400px) {
    .eyebrow + .eyebrow{
   
    left: 150px;
    top: 89px;
    height: 35px;
    width: 34px;
}
}
`
let n=1
demo.innerHTML = string.substr(0,n)
demo2.innerText = string.substr(0,n)
console.log(n)

let id =window.setInterval(myCallback,10)
function myCallback(){
    n += 1
    if(n>string.length){
        window.clearInterval(id)
        return
    }
    console.log(n+':'+string.substr(0,n))
    demo.innerHTML = string.substr(0,n)
    demo2.innerText = string.substr(0,n)
    demo2.scrollTop = demo2.scrollHeight
}

btnPause.onclick =()=>{
    window.clearInterval(id)
}
btnPlay.onclick=() =>{
     id =window.setInterval(myCallback,10)
    myCallback()
}
btnSlow.onclick=()=>{
    window.clearInterval(id)
     id =window.setInterval(myCallback,300)
    myCallback()
}
btnNormal.onclick=()=>{
    window.clearInterval(id)
     id =window.setInterval(myCallback,150)
    myCallback()
}
btnFast.onclick=()=>{
    window.clearInterval(id)
     id =window.setInterval(myCallback,0)
    myCallback()
}