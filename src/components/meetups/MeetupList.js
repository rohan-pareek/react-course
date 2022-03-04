import MeetupItem from "./MeetupItem";
import css from '../../styles/MeetupList.module.css';

function MeetupList({list}) {

    return (
      <ul className={css.list}>
        { list.map( item => (
            <MeetupItem key = {item.id} { ...item } />
        ) ) }
      </ul>  
    );

}

export default MeetupList;