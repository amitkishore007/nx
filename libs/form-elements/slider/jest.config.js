module.exports = {
  name: 'form-elements-slider',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form-elements/slider',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
