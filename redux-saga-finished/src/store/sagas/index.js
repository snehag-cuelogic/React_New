import { takeEvery,all } from 'redux-saga/effects';
import { logOutSaga,checkAuthTimeOutSaga, authUserSaga, authCheckStateSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';
export function* watchAuth() {
        yield all([
             takeEvery(actionTypes.AUTH_CHECK_TIMEOUT,checkAuthTimeOutSaga),
             takeEvery(actionTypes.AUTH_INITIATIVE_LOG,logOutSaga),
             takeEvery(actionTypes.AUTH_USER,authUserSaga),
             takeEvery(actionTypes.AUTH_CHECK_STATE,authCheckStateSaga), 
        ]);

   
}
export function* watchBurgerBuilder(){
    yield takeEvery(actionTypes.INIT_INGREDIENT,initIngredientsSaga);
}
export function* watchOrder(){
    yield takeEvery(actionTypes.PURCHASE_BURGER,purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS,fetchOrdersSaga);
}
