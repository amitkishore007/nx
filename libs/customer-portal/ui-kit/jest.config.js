module.exports = {
  name: 'customer-portal-ui-kit',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer-portal/ui-kit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
