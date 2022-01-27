export const dispatchLoading = (type) => {
    return {
      loading: true,
      data: false,
      error: false,
    };
  };
  
  export const dispatchSuccess = (data) => {
    return {
      loading: false,
      data: data,
      error: false,
    };
  };
  
  export const dispatchError = (error) => {
    return {
      loading: false,
      data: false,
      error: error,
    };
  };