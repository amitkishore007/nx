module.exports = {
  name: 'form-elements-textarea',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form-elements/textarea',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
