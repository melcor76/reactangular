module.exports = {
  name: 'elements',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/elements',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
