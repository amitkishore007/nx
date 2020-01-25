module.exports = {
  name: 'errors',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/errors',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
