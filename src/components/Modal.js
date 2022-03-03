import Backdrop from "./Backdrop";

function Modal({ close, confirm, text, id }) {
    return (
        <Backdrop close = { close }>
            <div className="modal">
                <h2>Are you sure?</h2>
                <p>Delete { text }</p>
                <div className="actions">
                    <button className="btn btn-secondary" onClick={close}>Cancel</button>
                    <button className="btn" onClick={()=>confirm(id)}>Confirm</button>
                </div>
            </div>
        </Backdrop>
    );
}

export default Modal;