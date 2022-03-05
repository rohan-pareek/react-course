import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

    const [ meetups, setMeetups ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    const processData = (obj) => {
        const data = [];
        for(const key in obj) {
            const meetup = {
                id: key,
                ...obj[key]
            }

            data.push(meetup);
        }

        return data;
    }

    const fetchMeetups = async () => {
        setIsLoading( true )
        const firebaseUrl = '<FIREBASE-DATABASE-URL>';
        const apiUrl = `${firebaseUrl}/meetups.json`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        const result = processData(data);
        setMeetups(result);
        setIsLoading( false );
    }
    useEffect(()=>{

        fetchMeetups();

    }, []);

    if( isLoading ) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>
                All Meetups
            </h1>
            {<MeetupList list={meetups} />}
        </section>
    )
}

export default AllMeetupsPage;
