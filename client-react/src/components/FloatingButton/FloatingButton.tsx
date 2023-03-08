import CSS from 'csstype';
import { LoadingIcon } from '../../assets/icons';

export const FloatingButton = ({ onClick, loading, icon }: any) => {

    const styles: CSS.Properties  = {
        position: 'fixed', 
        backgroundColor: 'var(--primary)',
        border: 'none', 
        height: '40px', 
        width: '40px', 
        borderRadius: '40px',
        color: 'var(--font)',
        fontSize: '24px',
        right: '40px',
        bottom: '30px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <button
            style={styles}
            onClick={onClick}
            >
                {loading ? <LoadingIcon /> : icon }
        </button>
    )
};