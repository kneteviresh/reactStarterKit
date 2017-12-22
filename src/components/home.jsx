import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRepos, fetchDetails } from '../action';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            noOfRepos: 10,
            details: {},
            showDetails: false
        }
        this.showReposList = this.showReposList.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.repository.repoDetailsFetched) {
            let thisDetails = {
                Type: nextprops.repository.repoDetails.type,
                Location: nextprops.repository.repoDetails.location,
                CreatedOn: nextprops.repository.repoDetails.created_at,
                isAdmin: nextprops.repository.repoDetails.site_admin ? "YES" : "NO",
                Avatar: nextprops.repository.repoDetails.avatar_url
            }
            this.setState({
                details: thisDetails,
                showDetails: true
            });
        }
    }

    componentWillMount() {
        this.props.getPublicRepos(364);
    }

    handleListClick(index) {
        debugger;
        let selectedRepoUrl = this.props.repository.repos[index].owner.url;
        this.props.getDetailsOfRepo(selectedRepoUrl);
    }

    showReposList() {
        let imageStyle = {
            height: "50px",
            width: "50px"
        }
        var reposList = this.props.repository.repos.map((repo, index) => {

            return <li onClick={(e)=>{this.handleListClick(index)}} style={{ "listStyle": "none" }} key={index}>
                <span><img style={imageStyle} src={repo.owner.avatar_url} /></span>
                <span>{repo.owner.login}</span>
            </li>
        })
        return <ul>{reposList}</ul>
    }

    render() {
        if (this.props.repository.isLoading) {
            return <div><h1>Loading all public repos ......</h1></div>
        }
        else if (this.props.repository.isFetchFail) {
            return <div><h1>Fetch fail</h1></div>
        }
        else {
            let thisStyle = {
                padding:"20px",
                position:"fixed",
                top:"200px",
                right:"200px",
                border:"1px solid black"
            }
            return <div>
                {this.state.showDetails && <div style={thisStyle}>
                    <p>Type : {this.state.details.Type}</p>
                    <p>Location : {this.state.details.Location}</p>
                    <p>Created On: {this.state.details.CreatedOn}</p>
                    <p>is Admin: {this.state.details.isAdmin}</p>
                    <p>Avatar: <img style={{"height":"100px","width":"100px"}} src={this.state.details.Avatar} /></p>
                </div>}
                {this.showReposList()}
            </div>
        }

    }
}

function mapStateToProps(state) {
    return {
        repository: state.repository
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getPublicRepos: (since) => { dispatch(fetchRepos(since)) },
        getDetailsOfRepo: (url) => { dispatch(fetchDetails(url)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);