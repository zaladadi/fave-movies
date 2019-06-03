import Component from '../Component.js';

class Profile extends Component {

    renderTemplate() {
        return /*html*/`
            <div class="profile">
                <img src="http://via.placeholder.com/50">
                <span>Danny</span>
                <button>Sign Out</button>
            </div>
        `;
    }
}

export default Profile;