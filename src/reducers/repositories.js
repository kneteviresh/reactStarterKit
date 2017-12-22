const INITIAL_STATE = {
    isLoading: false,
    repos: [],
    isFetchFail: false,
    repoDetailsFetched: false,
    repoDetails: {}
};

const repository = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOADING':
            return Object.assign({}, state, {
                isLoading: true
            })
        case 'FETCH_REPOS_SUCCESS':
            let newRepos = state.repos.concat(action.repos);
            return Object.assign({}, state, {
                repos: newRepos,
                isLoading: false
            })
        case 'FETCH_REPOS_FAIL':
            return Object.assign({}, state, {
                isLoading: false,
                isFetchFail: true
            })

        case "REPO_DETAILS_FETCH_SUCCESS":
        debugger;
            return Object.assign({}, state, {
                repoDetailsFetched: true,
                repoDetails: action.details
            })
        default:
            return state;
    }
};

export default repository;