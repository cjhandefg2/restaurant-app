// src/scripts/views/templates/template-creator.js

import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Categories</h4>
      <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
      <h4>Foods</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
      <h4>Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
    <div class="restaurant__description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" data-id="${restaurant.id}">
    <div class="restaurant-item__header">
      <div class="restaurant-item__image-container">
        <img class="restaurant-item__image" alt="${restaurant.name}"
             src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__rating">
          <span aria-label="Rating: ${restaurant.rating}">${restaurant.rating}</span>
        </div>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__name">
          <a href="/#/detail/${restaurant.id}" class="restaurant-item__link">${restaurant.name}</a>
     </h3>
      <p class="restaurant-item__city">${restaurant.city}</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </div>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
