import React,{Component} from 'react';
import LeftBar from '../Reuse/Leftbar';
import RightBar from '../Reuse/Rightbar';
import TimelineNav from './TimelineNav';
import TimelineMain from './TimelineMain';
import '../../Css/Timeline/Timeline.scss';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <TimelineNav/>
                <div className="Timeline">
                    <LeftBar/>
                    <TimelineMain/>
                    <RightBar/>
                </div>
            </>
        );
    }
}

export default Timeline;