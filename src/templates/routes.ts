import { RouteConfig } from 'react-router';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err);
};


const loadRoute = (cb) => {
    return (module) => cb(null, module.default);
};

const routes: RouteConfig = {
    path: '/',
    getComponent(location, cb) {
            System.import('./App').then(loadRoute(cb)).catch(errorLoading);
        },
    indexRoute: {
        getComponents(location, cb) {
            System.import('./presentation/WelcomePage').then(loadRoute(cb)).catch(errorLoading);
        }
    },
    childRoutes: [
        {
            path: ':topic',
            getComponent(location, cb) {
                System.import('./container/ActiveTopicTitlePage').then(loadRoute(cb)).catch(errorLoading);
            },
        },
        {
            path: ':topic/:id',
            getComponent(location, cb) {
                System.import('./container/ActiveBasicPage').then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: 'questions/:id',
            getComponent(location, cb) {
                System.import('./container/ActiveQuestionPage').then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: 'results',
            getComponent(location, cb) {
                System.import('./container/ActiveResultsPage').then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: 'talktous',
            getComponent(location, cb) {
                System.import('./presentation/TalkToUsPage.tsx').then(loadRoute(cb)).catch(errorLoading);
            }
        }
    ]
};

export default routes;
