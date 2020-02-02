module.exports = {
  name: 'customer-portal-site-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/site-layout',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
