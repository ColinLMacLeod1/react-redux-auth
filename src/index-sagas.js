import SignupSaga from './signup/sagas'

export default function* IndexSagas() {
  yield [
    SignupSaga()
  ]
}
