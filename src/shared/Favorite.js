import Component from '../Component.js';

class Favorite extends Component {
    render() {
        const button = this.renderDOM();
        button.addEventListener('click', () => {
            this.props.onClick(!this.props.isFavorite);
        });
        return button;
    }

    renderTemplate() {
        return /*html*/`
            <button class="favorite-star"></button>
        `;
    }
}

export default Favorite;