module.exports = {
  name: 'customer-portal-lazy-dashboard',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/customer-portal/lazy/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
