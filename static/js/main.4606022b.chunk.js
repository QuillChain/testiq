(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(module,__webpack_exports__,__webpack_require__){"use strict";var PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){if("/"===e)return function(){var e=Math.floor(9*Math.random()+1),n=PRIMES_NUMBERS.filter(function(n){return t%n===0&&e*n});return+n[Math.floor(Math.random()*(n.length-1))]||1};if("*"===e){var n=0;return t<15&&(n=15),t>14&&t<50&&(n=8),t>49&&(n=5),function(){return getRandomNumber(n)}}return function(){return getRandomNumber(20)}},getRandomNumber=function(e){return(Math.random()*(e||15)).toFixed()},generateProblem=function(e){for(var t=parseInt(e/100/5+1),n=getRandomNumber(),a=n,r=0;r<t;r++){var o=getRandomSymbol(),s=evaluate(o,n)()||0;a+=" ".concat(o," ").concat(s),n=s}return a},compare=function(e,t){return solve(e)===Number(t)},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve}},20:function(e,t,n){e.exports=n(34)},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),s=n.n(o),i=n(10),l=n(7),c=n(18),u={points:0,lifes:3,seconds:20,level:1,isFinished:!1,isStarted:!1},m=Object(l.c)(Object(l.a)(c.a))(l.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload;return Object.assign({},e,{lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:3,seconds:20,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:3,seconds:20,level:1,isFinished:!1,isStarted:!1});default:return e}}),f=(n(30),n(1)),p=n(2),d=n(4),h=n(3),v=n(5),g=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var y=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)};var E={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},b={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player"},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){b.set("onlinePlayer",n.state.player),n.props.startPressed()},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null),r.a.createElement("h3",null,"Test Your"),r.a.createElement("h1",null,"IQ?")),r.a.createElement("p",null,"Press to start the game"),r.a.createElement(y,{isClicked:this.clicked},"Easy"),r.a.createElement(y,{isClicked:this.clicked},"Hard"))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"GO"}:"GO"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"GET READY..."),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),O={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"};function k(e){var t=e.text,n=e.type;return r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:O.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:O.midGray}},"Answer: ",r.a.createElement("span",{style:{color:O.lightGray}},t)))}var j=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(k,{type:t,text:n}))},A=n(15),_=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={problem:"",answer:0,modal:"",modalShowing:!1,streaks:0},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error",A.a.solve(n.state.problem).toString()),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1}),n.props.lifes>0&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){return A.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(j,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=A.a.generateProblem(n.props.points);n._isMounted&&n.setState({problem:e})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem(),this.answerInput.focus()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up"},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.problem," "),r.a.createElement("input",{ref:function(t){e.answerInput=t},className:"App-input",type:"number",placeholder:"Answer",onKeyUp:this.keyingUp}))))}}]),t}(r.a.Component),R={fontSize:"1.5em",color:"#61dafb",fontFamily:"fantasy",cursor:"pointer"},N={color:"white",fontFamily:"fantasy",cursor:"pointer",fontSize:"1em",margin:"0.1em auto 3em"},M={height:0,border:"0.5px solid #61dafb"},C={color:"#61dafb",fontWeight:"bold"},G=function(e){function t(){return Object(f.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=M,t=R,n=N,a=C;return r.a.createElement("div",null,r.a.createElement("h2",null,"FINAL SCORE ",r.a.createElement("b",{style:a},this.props.points)),r.a.createElement("hr",{style:e}),r.a.createElement("h1",null,"Well Done!"),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"RETRY"),r.a.createElement("h5",{style:n,onClick:this.props.onReStartGame},"Another player"),this.children)}}]),t}(r.a.Component),I=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(this.setState(function(t){return{level:e.props.level,seconds:t.seconds+0}}),this.props.setTimeChanged(this.state.seconds)),this.state.seconds<0&&this.props.onEndGame()}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-clock"})," ",r.a.createElement("b",null,this.state.seconds))}}]),t}(r.a.Component);I.defaultProps={level:0};var T=I;var P=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:O.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function x(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:O.yellow}})," ",t)}n(31);var F=n(19),W={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(O.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:O.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function B(e){var t=e.player;return r.a.createElement("div",{style:W.sectionContainer},r.a.createElement("h5",{style:W.title},t.name),r.a.createElement("div",{style:W.container},r.a.createElement("small",{style:W.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+F(new Date(t.time)).fromNow()),r.a.createElement("small",{style:W.el},r.a.createElement("i",{className:"fas fa-star",style:{color:O.yellow}})," ",t.points)),r.a.createElement("hr",{style:W.divider}))}function D(e){var t=e.points,n=b.get("onlinePlayer"),a=JSON.parse(E.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),E.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(B,{player:e,key:t})}))}var L=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.isFinished?r.a.createElement(G,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(D,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",null,r.a.createElement("div",{className:"App-header-bar"},r.a.createElement(T,this.props),r.a.createElement(P,this.props),r.a.createElement(x,this.props)),r.a.createElement(_,this.props)):r.a.createElement(S,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component);n(33);function U(){return r.a.createElement("footer",{className:"App-footer"},r.a.createElement("small",null,r.a.createElement("a",{href:"https://www.buymeacoffee.com/covergamer"},r.a.createElement("img",{alt:"buymeacoffee",src:"https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=covergamer&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"}))))}var z=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).gameStart=function(){n.props.onStartGame()},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.props.isStarted?r.a.createElement(L,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(w,{startPressed:this.gameStart})),r.a.createElement(U,null))}}]),t}(a.Component),J=Object(i.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:1})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(g(!0))},onRetryGame:function(){return e(g(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})(z),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");V?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Y(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.4606022b.chunk.js.map