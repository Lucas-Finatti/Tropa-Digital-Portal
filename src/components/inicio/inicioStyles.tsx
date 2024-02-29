
const InicioStyles = () => {

    const headerTitle = {
        margin: 0,
        fontFamily: 'Consolas',
        paddingBottom: '3%',
        borderBottom: '1.5px solid #0000001A',
    };

    const headerSpan = {
        margin: 0,
        fontWeight: '600',
        fontFamily: 'Consolas',
    };

    const inicioContent = {
        display: 'grid',
        gap: '2%',
        gridTemplateColumns:  '1fr 1fr 1fr',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return { headerTitle, headerSpan, inicioContent };
}

export default InicioStyles;
