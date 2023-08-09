import config from '../utils/config';
import AllCustomers from './customers/Index';
import Dashboard from './dashboard/Index';

 const { routes } = config;
const Pages = [
			{
				path: routes.dashboard,
				element: <Dashboard />,
			},
            {
				path: routes.allCustomers,
				element: <AllCustomers />,
			},
  ]

export default Pages;