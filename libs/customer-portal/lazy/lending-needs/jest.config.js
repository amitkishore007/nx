module.exports = {
  name: 'customer-portal-lazy-lending-needs',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/customer-portal/lazy/lending-needs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
