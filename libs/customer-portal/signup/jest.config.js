module.exports = {
  name: 'customer-portal-signup',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/signup',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
