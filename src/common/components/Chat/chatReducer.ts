
export enum ChatReducer {
    
}

export type ChatReducerStateType = typeof initState;
const initState = {
    name: 'Bob'
}

export const chatReducer = (state: ChatReducerStateType = initState, action: any): ChatReducerStateType => {
    switch (action.type) {

        default:
            return state;
    }
};

////Actions
