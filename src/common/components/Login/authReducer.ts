
const enum AUTH {
    IS_AUTH = 'IS_AUTH'
}

export type AuthStateType = typeof initState;

const initState = {
    isAuth: false
}

export const authReducer = (state: AuthStateType = initState, action: AuthActions): AuthStateType => {
    switch (action.type) {
        case (AUTH.IS_AUTH):
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};

///ACTIONS

export type AuthActions = ReturnType<typeof isAuthAC>

export const isAuthAC = (isAuth: boolean) => ({type: AUTH.IS_AUTH, isAuth} as const );