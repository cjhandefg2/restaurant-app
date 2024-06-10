import RestoApi from '../../data/resto-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="hero" aria-labelledby="hero-heading">
        <img
          src="images/heros/hero-image_1.jpg"
          alt="Hero Image"
          class="hero__image"
        />
        <div class="hero__overlay">
          <div class="hero__text">
            <h1 id="hero-heading">WWW - Warung Wisata Kuliner</h1>
            <a
              href="#restaurants"
              id="see-our-picks"
              class="hero__button"
              aria-label="See our restaurant picks"
              >See Our Picks</a
            >
          </div>
        </div>
      </section>
      <section
        class="restaurants"
        id="restaurants"
        aria-labelledby="restaurants-heading"
      >
        <h2 id="restaurants-heading">Restaurants</h2>
        <div class="restaurants__list" id="restaurant-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantList = document.getElementById('restaurant-list');

    // Fetch restaurant data from API
    const restaurants = await RestoApi.getRestaurants();

    // Render each restaurant
    restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement("div");
        restaurantItem.innerHTML = createRestaurantItemTemplate(restaurant);
        restaurantList.appendChild(restaurantItem);
    });

    const seeOurPicksButton = document.getElementById('see-our-picks');
    seeOurPicksButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Home;