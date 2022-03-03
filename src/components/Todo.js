import { useState } from "react";
import Modal from "./Modal";

function Todo({ title, id }) {

    const [openConfirmation, setOpenConfirmation] = useState(false);

    const deleteHandler = (id) => {
        console.log(id)
        setOpenConfirmation( false );
    }

    return (
        <>
            <div className="card">
                <h2>{title}</h2>
                <div className="actions">
                    <button className="btn" onClick={() => setOpenConfirmation(true)}>Delete</button>
                </div>
            </div>
            {openConfirmation &&
                <Modal
                    id = { id }
                    text={title}
                    close={() => setOpenConfirmation(false)}
                    confirm={(id) => deleteHandler(id)}
                />}
        </>
    )

}

export default Todo;