import 'redux';

function goToNextPage(state) {
    return {
        type: 'NEXT_PAGE',
        current_page: state.current_page + 1;
    }
}