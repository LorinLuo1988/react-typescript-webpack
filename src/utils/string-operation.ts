// 获取url中的路径
const getPathFromUrl = url => url.replace(/^.*?\:\/\/[^\/]+/, '')

// 获取当前url的指定参数
const getUrlQuery = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const regRewrite = new RegExp('(^|/)' + name + '/([^/]*)(/|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  const q = window.location.pathname.substr(1).match(regRewrite)

  if (r != null) {
    return unescape(r[2])
  } else if (q != null) {
    return unescape(q[2])
  } else {
    return null
  }
}

export {
  getPathFromUrl,
  getUrlQuery
}