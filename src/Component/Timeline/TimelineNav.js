import React,{Component} from 'react';
import SearchIco from './SearchIco';
import ProfileImg from './ProfileImg';
import HouseIco from './HouseIco';
import PeopleIco from './PeopleIco';
import NoticeIco from './NoticeIco';
import '../../Css/Timeline/TimelineNav.scss';

class TimelineNav extends Component {
    render() {
        return (
            <div className="TimelineNav">
                <div>
                    <div className="TimelineNav-left"><ProfileImg/></div>
                    <div className="TimelineNav-IcoWrap">
                        <SearchIco/>
                        <HouseIco/>
                        <PeopleIco/>
                    </div>
                    <div className="TimelineNav-right">
                        <button className="standard-next-btn">글쓰기</button>
                    </div>
                </div>
            </div>
        );
    }
}   

export default TimelineNav;