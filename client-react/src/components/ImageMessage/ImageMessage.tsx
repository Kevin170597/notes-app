
import './ImageMessage.css';

export const ImageMessage = ({ label, image }: any) => {

    return (
        <div className='empty'>
            <img src={image} alt='empty list' />
            <p>{label}</p>
        </div>
    )
};