
import $ from 'jquery';

const appState = {
    viewportWidth: 0,
    viewportHeight: 0,

    fetching: {},
    fetched: {},
    fetchingErrors: [],

    data: {}
};



export const TYPEs = {
    DATA_FETCHING: 'dataFetching',
    DATA_FETCHED: 'dataFetched',
    DATA_RESET_FETCHED: 'dataResetFetched',
    DATA_FETCHING_ERROR: 'dataFetchingError',

    APP_DATA: 'appData',
    FETCHED_APP_DATA: 'fetchedAppData',
    SEND_APP_FORM_DATA: 'sendAppFormData',

    GET_VIEWPORT_SIZE: 'getViewportSize',
    ERROR_MESSAGE: 'SERVER FAILED TO RESPONSE, PLEASE TRY AGAIN LATER...',

    GETMATRIX_DATA: 'getMatrixData',
    MATRIX_DATA_LOADED: 'matrixDataLoaded'
}


export function getServiceData() {

    const config = {
        url: 'https://s3.us-east-2.amazonaws.com/anaplancommunity/CommunityDev/anaplan-uhf.html',
        crossDomain: false,
        type: 'GET',
        dataType: 'html',
        beforeSend: function( xhr ) {
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        },
        success: function() { console.log("Success"); },
        error: function( xhr ) { console.log('Failed!', xhr); },
    }

   const serviceResponse =  $.ajax( config );

}
