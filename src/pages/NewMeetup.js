import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForrm";

function NewMeetupPage() {

    const navigate = useNavigate();

    const addMeetup = async (payload) => {
        const firebaseUrl = '<FIREBASE-DATABASE-URL>';
        const apiUrl = `${firebaseUrl}/meetups.json`;
        const config = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await fetch(apiUrl, config);
            const data = await res.json();
            if(data.name) {
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <h1>New Meetup Form</h1>
            <NewMeetupForm addMeetup={addMeetup} />
        </section>

    )
}

export default NewMeetupPage;
