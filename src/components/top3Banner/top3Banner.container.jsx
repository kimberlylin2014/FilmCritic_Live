import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsTop3MovieListLoading } from '../../redux/movie/movie.selectors';
import WithSpinner from '../withSpinner/withSpinner.component';
import Top3Banner from './top3Banner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsTop3MovieListLoading
})

const Top3BannerContainer = connect(mapStateToProps)(WithSpinner(Top3Banner, '300px'));

export default Top3BannerContainer;