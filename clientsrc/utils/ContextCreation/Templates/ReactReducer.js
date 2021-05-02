export default function ReactState(contextName) {
  return `const ${contextName}Reducer = (state, action) => {
    switch (action.type){
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state
    }
}

export default ${contextName}Reducer;`;
}
