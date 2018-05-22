import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import App from './App'
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

const sagaMiddleware = createSagaMiddleware()

/*eslint-disable*/
const composeSetup =
	process.env.NODE_ENV !== 'production' &&
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose
/*eslint-enable*/

const store = createStore(
	IndexReducer,
	composeSetup(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(IndexSagas)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/widgets" component={Widgets} />
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById('root'),
)
registerServiceWorker()
