import Component from '../Component.js';

class UserItem extends Component {

    renderTemplate() {
        const user = this.props.user;
        return /*html*/`
            <a href="./favorites.html?uid=${user.uid}">
                <li class="user-item">
                    <img src="../../assets/default.png">
                    <p>${user.displayName}</p>
                </li>
            </a>
        `;
    }
}

export default UserItem;