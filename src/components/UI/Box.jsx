import MaterialBox from '@mui/joy/Box';



const Box = (props) => {
    return (
        <MaterialBox
            sx={{
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
                backgroundColor: '#f1f1f1',
            }}
            className={props.className}
        >
            {props.children}
        </MaterialBox>
    );
};

export default Box;