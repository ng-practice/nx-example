module.exports = {
  name: 'fanshop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fanshop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
