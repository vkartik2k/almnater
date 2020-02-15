import React from 'react';
import '../styles/Home.css';
import ConnectCard from './ConnectCard';
import { Paper } from '@material-ui/core'
import Testimonials from './Testimonials';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="mainContentContainer">

                </div>
                <Paper className="recConnect">
                    <span className="rcHead">PEOPLE FROM YOUR COLLEGE, YOU MIGHT KNOW</span>
                    <div>
                        <ConnectCard
                            name="Mandeep Singh"
                            post="Google Step Intern 2020"
                            mutualConnects="164"
                        />
                        <ConnectCard
                            name="Kashish"
                            post="Facebook Intern 2020"
                            mutualConnects="84"
                        />
                        <ConnectCard
                            name="Kushal Aggarwal"
                            post="Tower Research 2020"
                            mutualConnects="7"
                        />
                    </div>
                </Paper>
                <Testimonials/>
            </div>
        )
    }
}

export default Home;