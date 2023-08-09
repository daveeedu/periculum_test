const environment = {}

const routes = {
    dashboard: '/',
    allCustomers: '/customers'
}

environment.development = {
 authProps: ['cav/token', 'cav/user'],
 backendUrl: process.env.REACT_APP_BACKEND_URL ?? 'http://104.248.172.21:8002/',
 routes,
 userType: process.env.REACT_APP_USER_TYPE || 'Admin',
 frontendUrl: 'http://104.248.172.21:3001/',
}

environment.staging = {
 authProps: ['cav/token', 'cav/user'],
 backendUrl: process.env.REACT_APP_BACKEND_URL ?? 'http://104.248.172.21:8002/',
 routes,
 userType: process.env.REACT_USER_TYPE,
 frontendUrl: 'http://104.248.172.21:3001/',
}
environment.production = {
 authProps: ['cav/token', 'cav/user'],
 backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://104.248.172.21:8002/',
 routes,
 userType: process.env.REACT_USER_TYPE,
 frontendUrl: 'http://104.248.172.21:3001/',
}
console.log(process.env.REACT_APP_ENV || 'development')
export default environment[process.env.REACT_APP_ENV || 'development']