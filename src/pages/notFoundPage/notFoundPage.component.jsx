import React from 'react';
import './notFoundPage.styles.scss';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({history}) => {
    return (
        <div className='NotFoundPage'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-8 d-flex flex-row align-items-center justify-content-center card'>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1476/1476773.svg" alt="404" width='100px'
                        style={{marginRight: "20px"}}
                        />
                       <h1>This Page Does Not Exist. <br></br> Return <span onClick={() => {
                           history.push('/')
                       }}>Home</span>. </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NotFoundPage);