import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to ="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
            {/* <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> */}
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>
);

const mapToStateToProps = ({user: { currentUser }, cart: { hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapToStateToProps)(Header);