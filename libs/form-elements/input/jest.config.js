module.exports = {
  name: 'form-elements-input',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form-elements/input',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
