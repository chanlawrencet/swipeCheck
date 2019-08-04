

export const getAPIBase = () => {
    const environment = 'local';
    switch (environment) {
        case 'local':
            return 'http://localhost:3001/';
        default:
            return 'https://swipecheckapi.herokuapp.com/';
    }
} ;