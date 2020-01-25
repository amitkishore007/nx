module.exports = {
  name: 'form-elements-checkbox',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form-elements/checkbox',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
