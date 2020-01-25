module.exports = {
  name: 'customer-portal-lazy-business-details',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/customer-portal/lazy/business-details',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
