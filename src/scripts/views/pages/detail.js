// src/scripts/views/pages/detail.js

import UrlParser from '../../routes/url-parser';
import RestoApi from '../../data/resto-api';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('Parsed URL:', url); // Debug URL
    try {
      const restaurant = await RestoApi.getRestaurantDetail(url.id);
      console.log('Restaurant Data:', restaurant); // Debug restaurant data
      if (!restaurant) {
        console.error('Restaurant not found or undefined');
        return;
      }
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  },
};

export default Detail;
