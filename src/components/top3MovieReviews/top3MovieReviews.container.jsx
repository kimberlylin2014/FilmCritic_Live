import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsMovieListLoading } from '../../redux/movie/movie.selectors';
import Top3MovieReviews from './top3MovieReviews.component';
import WithSpinner from '../withSpinner/withSpinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsMovieListLoading
})

const Top3MovieReviewsContainer = connect(mapStateToProps)(WithSpinner(Top3MovieReviews, '600px'))

export default Top3MovieReviewsContainer;