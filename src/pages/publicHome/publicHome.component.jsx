import React from 'react';
import './publicHome.styles.scss';
import { loginUserStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMovieList, selectIsMovieListLoading, selectTopBanner } from '../../redux/movie/movie.selectors';
import PublicMovieSearchBar from '../../components/publicMovieSearchBar/publicMovieSearchBar.component';
import MovieListContainer from '../../components/movieList/movieList.container';
import { resetMovieSearch, getFavoriteMovieReviewsStart } from '../../redux/movie/movie.actions';
import Top3Banner from '../../components/top3Banner/top3Banner.component';

class PublicHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {resetMovieSearch} = this.props;
        window.sessionStorage.removeItem("token");
        resetMovieSearch();
    }

    render() {
        console.log(this.props)
        return (
            <div className='PublicHome'>
                {/* <Top3Banner {...this.props} /> */}
                <div className='container'>
   
                    <div className='row justify-content-center'>
                        <div className='col-lg-5'>
                            <PublicMovieSearchBar />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <MovieListContainer {...this.props} color='dark' privateRoute={false}/>
                        </div>
                    </div>
                </div>              
            </div>
        )
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
      loginUserStart: (credentials) => dispatch(loginUserStart(credentials)),
      resetMovieSearch: () =>  dispatch(resetMovieSearch()),
      getFavoriteMovieReviewsStart: () =>  dispatch(getFavoriteMovieReviewsStart())
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    movieList: selectMovieList,
    isMovieListLoading: selectIsMovieListLoading,
    top3: selectTopBanner
})

export default connect(mapStateToProps, mapDispatchToProps)(PublicHome);