export default {
  getAppConfigData: () => new Promise((resolve) => {
    const appConfigData = {
      data: [], // array for your app configurations
    };
    setTimeout(() => {
      resolve({ data: appConfigData });
    }, 1000);
  }),
};
