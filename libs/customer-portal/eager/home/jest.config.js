module.exports = {
  name: 'customer-portal-eager-home',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/customer-portal/eager/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
