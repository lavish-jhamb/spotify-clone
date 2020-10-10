export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER DEVELOPING....
    // token: 'BQCTgra--zJv21zXS3GPtvlNFdSP6T6xoEME1hleVwdnD_bph7VIIibDaclGycdCV9gqRhyXChvfDo6QVS41ZtopZKcPuAlwJxYpUajNrAATifQb6kfotTpMrTZciJykCra1ZNC2DNvKEmkyeFAkdOlO_kUjemC3IDx_-U4Ebjy482xx'
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}
export default reducer;