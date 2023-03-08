
import './Modal.css';

export const Modal = ({ content }: any) => {

    return (
        <div className="modalContainer">
            <div className="modal">
                {content ? content : 'modallll'}
            </div>
        </div>
    )
};