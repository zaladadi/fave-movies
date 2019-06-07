import Component from '../Component.js';
import UserItem from './UserItem.js';

class UserList extends Component {

    render() {
        const list = this.renderDOM();
        const users = this.props.users;

        if(users){
            users.forEach(user => {
                const userItem = new UserItem({ user });
                list.appendChild(userItem.render());
            });
        }

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="user-list">
            </ul>
        `;
    }
}

export default UserList;