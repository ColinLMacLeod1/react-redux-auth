import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'

export default function* IndexSagas() {
	yield [SignupSaga(), LoginSaga()]
}
