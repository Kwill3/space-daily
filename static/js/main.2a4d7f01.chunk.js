(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/solar-system.2542c1e8.png"},25:function(e,a,t){e.exports=t(52)},30:function(e,a,t){},31:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),l=t.n(o),c=(t(30),t(1)),i=t(2),s=t(4),m=t(3),h=t(5),u=t(12),p=t(11),d=(t(31),t(10)),v=t.n(d),E=t(14),f=(t(34),t(35),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a=this.props.handleApod;return e=a.hasOwnProperty("copyright")?a.copyright:"Public Domain",r.a.createElement("div",{className:"apod-wrapper"},r.a.createElement("h2",{className:"apod-header"},"APOD - Astronomy Picture of the Day"),r.a.createElement("p",{className:"apod-date"},a.date),r.a.createElement("div",{className:"apod-credits"},"video"===a.media_type?r.a.createElement("div",{className:"video-container"},r.a.createElement("iframe",{title:"apod-video",src:a.url,allowFullScreen:!0})):r.a.createElement("img",{src:a.hdurl,alt:"",className:"apod-img"}),r.a.createElement("p",null,"Image Credits: ".concat(e))),r.a.createElement("div",{className:"apod-content"},r.a.createElement("h3",null,a.title),r.a.createElement("p",null,a.explanation)))}}]),a}(n.Component)),C=(t(36),function(e){return r.a.createElement("form",{className:"apod-form",onSubmit:e.changeDate},r.a.createElement("p",null,"Search previous APOD posts:"),r.a.createElement("input",{type:"date",id:"prev",name:"prevDate",min:"1995-06-16",max:e.currDate}),r.a.createElement("button",{className:"search-btn"},"Search"))}),g="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).componentDidMount=Object(E.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g).then(function(e){return e.json()});case 2:a=e.sent,t.setState({apodJson:a,currentDate:a.date}),console.log(a);case 6:case"end":return e.stop()}},e)})),t.handleChangeDate=function(e){e.preventDefault();var a=e.target.elements.prevDate.value;t.setState({apodPrev:a},Object(E.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"&date=").concat(t.state.apodPrev)).then(function(e){return e.json()});case 2:a=e.sent,t.setState({apodJson:a}),console.log(a);case 5:case"end":return e.stop()}},e)})))},t.state={apodJson:{},apodPrev:"",currentDate:""},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{changeDate:this.handleChangeDate,currDate:this.state.currentDate}),r.a.createElement("hr",null),r.a.createElement(f,{handleApod:this.state.apodJson}))}}]),a}(n.Component),y=(t(37),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(){if("date"===t.props.time){var e="earth_date=".concat(t.props.date);t.handleApiCall(e)}else if("sol"===t.props.time){var a="sol=".concat(t.props.sol);t.handleApiCall(a)}else{t.handleApiCall("sol=none")}},t.handlePageClick=function(e){t.setState({currentPage:Number(e.target.id)})},t.handleApiCall=function(){var e=Object(E.a)(v.a.mark(function e(a){var n,r,o,l,c,i,s,m;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(t.props.rover,"/photos?").concat(a).concat(t.props.camera,"&api_key=DEMO_KEY")).then(function(e){return e.json()});case 2:for(n=e.sent,console.log(n),console.log("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(t.props.rover,"/photos?").concat(a).concat(t.props.camera,"&api_key=DEMO_KEY")),r=[],o=[],l=[],c=[],i=[],s=[],m=0;m<n.photos.length;m++)r.push(n.photos[m].img_src),o.push(n.photos[m].rover.name),l.push(n.photos[m].camera.name),c.push(n.photos[m].sol),i.push(n.photos[m].earth_date),s.push(n.photos[m].id);t.setState({apiUrl:r,apiRover:o,apiCamera:l,apiSol:c,apiDate:i,apiId:s});case 13:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.state={apiUrl:[],apiRover:[],apiCamera:[],apiSol:[],apiDate:[],apiId:[],currentPage:"1",imagesPerPage:12},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){for(var e,a,t,n,o,l,c=this,i=(e=this.state.apiUrl,a=this.state.apiRover,t=this.state.apiCamera,n=this.state.apiSol,o=this.state.apiDate,l=this.state.apiId,e.map(function(e,r){return[e,a[r],t[r],n[r],o[r],l[r]]})),s=this.state,m=s.currentPage,h=s.imagesPerPage,u=m*h,p=u-h,d=i.slice(p,u).map(function(e){return r.a.createElement("div",{className:"gallery",key:e[5]},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e[0]},r.a.createElement("img",{src:e[0],alt:"",width:"600",height:"400"})),r.a.createElement("div",{className:"desc"},"Rover: ",e[1],r.a.createElement("br",null),"Camera: ",e[2],r.a.createElement("br",null),"Sol: ",e[3],r.a.createElement("br",null),"Date: ",e[4]))}),v=[],E=1;E<=Math.ceil(i.length/this.state.imagesPerPage);E++)v.push(E);var f=v.map(function(e){return r.a.createElement("li",{key:e,id:e,onClick:c.handlePageClick},e)});return r.a.createElement("div",null,r.a.createElement("div",{className:"submit-btn"},r.a.createElement("button",{type:"submit",onClick:this.handleClick},"Submit")),r.a.createElement("ul",{id:"page-numbers"},f),d,r.a.createElement("ul",{id:"page-numbers"},f))}}]),a}(n.Component)),O=(t(38),t(39),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleCameraChange=function(e){t.props.onCameraChange(e.target.value)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"curiosity"===e.props.rover?r.a.createElement("select",{onChange:e.handleCameraChange,className:"curiosity-select"},r.a.createElement("option",{value:"default",disabled:!0},"Select a camera"),r.a.createElement("option",{value:""},"All Cameras"),r.a.createElement("option",{value:"&camera=fhaz"},"FHAZ - Front Hazard Avoidance Camera"),r.a.createElement("option",{value:"&camera=rhaz"},"RHAZ - Rear Hazard Avoidance Camera"),r.a.createElement("option",{value:"&camera=mast"},"MAST - Mast Camera"),r.a.createElement("option",{value:"&camera=chemcam"},"CHEMCAM - Chemistry and Camera Complex"),r.a.createElement("option",{value:"&camera=mahli"},"MAHLI - Mars Hand Lens Imager"),r.a.createElement("option",{value:"&camera=mardi"},"MARDI - Mars Descent Imager"),r.a.createElement("option",{value:"&camera=navcam"},"NAVCAM - Navigation Camera")):r.a.createElement("select",{onChange:e.handleCameraChange,className:"spirit-select"},r.a.createElement("option",{value:"default",disabled:!0},"Select a camera"),r.a.createElement("option",{value:""},"All Cameras"),r.a.createElement("option",{value:"&camera=fhaz"},"FHAZ - Front Hazard Avoidance Camera"),r.a.createElement("option",{value:"&camera=rhaz"},"RHAZ - Rear Hazard Avoidance Camera"),r.a.createElement("option",{value:"&camera=navcam"},"NAVCAM - Navigation Camera"),r.a.createElement("option",{value:"&camera=pancam"},"PANCAM - Panoramic Camera"),r.a.createElement("option",{value:"&camera=minites"},"Mini-TES - Miniature Thermal Emission Spectrometer")))}}]),a}(n.Component)),A=(t(40),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleSol=function(e){t.props.onSolChange(e.target.value)},t.handleDate=function(e){t.props.onDateChange(e.target.value)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"display-time-box"},"sol"===e.props.time?r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"marsTime"},"Mars Sol:"),r.a.createElement("input",{type:"number",id:"marsSol",onChange:e.handleSol})):"date"===e.props.time?r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"earthTime"},"Earth Date:"),r.a.createElement("input",{type:"date",id:"earthDate",onChange:e.handleDate})):null)}}]),a}(n.Component)),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleChangeTime=function(e){t.props.onTimeChange(e.target.value)},t.handleChangeRover=function(e){t.props.onRoverChange(e.target.value)},t.handleSol=function(e){t.props.onSolChange(e)},t.handleDate=function(e){t.props.onDateChange(e)},t.handleCamera=function(e){t.props.onCameraChange(e)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"form-box"},r.a.createElement("fieldset",{className:"field-box"},r.a.createElement("legend",null,"Please select the NASA Mars Rover:"),r.a.createElement("div",{className:"rover-box"},r.a.createElement("label",{htmlFor:"curiosity"},r.a.createElement("input",{type:"radio",id:"curiosity",name:"rover",value:"curiosity",onChange:this.handleChangeRover,defaultChecked:!0}),"Curiosity"),r.a.createElement("label",{htmlFor:"opportunity"},r.a.createElement("input",{type:"radio",id:"opportunity",name:"rover",value:"opportunity",onChange:this.handleChangeRover}),"Opportunity"),r.a.createElement("label",{htmlFor:"spirit"},r.a.createElement("input",{type:"radio",id:"spirit",name:"rover",value:"spirit",onChange:this.handleChangeRover}),"Spirit"))),r.a.createElement("fieldset",{className:"field-box"},r.a.createElement("legend",null,"Please select the Earth date / Mars sol :"),r.a.createElement("div",{className:"time-box"},r.a.createElement("label",{htmlFor:"all"},r.a.createElement("input",{type:"radio",id:"allTime",name:"time",value:"all",onChange:this.handleChangeTime,defaultChecked:!0}),"All photos"),r.a.createElement("label",{htmlFor:"sol"},r.a.createElement("input",{type:"radio",id:"solTime",name:"time",value:"sol",onChange:this.handleChangeTime}),"Mars Sol"),r.a.createElement("label",{htmlFor:"date"},r.a.createElement("input",{type:"radio",id:"dateTime",name:"time",value:"date",onChange:this.handleChangeTime}),"Earth Date")),r.a.createElement(A,{time:this.props.time,onDateChange:this.handleDate,onSolChange:this.handleSol})),r.a.createElement("fieldset",{className:"field-box"},r.a.createElement("legend",null,"Please select the camera:"),r.a.createElement(O,{rover:this.props.rover,onCameraChange:this.handleCamera})))}}]),a}(n.Component),S=(t(41),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleRover=function(e){t.setState({roverChoice:e})},t.handleTime=function(e){t.setState({timeChoice:e})},t.handleSol=function(e){t.setState({solChoice:e})},t.handleDate=function(e){t.setState({dateChoice:e})},t.handleCamera=function(e){t.setState({cameraChoice:e})},t.state={roverChoice:"curiosity",timeChoice:"all",solChoice:"none",dateChoice:"none",cameraChoice:""},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rover-container"},r.a.createElement("h2",{className:"rover-header"},"Mars Rover Photos"),r.a.createElement("p",null,"If you love to see photos on the ground of the Red Planet, you've come to the right place! Join the exploration of Mars with NASA and see images collected by NASA's Mars Rovers, Curiosity, Opportunity and Spirit. Choose which rover to see pictures taken from and search by the Earth date they were taken on or even by Sol (Martian day/rotation). Even better, you could get greedy and return all searches. Each rover also has several cameras onboard that you can filter the results upon."),r.a.createElement(j,{rover:this.state.roverChoice,time:this.state.timeChoice,onRoverChange:this.handleRover,onTimeChange:this.handleTime,onSolChange:this.handleSol,onDateChange:this.handleDate,onCameraChange:this.handleCamera}),r.a.createElement(y,{rover:this.state.roverChoice,time:this.state.timeChoice,sol:this.state.solChoice,date:this.state.dateChoice,camera:this.state.cameraChoice,page:this.state.pageChoice}))}}]),a}(n.Component)),D=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"HTTP Error 404"),r.a.createElement("p",null,"404 Not Found"),r.a.createElement("p",null,"The requested URL was not found on this server"))},w=(t(42),t(22)),N=t.n(w),k=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:N.a,alt:"logo"}),r.a.createElement(u.b,{to:"/space-daily/"},"Home"),r.a.createElement(u.b,{to:"/space-daily/apod"},"APOD"),r.a.createElement(u.b,{to:"/space-daily/rover"},"Mars Rovers"))}}]),a}(n.Component),P=(t(51),function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("h2",{className:"home-header"},"Home"),r.a.createElement("p",null,"Space Daily is a collection of pages utilising NASA's API to bring you space and Earth related information and imagery."),r.a.createElement("p",null,"Check out the APOD tab to see the Astronomy Picture of the Day; in which, contrary to the name isn't always pictures (you get videos on a good day). Otherwise you can see pictures taken by NASA rovers in the Rover tab."),r.a.createElement("p",null,"All information and photos available here are made possible by NASA APIs"))}),M=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("div",{id:"content-wrap"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/space-daily/",exact:!0,component:P}),r.a.createElement(p.a,{path:"/space-daily/apod",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(p.a,{path:"/space-daily/rover",component:S}),r.a.createElement(p.a,{component:D})))),r.a.createElement("div",{id:"footer"},r.a.createElement("hr",{className:"footer-hr"}),r.a.createElement("p",{className:"footer-content"},"Content sourced from ",r.a.createElement("a",{href:"https://api.nasa.gov/index.html",title:"nasa_api"},"NASA API"),". Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/photo3idea-studio",title:"photo3idea_studio"},"photo3idea_studio")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.2a4d7f01.chunk.js.map