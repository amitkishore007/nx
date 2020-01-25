module.exports = {
  name: 'form-elements-radio-button',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form-elements/radio-button',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
