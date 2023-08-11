const environment = {}

const routes = {
    dashboard: '/',
    allCustomers: '/customers'
}

environment.development = {
 routes
}

console.log(process.env.REACT_APP_ENV || 'development')
export default environment[process.env.REACT_APP_ENV || 'development']