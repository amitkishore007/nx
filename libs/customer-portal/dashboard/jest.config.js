module.exports = {
  name: 'customer-portal-dashboard',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
