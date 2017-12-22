import axios from 'axios';

export default class gitReposService {
    static getPublicGitrepositories(since) {
        let url = "https://api.github.com/repositories?since="+since
        return axios.get(url)
    }

    static getrepoDetails(url) {
        return axios.get(url)
    }
}