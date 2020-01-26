module.exports = {
  name: 'customer-portal-business-details',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/business-details',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
