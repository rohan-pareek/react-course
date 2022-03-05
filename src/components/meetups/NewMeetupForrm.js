import { useRef } from "react";

import Card from "../ui/Card";
import css from '../../styles/NewMeetupForm.module.css';

function NewMeetupForm({addMeetup}) {

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const address = addressRef.current.value;
        const description = descriptionRef.current.value;

        const payload = {
            title,
            image,
            address,
            description
        }

        addMeetup(payload);
    }

    return (
        <Card>
            <form className={css.form} onSubmit = { submitHandler }>
                <div className={css.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id = "title" ref={titleRef} required />
                </div>
                <div className={css.control}>
                    <label htmlFor="image">Upload image</label>
                    <input type="url" id="image" ref={imageRef} required />
                </div>
                <div className={css.control}>
                    <label htmlFor="address">Address</label>
                    <textarea id="address" rows="5" ref={ addressRef } required></textarea>
                </div>
                <div className={css.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5" ref={descriptionRef} required></textarea>
                </div>
                <div className={css.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    )

}

export default NewMeetupForm;
