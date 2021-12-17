import React, { Component } from 'react';
import './Shooting.css';

// Component
import Article from './Article'

const newShootingNews = [{
    title1: 'Competitive Musketry',
    content1: 'New Olympic Sport Proposal involving Smoothbore Muskets, Requires Minimal Training',

    title2: 'Gun Explodes after Firing',
    content2: 'Contestant Replaces Gunpowder with High Explosives',

    title3: 'Professional Shooter, Shoots his Own Foot',
    subtitle3: 'Strange Occurances',
    content3: 'Rumor of Avoiding Shooting Practice',

    title4: 'Ammunition Cost',
    content4: 'Rising',

    title5: 'Ammunition Cost',
    content5: 'Still Rising',

    title6: 'Great Places to Shoot',
    content6: 'Somewhere Near this Image',

    title7: 'Revolutionary New Shooting Sport, Skeet Throwing',
    subtitle7: 'Odd Idea to increase Olympic Viewership',
    content7: 'Contestants will throw Skeets at the Guns this time',

    title8: 'Fewer People Watching Olympic Shooting Events',
    subtitle8: 'Olympic Committee Perplexed',
    content8: 'Management Suggests Utilizing Machine Guns to Attract more Viewers',

    title9: 'Jam Shooting',
    subtitle9: 'A New Shooting Sport',
    content9: 'Guns are covered in mud, last one to jam wins',

    title10: 'Gun Juggling',
    subtitle10: 'Contestant Wins Gold Medal in Gun Juggling',
    content10: 'Latest Sport Baffles Audience',

    title11: 'Bayonet Fighting',
    subtitle11: 'New Shooting Sport without Shooting',
    content11: 'Contestants Attempt to Stab each other with Bayonets instead',

    title12: 'Sports Shooting',
    subtitle12: 'This time it is Different',
    content12: 'New Sport where people Shoot the Equipment of other Sports with Guns',
}];


const displayShootingNewsList = newShootingNews.map((post, idx) => {
    return (
        <Article key={idx} index={idx}

            title1={post.title1}
            content1={post.content1}

            title2={post.title2}
            content2={post.content2}

            title3={post.title3}
            subtitle3={post.subtitle3}
            content3={post.content3}

            title4={post.title4}
            content4={post.content4}

            title5={post.title5}
            content5={post.content5}

            title6={post.title6}
            content6={post.content6}

            title7={post.title7}
            subtitle7={post.subtitle7}
            content7={post.content7}

            title8={post.title8}
            subtitle8={post.subtitle8}
            content8={post.content8}

            title9={post.title9}
            subtitle9={post.subtitle9}
            content9={post.content9}

            title10={post.title10}
            subtitle10={post.subtitle10}
            content10={post.content10}

            title11={post.title11}
            subtitle11={post.subtitle11}
            content11={post.content11}

            title12={post.title12}
            subtitle12={post.subtitle12}
            content12={post.content12}

        />
    );
});

class Shooting extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info is-medium is-bold">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="tabs is-right">
                                            <ul>
                                                <li className="is-active"><a>Home</a></li>
                                                <li><a href="">Examples</a></li>
                                                <li><a href="">Features</a></li>
                                                <li><a href="">Team</a></li>
                                                <li><a href="">Help</a></li>
                                            </ul>
                                            <span className="navbar-item">
                                                <a className="button is-white is-outlined" href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html">
                                                    <span className="icon">
                                                        <i className="fa fa-github"></i>
                                                    </span>
                                                    <span title="Hello from the other side">View Source</span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                The new standard in &lt;insert industry here&gt;
                            </h1>
                            <h2 className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="box cta">
                    <p className="has-text-centered">
                        <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <section className="container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-paw"></i>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Tristique senectus et netus et. </h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                        <p><a href="#">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-empire"></i>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Tempor orci dapibus ultrices in.</h4>
                                        <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                                            sed risus.</p>
                                        <p><a href="#">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-apple"></i>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4> Leo integer malesuada nunc vel risus. </h4>
                                        <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <p><a href="#">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro column is-8 is-offset-2">
                        <h2 className="title">Latest News for all Shooting Sports</h2><br />
                        <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
                    </div>
                    {displayShootingNewsList}
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-3 is-offset-2">
                                <h2><strong>Category</strong></h2>
                                <ul>
                                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="#">Vestibulum errato isse</a></li>
                                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="#">Aisia caisia</a></li>
                                    <li><a href="#">Murphy's law</a></li>
                                    <li><a href="#">Flimsy Lavenrock</a></li>
                                    <li><a href="#">Maven Mousie Lavender</a></li>
                                </ul>
                            </div>
                            <div className="column is-3">
                                <h2><strong>Category</strong></h2>
                                <ul>
                                    <li><a href="#">Labore et dolore magna aliqua</a></li>
                                    <li><a href="#">Kanban airis sum eschelor</a></li>
                                    <li><a href="#">Modular modern free</a></li>
                                    <li><a href="#">The king of clubs</a></li>
                                    <li><a href="#">The Discovery Dissipation</a></li>
                                    <li><a href="#">Course Correction</a></li>
                                    <li><a href="#">Better Angels</a></li>
                                </ul>
                            </div>
                            <div className="column is-4">
                                <h2><strong>Category</strong></h2>
                                <ul>
                                    <li><a href="#">Objects in space</a></li>
                                    <li><a href="#">Playing cards with coyote</a></li>
                                    <li><a href="#">Goodbye Yellow Brick Road</a></li>
                                    <li><a href="#">The Garden of Forking Paths</a></li>
                                    <li><a href="#">Future Shock</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content has-text-centered">
                            <p>
                                <a className="icon" href="https://github.com/BulmaTemplates/bulma-templates">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                            <div className="control level-item">
                                <a href="https://github.com/BulmaTemplates/bulma-templates">
                                    <div className="tags has-addons">
                                        <span className="tag is-dark">Bulma Templates</span>
                                        <span className="tag is-info">MIT license</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <script src="../js/bulma.js"></script>
                </footer>
            </div>
        );
    }
}

export default Shooting;