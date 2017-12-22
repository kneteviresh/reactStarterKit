import gitReposService from './service';

export function fetchRepos(since) {
    return function (dispatch) {

        return gitReposService.getPublicGitrepositories(since)
            .then(response => {
                dispatch({
                    type: "FETCH_REPOS_SUCCESS",
                    repos: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: "FETCH_REPOS_FAIL",
                    msg: "UnAuthorised"
                });
            })
    }
}

export function fetchDetails(url) {
    return function (dispatch) {

        return gitReposService.getrepoDetails(url)
            .then(response => {
                dispatch({
                    type: "REPO_DETAILS_FETCH_SUCCESS",
                    details: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: "REPO_DETAILS_FETCH_FAIL",
                    msg: "UnAuthorised"
                });
            })
    }
}

// export function fetchDetails(url) {
//     return function (dispatch{
//         return gitReposService.getPublicGitrepositories(since)
//         .then(response => {
//             dispatch({
//                 type: "FETCH_REPOS_SUCCESS",
//                 repos: response.data
//             });
//         })
//     }


//         return gitReposService.getrepoDetails(url)
//             .then(response => {
//                 dispatch({
//                     type: "REPO_DETAILS_FETCH_SUCCESS",
//                     details: response.data
//                 });
//             })
//     })

// }