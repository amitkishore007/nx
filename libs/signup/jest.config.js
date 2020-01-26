module.exports = {
  name: 'signup',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/signup',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
