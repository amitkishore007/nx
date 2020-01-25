module.exports = {
  name: 'form-elements-file',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form-elements/file',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
