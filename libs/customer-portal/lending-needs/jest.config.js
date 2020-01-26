module.exports = {
  name: 'customer-portal-lending-needs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/lending-needs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
