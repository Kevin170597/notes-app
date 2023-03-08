import './Loading.css';

export const LoadingIcon = (props: any) => (
    <svg
    className='spinner'
        width={24}
        height={24}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill='#fff'
        {...props}
    >
        <path d="M10 1v2a7 7 0 1 1-7 7H1a9 9 0 1 0 9-9Z" />
    </svg>
)
