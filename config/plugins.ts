// export default () => ({});
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // change to a different folder if you want
        sizeLimit: 1000000, // 1MB limit (example)
      },
      // Default folder
      uploadPath: env('UPLOADS_PATH', 'public/uploads'),
    },
  },
});
