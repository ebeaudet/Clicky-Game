(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Bob Weir",image:"img/bobby.jpg"},{id:2,name:"Eric Clapton",image:"img/clapton.jpg"},{id:3,name:"David Gilmour",image:"img/gilmour.jpg"},{id:4,name:"Cap'n Trips",image:"img/jerry.jpg"},{id:5,name:"Jimi Hendrix",image:"img/jimi.jpg"},{id:6,name:"Jimmy Page",image:"img/jimmypage.jpg"},{id:7,name:"Mark Knopfler",image:"img/knopfler.jpg"},{id:8,name:"Keith Richards",image:"img/richards.jpg"},{id:9,name:"Slash",image:"img/slash.jpg"},{id:10,name:"Stevie Ray Vaughn",image:"img/stevie.jpg"},{id:11,name:"Machine Gun Trey",image:"img/trey.jpg"},{id:12,name:"Steve Vai",image:"img/vai.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(3),c=a.n(r),s=a(4),l=a(5),o=a(7),m=a(6),g=a(8);a(15);var d=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleCards(e.id)},className:"clicked"})))};a(16);var u=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},p=a(1);a(17);var h=function(e){return n.a.createElement("div",{className:"header",message:e.message,style:{backgroundColor:"gray"}},e.children)},f=(a(18),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={rockGods:p,idsClicked:[],score:0,winningscore:12,messsage:""},a.shuffleCards=function(e){var t=a.state.idsClicked;if(console.log("Clicked IT!!"),t.includes(e))return a.setState({idsClicked:[],score:0}),void alert("You broke a string! Click to play again!");if(t.push(e),t.length===a.state.rockGods.length)return a.setState({score:0,idsClicked:[]}),void alert("Rock on!!! You're a Winner!!!");a.setState({rockGods:p,idsClicked:t,score:t.length,status:" "});var i=0,n=0,r=null;for(i=p.length-1;i>0;i-=1)n=Math.floor(Math.random()*(i+1)),r=p[i],p[i]=p[n],p[n]=r},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(u,null,n.a.createElement(h,null,n.a.createElement("p",{style:{textAlign:"center"}},"Test Your Memory?"),n.a.createElement("p",{style:{textAlign:"center"}},"Try and get 12 points by clicking each image only once."),n.a.createElement("p",{style:{textAlign:"center"}},"Be careful because the images will shuffle after each click."),n.a.createElement("h2",{style:{textAlign:"center"}},"Score: ",this.state.score," | Score to meet: ",this.state.winningscore),n.a.createElement("h3",{style:{textAlign:"center",color:"red"}},this.state.message)),this.state.rockGods.map(function(t){return n.a.createElement(d,{shuffleCards:e.shuffleCards,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component));a(19);c.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1ae2bacf.chunk.js.map