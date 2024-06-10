const Favorite = {
     async render() {
       return `
         <div>
           <h2>Your Favorite Restaurants</h2>
           <div id="favorite-restaurant-list"></div>
         </div>
       `;
     },
   
     async afterRender() {
       // Implement favorite restaurant rendering logic here
       const favoriteRestaurantList = document.getElementById('favorite-restaurant-list');
       favoriteRestaurantList.innerHTML = '<p>Here are your favorite restaurants...</p>';
     },
   };
   
   export default Favorite;   