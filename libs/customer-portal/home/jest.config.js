module.exports = {
  name: 'customer-portal-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
