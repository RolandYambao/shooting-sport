import React, { Component } from 'react';
import './Pets.css';

// Component
import { ArticlePet } from './Article'

const newPetPost = [{
    title: 'Shooting Around Pets',
    author: '@Bob',
    content: 'Pets, we all love them, but when your practicing your competitive shooting, careful when shooting around them. Most important rule, do not point your gun at the pet, it may be tempting, but do not do it, it will kill them if you shoot the gun.',
}];


const displayShootingNewsPetPost = newPetPost.map((post, idx) => {
    return (
        <ArticlePet key={idx} index={idx} title={post.title} author={post.author} content={post.content} />
    )
});

class Pets extends Component {
    render() {
        return (
            <div>
                {/* <!-- START NAV --> */}
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <h1><strong>Sports Shooting International</strong></h1>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item is-active">
                                    Home
                                </a>
                                <a className="navbar-item">
                                    News
                                </a>
                                <a className="navbar-item">
                                    Watch Competitions
                                </a>
                                <a className="navbar-item">
                                    Buy Guns
                                </a>
                                <a className="navbar-item">
                                    About Us
                                </a>
                                <a className="navbar-item">
                                    Donate
                                </a>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link">
                                        Account
                                    </a>
                                    <div className="navbar-dropdown">
                                        <a className="navbar-item">
                                            Dashboard
                                        </a>
                                        <a className="navbar-item">
                                            Profile
                                        </a>
                                        <a className="navbar-item">
                                            Settings
                                        </a>
                                        <hr className="navbar-divider" />
                                        <div className="navbar-item">
                                            Logout
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- END NAV --> */}

                <section className="hero is-info is-medium is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">The Advice Column of the Sports Shooting International</h1>
                        </div>
                    </div>
                </section>

                {displayShootingNewsPetPost}

            </div>
        );
    }
}

export default Pets;