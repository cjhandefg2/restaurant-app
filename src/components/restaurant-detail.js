class RestaurantDetail extends HTMLElement {
     connectedCallback() {
       this.render();
     }
   
     render() {
       this.innerHTML = `<div id="restaurant"></div>`;
     }
   }
   
   customElements.define('restaurant-detail', RestaurantDetail);
   