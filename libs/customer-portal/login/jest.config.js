module.exports = {
  name: 'customer-portal-login',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
