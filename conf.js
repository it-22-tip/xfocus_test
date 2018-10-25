exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'specs/pegawai.spec.js'
  ],
  params: {
    base_url: 'http://xfocus.id.localhost',
    cl_no: '111',
    username: 'TRIAL',
    password: 'TRIAL',
  }
};
