(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),l=n.n(r),o=(n(15),n(1)),c=n(4),s=n(5),u=n(6),m=n(8),d=n(7),h=n(9),p=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={newItem:"",list:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"updateInput",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"addItem",value:function(){var e={id:1+Math.random(),value:this.state.newItem.slice()},t=Object(o.a)(this.state.list);t.push(e),this.setState({list:t,newItem:""})}},{key:"deleteItem",value:function(e){var t=Object(o.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"conatiner"},i.a.createElement("h1",null,"To Do List"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",placeholder:"Type item here...",vale:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}}),i.a.createElement("button",{onClick:function(){return e.addItem()}},"Add"),i.a.createElement("br",null),i.a.createElement("ul",null,this.state.list.map((function(t){return i.a.createElement("li",{key:t.id},t.value,i.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)}},"X"))})))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.8941b0f6.chunk.js.map