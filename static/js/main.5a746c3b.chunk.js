(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),s=(a(16),a(17),a(1)),l=a.n(s),o=a(4),m=a(5),p=a(6),u=a(8),f=a(7),d=a(9),h=(a(19),function(e){return r.a.createElement("form",{onSubmit:e.getRecipe},r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Ingredient",name:"recipeName"}),r.a.createElement("button",{className:"form__button"},"Search"))}),g=function(e){var t=e.recipes,a=e.ingredient;return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"ingredient_container"},"Showing ",r.a.createElement("span",{className:"recipe_num"},t&&t.length)," ","Recipes",a.length>0&&r.a.createElement("span",null,", Containing ",r.a.createElement("span",{className:"ingredient"},a))),r.a.createElement("div",{className:"row"},t&&t.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.recipe_id},r.a.createElement("div",{className:"recipes__box"},r.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),r.a.createElement("div",{className:"recipe__text"},r.a.createElement("h5",{className:"recipes__title"},(e.title.length,"".concat(e.title))),r.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",r.a.createElement("span",null,e.publisher))),r.a.createElement("a",{className:"recipe_buttons",target:"_blank",rel:"noopener noreferrer",href:e.source_url},"View Recipe")))})))},E=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"Recipes provided by"," ",r.a.createElement("a",{href:"https://www.food2fork.com/about/api"},"Food2Fork")))},v=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h2",null,"API call limit reached for Food2Fork"),r.a.createElement("h3",null,"Try again tomorrow..."),r.a.createElement("i",{className:"fas fa-apple-alt fa-4x"}),r.a.createElement("i",{className:"fas fa-apple-alt fa-4x"}),r.a.createElement("i",{className:"fas fa-apple-alt fa-4x"}),r.a.createElement("i",{className:"fas fa-apple-alt fa-4x"}),r.a.createElement("i",{className:"fas fa-apple-alt fa-4x"}))},w="6877f4b9c87de4c5665431af1d52b9b3",N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],ingredient:""},a.getRecipe=function(){var e=Object(o.a)(l.a.mark(function e(t){var n,r,c,i,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.recipeName.value,r="https://www.food2fork.com/api/search?key=".concat(w,"&q=").concat(n),e.next=5,fetch(r);case 5:return c=e.sent,e.next=8,c.json();case 8:i=e.sent,s=void 0===i.recipes?[]:i.recipes,a.setState({recipes:s,ingredient:n});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=localStorage.getItem("ingredient");if(e&&"undefined"!==e){var n=JSON.parse(e);a.setState({recipes:n,ingredient:t})}else fetch("https://www.food2fork.com/api/search?key=".concat(w)).then(function(e){return e.json()}).then(function(e){var t=void 0===e.recipes?[]:e.recipes;a.setState({recipes:t})})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e),localStorage.setItem("ingredient",a.state.ingredient)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Recipe App")),r.a.createElement(h,{getRecipe:this.getRecipe}),Array.isArray(this.state.recipes)&&this.state.recipes.length?r.a.createElement(g,{recipes:this.state.recipes,ingredient:this.state.ingredient}):r.a.createElement(v,null),r.a.createElement(E,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.5a746c3b.chunk.js.map