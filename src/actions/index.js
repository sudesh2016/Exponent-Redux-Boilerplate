export const LOGGEDIN = 'LOGGEDIN';
export const LOGGEDOUT = 'LOGGEDOUT';
export const PENDING = 'PENDING';

export const requestData = () => ({type: PENDING});

export const exportData = (type, data) => ({type, data});

export const fetchData = params => ((dispatch) => {
  dispatch(requestData());
  return setTimeout(() => {
    if (params) {
      dispatch(exportData(LOGGEDIN, params));
    } else {
      dispatch(exportData(LOGGEDOUT, {user: null}));
    }
  }, 300);
});
