import React, { Component } from 'react';

class Article extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sandbox" key={this.props.index}>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title1}</p>
                            <p className="subtitle">{this.props.content1}</p>
                        </article>
                    </div>
                    <div className="tile is-parent is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title2}</p>
                            <p className="subtitle">{this.props.content2}</p>
                        </article>
                    </div>
                    <div className="tile is-parent is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title3}</p>
                            <p className="subtitle">{this.props.subtitle3}</p>
                            <div className="content">
                                <p>{this.props.content3}</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{this.props.title4}</p>
                                    <p className="subtitle">{this.props.content4}</p>
                                </article>
                                <article className="tile is-child notification is-white">
                                    <p className="title">{this.props.title5}</p>
                                    <p className="subtitle">{this.props.content5}</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{this.props.title6}</p>
                                    <p className="subtitle">{this.props.content6}</p>
                                    <figure className="image is-4by3">
                                        <img src="https://picsum.photos/640/480/?random" alt="Description" />
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent is-shady">
                            <article className="tile is-child notification is-white">
                                <p className="title">{this.props.title7}</p>
                                <p className="subtitle">{this.props.subtitle7}</p>
                                <div className="content">
                                    <p>{this.props.content7}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent is-shady">
                        <article className="tile is-child notification is-white">
                            <div className="content">
                                <p className="title">{this.props.title8}</p>
                                <p className="subtitle">{this.props.subtitle8}</p>
                                <div className="content">
                                    <p>{this.props.content8}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title9}</p>
                            <p className="subtitle">{this.props.subtitle9}</p>
                            <div className="content">
                                <p>{this.props.content9}</p>
                            </div>
                        </article>
                    </div>
                    <div className="tile is-parent is-8 is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title10}</p>
                            <p className="subtitle">{this.props.subtitle10}</p>
                            <div className="content">
                                <p>{this.props.content10}</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-8 is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title11}</p>
                            <p className="subtitle">{this.props.subtitle11}</p>
                            <div className="content">
                                <p>{this.props.content11}</p>
                            </div>
                        </article>
                    </div>
                    <div className="tile is-parent is-shady">
                        <article className="tile is-child notification is-white">
                            <p className="title">{this.props.title12}</p>
                            <p className="subtitle">{this.props.subtitle12}</p>
                            <div className="content">
                                <p>{this.props.content12}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

class ArticlePet extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" key={this.props.index}>
                {/* <!-- START ARTICLE FEED --> */}
                <section className="articles">
                    <div className="column is-8 is-offset-2">

                        {/* <!-- START ARTICLE --> */}
                        <div className="card article">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-center">
                                        <img src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png" className="author-image" alt="Placeholder image" />
                                    </div>
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title">{this.props.title}</p>
                                        <p className="subtitle is-6 article-subtitle">
                                            <a href="#">{this.props.author}</a> on February 17, 202X
                                        </p>
                                    </div>
                                </div>
                                <div className="content article-body">
                                    <p>
                                        {this.props.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- END ARTICLE --> */}

                    </div>

                </section>
            </div>
        );
    }
}

export {
    Article,
    ArticlePet,
};
