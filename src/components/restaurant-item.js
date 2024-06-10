import { LitElement, html, css } from 'lit-element';
import '../styles/restaurant-item.css'; // Ensure this path matches your build output

class RestaurantItem extends LitElement {
  static properties = {
    name: { type: String },
    pictureId: { type: String },
    city: { type: String },
    rating: { type: Number },
    description: { type: String },
  };

  static styles = css`
    .restaurant-item {
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      transition: transform var(--transition-speed);
    }
   
    .restaurant-item:hover {
      transform: scale(1.05);
    }
   
    .restaurant-item__image-container {
      position: relative;
    }
   
    .restaurant-item__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
   
    .restaurant-item__rating {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      color: var(--text-color);
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 14px;
      display: flex;
      align-items: center;
    }
   
    .restaurant-item__rating::before {
      content: "★";
      margin-right: 5px;
      color: gold;
    }
   
    .restaurant-item__name,
    .restaurant-item__city,
    .restaurant-item__description {
      padding: 5px 10px;
      margin: 0;
    }
   
    .restaurant-item__name {
      font-size: 1.2em;
      font-weight: bold;
      background-color: var(--accent-color);
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    }
   
    .restaurant-item__city {
      font-size: 0.9em;
      color: #777;
    }
   
    .restaurant-item__description {
      font-size: 0.9em;
      color: #555;
    }
  `;

  render() {
    return html`
      <div class="restaurant-item">
        <div class="restaurant-item__image-container">
          <img src="${this.pictureId}" alt="${this.name}" class="restaurant-item__image" />
          <span class="restaurant-item__rating" aria-label="Rating: ${this.rating}">${this.rating}</span>
        </div>
        <h3 class="restaurant-item__name">${this.name}</h3>
        <p class="restaurant-item__city" aria-label="City: ${this.city}">${this.city}</p>
        <p class="restaurant-item__description" aria-label="Description: ${this.description}">${this.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);