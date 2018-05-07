import React from 'react';

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const Splash = ({ children }) => <div style={styles.container}>{children}</div>;

export default Splash;
