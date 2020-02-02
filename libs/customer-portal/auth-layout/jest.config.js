module.exports = {
  name: 'customer-portal-auth-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/auth-layout',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
