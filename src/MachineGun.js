import React, { Component } from 'react';
import './MachineGun.css';

// Component
import { ArticleMachineGun } from './Article'

const machineGunArticle = [{
    title1: 'Fewer People Watching Olympic Shooting Events',
    content1: 'Olympic Committee Perplexed',
    title2: 'A Bold Solution',
    content2: 'Management Suggests Utilizing Machine Guns to Attract more Viewers',
    title3: 'Is it Safe?',
    content3: 'Experts agree, machine guns in competitive shooting are perfectly safe, simply avoid aiming at people',
    title4: 'The upcoming Olympic Event will have Professional Machine Gunners',
    content4: 'The Olympic Commitee will expect a large viewership growth soon',
    title5: 'Join our Email List Today',
    content5: 'Add your name and email here to join the Shooting Sports International!',
}];


const displayMachineGunArticle = machineGunArticle.map((post, idx) => {
    return (
        <ArticleMachineGun key={idx} index={idx}

            title1={post.title1} content1={post.content1}
            title2={post.title2} content2={post.content2}
            title3={post.title3} content3={post.content3}
            title4={post.title4} content4={post.content4}
            title5={post.title5} content5={post.content5}

        />
    )
});

class MachineGun extends Component {
    render() {
        return (
            <div>
                {displayMachineGunArticle}
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            Copyrighted by the Shooting Sports International
                        </p>
                    </div>
                </footer>

            </div>
        );
    }
}

export default MachineGun;