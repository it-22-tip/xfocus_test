exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'specs/pegawai.spec.js'
  ],
  params: {
    baseUrl: 'http://xfocus.id.localhost',
  }
};
