import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsTop3MovieListLoading } from '../../redux/movie/movie.selectors';
import WithSpinner from '../withSpinner/withSpinner.component';
import Top3MovieReviews from './top3MovieReviews.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsTop3MovieListLoading
})

const Top3MovieReviewsContainer = connect(mapStateToProps)(WithSpinner(Top3MovieReviews, '600px'));

export default Top3MovieReviewsContainer;