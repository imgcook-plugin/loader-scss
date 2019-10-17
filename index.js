/**
 * loader 插件模版
 * @param fileValue: 文件内容，生成的代码
 * @param option: { filePath, index, config }
 */
const loaderExample = async (fileValue, option) => {
  return fileValue;
}

module.exports = (...args) => {
  return loaderExample(...args).catch(err => {
    console.log(err);
  });
};