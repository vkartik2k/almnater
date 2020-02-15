import React from 'react';
import '../styles/Home.css';
import ConnectCard from './ConnectCard';

class Home extends React.Component {
    render() {
        return (
            <div>
                <ConnectCard
                    name="Mandeep Singh"
                    post="Google Step Intern 2020"
                    mutualConnects = "164"
                />
                <ConnectCard
                    name="Kashish"
                    post="Facebook Intern 2020"
                    mutualConnects = "84"
                />
                <ConnectCard
                    name="Kushal Aggarwal"
                    post="Tower Research 2020"
                    mutualConnects = "7"
                />
            </div>
        )
    }
}

export default Home;